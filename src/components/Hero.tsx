import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <div className="relative bg-white pt-24 pb-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
          <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 sm:text-center lg:px-0 lg:text-left lg:flex lg:items-center">
            <div className="lg:py-24">
              <h1 className="mt-4 text-4xl tracking-tight font-extrabold text-gray-900 sm:mt-5 sm:text-6xl lg:mt-6">
                <span className="block">Find Your Next</span>
                <span className="block text-primary">IT Career</span>
              </h1>
              <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                Connecting top IT talent with leading companies. We specialize in
                staffing solutions for IT, accounting, finance, engineering, and
                government sectors.
              </p>
              <div className="mt-10 sm:mt-12">
                <div className="sm:flex sm:justify-center lg:justify-start">
                  <Button className="bg-primary hover:bg-primary-dark text-white px-8 py-6 text-lg">
                    Find Jobs
                  </Button>
                  <Button
                    variant="outline"
                    className="mt-3 sm:mt-0 sm:ml-3 px-8 py-6 text-lg"
                  >
                    Hire Talent
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-12 -mb-16 sm:-mb-48 lg:m-0 lg:relative">
            <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 lg:max-w-none lg:px-0">
              <img
                className="w-full lg:absolute lg:inset-y-0 lg:left-0 lg:h-full lg:w-auto lg:max-w-none rounded-lg shadow-xl"
                src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d"
                alt="Person working on laptop"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;