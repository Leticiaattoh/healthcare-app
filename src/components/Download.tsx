import download from "../assets/images/download.png"

const Download: React.FC = () => {
    return (
      <div>
        <section className="flex flex-col lg:flex-row items-center  mt-[10%] justify-between px-8 lg:px-16 py-16 bg-white">
          {/* Text Content */}
          <div className="lg:w-1/2 text-center ml-[10%]  lg:text-left mb-8 lg:mb-0">
            <h1 className="text-2xl lg:ml-[12%] font-semibold text-gray-800 ">
              Download our <br /> mobile apps
            </h1>

            {/* Short Left-Aligned Line */}
            <div className="w-10 border-b-2 border-gray-500 lg:ml-[12%] mt-4"></div>

            <p className="mt-2 text-xs lg:ml-[12%] text-gray-500">
              Our dedicated patient engagement app and <br />
              web portal allow you to access information <br /> instantaneously
              (no tedeous form, long calls, <br /> or administrative hassle) and
              securely
            </p>

            <button className="mt-6 px-6 py-3 ml-[10%] border border-blue-500 font-medium text-blue-500 text-sm rounded-full hover:bg-blue-600 hover:text-white">
              Download <span className="ml-1"> ↓</span>
            </button>
          </div>

          {/* Illustration */}
          <div className="lg:w-1/2 flex justify-center">
            <img
              src={download}
              alt="Healthcare Illustration"
              className="w-[80%] mr-[10%] lg:w-[80%] h-auto"
            />
          </div>
        </section>
      </div>
    );
};

export default Download;