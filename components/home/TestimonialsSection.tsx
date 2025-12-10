import React from 'react';
import { Playfair_Display } from 'next/font/google';

const playfairDisplay = Playfair_Display({ 
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'] 
});

const TestimonialsSection: React.FC = () => {
  return (
    <section id="testimonial">
      <div
        className="w-full bg-cover bg-center bg-no-repeat px-6 py-16 relative"
        style={{
          backgroundImage: "url('/images/bg-1.png')", 
          backgroundColor: '#234215',
          backgroundBlendMode: 'overlay', 
        }}
      >
       

        {/* Content Container */}
        <div className="relative z-10 max-w-7xl mx-auto">
          {/* Title */}
          <h2
            className={`${playfairDisplay.className} text-4xl md:text-5xl lg:text-6xl italic text-white text-center mb-12 tracking-wide`}
            style={{ fontWeight: 400, textTransform: 'capitalcase' }} 
          >
            Testimonials
          </h2>

          {/* Video Container */}
          <div className="flex justify-center items-center">
            <div className="w-full max-w-5xl aspect-video rounded-3xl overflow-hidden shadow-2xl">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/I1XQSHm2DSQ"
                title="86 Banyan Tree Testimonial Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
