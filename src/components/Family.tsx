import React from 'react';
import { Button } from './ui/button';

const Family = () => {
  return (
    <section className="bg-[#040842] text-white py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="max-w-xl">
            <h2 className="text-4xl font-bold mb-6">
              Here For You, Every Step of the Way
            </h2>
            <p className="text-lg mb-9">
              Welcome to Workist, where every individual is valued and cherished like family. 
              Whether you join us as an in-house team member or as a consultant, we are thrilled 
              to have you onboard. We believe in your potential and are committed to helping you 
              achieve your most ambitious goals.
            </p>
            <Button 
              className="bg-white text-[#040842] hover:bg-gray-100"
              asChild
            >
              <a href="/careers">Explore Careers</a>
            </Button>
          </div>
          
          <div className="relative w-full h-[400px] overflow-hidden rounded-lg">
            <img
              src="/photo-1519389950473-47ba0277781c"
              alt="Team collaborating at work"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Family;