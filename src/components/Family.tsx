import React from 'react';
import { Button } from './ui/button';

const Family = () => {
  return (
    <section className="bg-[#040842] text-white py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="max-w-xl">
            <h2 className="text-4xl font-bold mb-6">
              We Love Our People Like Family
            </h2>
            <p className="text-lg mb-9">
              Whether you join us as an in-house team member or consultant, you're family. 
              We believe in your potential and we are devoted to helping you achieve your biggest, 
              boldest ambitions. We're here for you and we won't stop until you're exactly where 
              you want to be.
            </p>
            <Button 
              className="bg-white text-[#040842] hover:bg-gray-100"
              asChild
            >
              <a href="/careers">Explore Careers</a>
            </Button>
          </div>
          
          <div className="relative w-full pt-[41.67%]">
            <iframe
              src="https://player.vimeo.com/video/505519111?badge=0&autopause=0&player_id=0&app_id=58479&title=0&byline=0"
              className="absolute top-0 left-0 w-full h-full"
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
              title="The Call"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Family;