import providers from "../assets/images/providers.png" 

const Providers: React.FC = () => {
  return (
    <div>
      <section className="flex flex-col lg:flex-row items-center  mt-[10%] justify-between px-8 lg:px-16 py-16 bg-white">
        {/* Illustration */}
        <div className="lg:w-1/2 flex justify-center">
          <img
            src={providers}
            alt="Healthcare Illustration"
            className="w-[80%] lg:w-[70%] h-auto"
          />
        </div>
        {/* Text Content */}
        <div className="lg:w-1/2 text-center lg:text-left mb-8 lg:mb-0">
          <h1 className="text-2xl lg:ml-[12%] font-semibold text-gray-800 ">
            Leading healthcare <br /> providers
          </h1>

          {/* Short Left-Aligned Line */}
          <div className="w-10 border-b-2 border-gray-500 lg:ml-[12%] mt-4"></div>

          <p className="mt-4 text-xs lg:ml-[12%] text-gray-500">
            Trafalgar provides progressive and affordable <br />
            healthcare, accessible on mobile and online for <br /> everyone. To
            us it is not just work; we take pride <br /> in the work we deliver.
          </p>

          <button className="mt-6 px-6 py-3 ml-[10%] border-solid border-1 border-b-blue-500 mx-auto my-auto font-medium text-blue-500 text-sm rounded-full hover:bg-blue-600 hover:text-white">
            Learn more
          </button>
        </div>
      </section>
    </div>
  );
}

export default Providers;