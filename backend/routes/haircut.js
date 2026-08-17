const express = require("express");
const multer = require("multer");
const router = express.Router();

const upload = multer({
    storage: multer.memoryStorage(),
    limits: {fileSize: 5 * 1024 * 1024 },
});

router.post("/recommend", upload.single("photo"), async (req, res) =>{
   try{
    if (!req.file) {
        return res.status(400).json({ message: "No photo upload" });
    } 

    const imageBase64 = req.file.buffer.toString("base64");
    const mediaType = req.file.mimetype;

    const response = await fetch("https://api.anthropic.com/v1/messages", {
        method: "POST",
        headers: {
            "x-api-key": process.env.ANTHROPIC_API_KEY,
            "anthropic-version": "2023-06-01",
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            model: "claude-sonnet-4-6",
            max_tokens: 1000,
            messages: [
                {
                    role: "user",
                    content: [
                        {
                            type: "image",
                            source: { type: "base64", media_type: mediaType, data: imageBase64 },
                        },
                        {
                            type: "text",
                            text: "Look at this person's face shape and current hair. Recommend 3 haircut styles that would suit them well, with a short reason for each. Respond ONLY with valid JSON in this exact format, no other text: [{\"style\": \"\", \"reason\": \"\"}]"
                        },
                    ],
                },
            ],
        }),
    });

    const data = await response.json();

    if (!response.ok) {
        console.error("ANTHROPIC API ERROR:", data);
        return res.status(500).json({ message: "AI request failed" });
    }

    const rawText = data.content[0].text;
    const cleaned = rawText.replace(/```json|```/g, "").trim();
    const recommendations = JSON.parse(cleaned);
    res.json({ recommendations });

  } catch (error) {
      console.error("HAIRCUT RECOMMENDATION ERROR", error);
      res.status(500).json({ message: "Error generating haircut recommendation"});
  }
});

module.exports = router;