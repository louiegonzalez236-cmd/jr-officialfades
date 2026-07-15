import React from 'react';
import './Hero.css';

function Hero() {
    return (
        <section className='hero'>
            <div className='hero-content'>
                <h1>
                    Where sharp men <span>get sharper.</span>
                </h1>
                <p>
                    precision cuts, traditional shaves, and space that takes grooming seriously.
                </p>
                
                <div className='hero-buttons'>
                    <button className='btn-primary'>Book Appointment</button>
                    <button className='btn-secondary'>View Services</button>
                </div>

                <div className='hero-stats'>
                    <div>
                        <h3>14+</h3>
                        <p>Years open</p>
                    </div>
                    <div>
                        <h3>3,200+</h3>
                        <p>Clients served</p>
                    </div>
                    <div>
                        <h3>4.9</h3>
                        <p>Avg. rating</p>
                    </div>

                </div>

            </div>

        </section>
    );
}

export default Hero;