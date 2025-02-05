

import hero from "../assets/images/hero.png"

const Hero: React.FC = () => {
  return (
    <section className="flex flex-col lg:flex-row items-center justify-between px-8 lg:px-16 py-16 bg-white">
      {/* Text Content */}
      <div className="lg:w-1/2 text-center lg:text-left mb-8 lg:mb-0">
        <h1 className="text-4xl lg:ml-[12%] font-semibold text-gray-800 leading-tight">
          Virtual healthcare <br /> for you
        </h1>
        <p className="mt-4 text-sm lg:ml-[12%] text-gray-500">
          Trafalgar provides progressive and affordable <br />
          healthcare, accessible on mobile and online <br />
          for everyone.
        </p>
        <button className="mt-6 px-6 py-3 lg:ml-[12%] font-medium text-white text-sm rounded-full bg-blue-500 shadow-lg hover:bg-blue-600">
          Consult today
        </button>
      </div>

      {/* Illustration */}
      <div className="lg:w-1/2 flex justify-center">
        <img
          src={hero}
          alt="Healthcare Illustration"
          className="w-[80%] lg:w-[70%] h-auto"
        />
      </div>
    </section>
  );
};

export default Hero;