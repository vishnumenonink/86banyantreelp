"use client"
import React, { useState } from 'react';
import { Playfair_Display, Lato } from 'next/font/google';

const playfairDisplay = Playfair_Display({ 
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'] 
});
const ConnectivitySection: React.FC = () => {
    // ✅ Default now set to 'google'
    const [activeTab, setActiveTab] = useState<'location' | 'google'>('google');

    const locations = [
        { name: 'University Circle', distance: '25 Km' },
        { name: 'IT Park Hinjawadi', distance: '10 Km' },
        { name: 'Lonavala', distance: '35 Km' },
        { name: 'Pune International Airport', distance: '40 Km' },
        { name: 'Mumbai-Pune Expressway', distance: '6 Km' },
    ];

    return (
        <>
            <section>
                <div className="w-full bg-[#234215] px-6 py-16">
                    <div className="max-w-6xl mx-auto">
                        <h2
                            className={`${playfairDisplay.className} text-4xl md:text-5xl lg:text-6xl italic text-white text-center mb-12 tracking-wide`}
                            style={{ fontWeight: 400, textTransform: 'capitalcase' }}
                        >
                            Enriched, Even In Connectivity
                        </h2>
                        <p className="text-white text-center text-base md:text-lg lg:text-xl leading-relaxed mb-16 max-w-5xl mx-auto px-4">
                            Nestled in Chandkheda's serene setting, 86 Banyan Tree offers seamless access to both daily conveniences and natural beauty. Just 40 minutes from Hinjawadi, it keeps you close to major IT and commercial hubs, premium malls, prominent schools, colleges, hospitals and vibrant dining and leisure spots.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-16">
                            {locations.map((location, index) => (
                                <div key={index} className="flex items-center text-white text-lg md:text-xl">
                                    <span className="mr-4 text-2xl">▶</span>
                                    <div className="flex items-baseline flex-wrap">
                                        <span className="font-semibold">{location.name}</span>
                                        <span className="mx-2">:</span>
                                        <span className="font-light">{location.distance}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <section id="location">
                <div className="w-full bg-[#E8E8E8] py-12">
                    <div className="max-w-7xl mx-auto px-4">
                        <div className="flex justify-center mb-8">
                            <div className="inline-flex rounded-full overflow-hidden shadow-lg">
                                <button
                                    onClick={() => setActiveTab('location')}
                                    className={`px-8 py-3 text-lg font-medium transition-colors duration-300 ${activeTab === 'location'
                                            ? 'bg-black text-white'
                                            : 'bg-amber-700 text-white hover:bg-amber-800'
                                        }`}
                                >
                                    Location Map
                                </button>
                                <button
                                    onClick={() => setActiveTab('google')}
                                    className={`px-8 py-3 text-lg font-medium transition-colors duration-300 ${activeTab === 'google'
                                            ? 'bg-black text-white'
                                            : 'bg-amber-700 text-white hover:bg-amber-800'
                                        }`}
                                >
                                    Google Map
                                </button>
                            </div>
                        </div>

                        <div className="flex justify-center items-center">
                            {activeTab === 'location' ? (
                                <div className="w-full max-w-5xl bg-white rounded-lg shadow-xl p-4">
                                    <img
                                        src="/images/map.png"
                                        alt="Location Map showing 86 Banyan Tree connectivity"
                                        className="w-full h-auto rounded"
                                    />
                                </div>
                            ) : (
                                <div className="w-full max-w-5xl bg-white rounded-lg shadow-xl overflow-hidden">
                                    <iframe
                                        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d18603.611794950102!2d73.645516!3d18.673801!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2afe0f0498f51%3A0xdbbf0b15f88dde41!2s86%20Banyan%20Tree!5e1!3m2!1sen!2sin!4v1763457782133!5m2!1sen!2sin"
                                        width="100%"
                                        height="600"
                                        style={{ border: 0 }}
                                        allowFullScreen
                                        loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade"
                                        title="Google Map showing 86 Banyan Tree location"
                                    />
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ConnectivitySection;
