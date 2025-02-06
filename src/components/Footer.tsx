import footer from "../assets/images/footer.png";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-r mt-[7%] from-blue-400 to-blue-500 text-white py-12 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Company Info */}
        <div>
          <div className="flex items-center mb-5 space-x-4">
            <img
              src={footer}
              alt="Trafalgar Logo"
              className="w-10 h-8 rounded-full"
            />
            <h2 className="text-lg font-bold">Trafalgar</h2>
          </div>
          <p className="text-sm text-left">
            Trafalgar provides progressive, and affordable healthcare,
            accessible on mobile and online for everyone.
          </p>
          <p className="mt-4 text-xs text-left">
            ©Trafalgar PTY LTD 2020. All rights reserved
          </p>
        </div>

        {/* Links Section */}
        <div>
          <h3 className="text-sm font-semibold  mb-4">Company</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#about" className=" text-xs hover:underline">
                About
              </a>
            </li>
            <li>
              <a href="#testimonials" className=" text-xs hover:underline">
                Testimonials
              </a>
            </li>
            <li>
              <a href="#find-a-doctor" className=" text-xs hover:underline">
                Find a doctor
              </a>
            </li>
            <li>
              <a href="#apps" className=" text-xs hover:underline">
                Apps
              </a>
            </li>
          </ul>
        </div>

        {/* Region Section */}
        <div>
          <h3 className="text-sm font-semibold mb-4">Region</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#indonesia" className=" text-xs hover:underline">
                Indonesia
              </a>
            </li>
            <li>
              <a href="#singapore" className=" text-xs hover:underline">
                Singapore
              </a>
            </li>
            <li>
              <a href="#hongkong" className=" text-xs hover:underline">
                Hongkong
              </a>
            </li>
            <li>
              <a href="#canada" className=" text-xs hover:underline">
                Canada
              </a>
            </li>
          </ul>
        </div>

        {/* Help Section */}
        <div>
          <h3 className="text-sm font-semibold mb-4">Help</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#help-center" className=" text-xs hover:underline">
                Help center
              </a>
            </li>
            <li>
              <a href="#contact-support" className=" text-xs hover:underline">
                Contact support
              </a>
            </li>
            <li>
              <a href="#instructions" className="text-xs hover:underline">
                Instructions
              </a>
            </li>
            <li>
              <a href="#how-it-works" className=" text-xs hover:underline">
                How it works
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
