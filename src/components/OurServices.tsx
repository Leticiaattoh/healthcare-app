import servicesImages from "../assets/images/servicesImage.png";


const OurServices: React.FC = () => {
  return (
    <div>
      <div>
        <h1 className="mb-3.5 font-semibold text-gray-800 text-lg">
          Our services
        </h1>
        <div className="w-[2%] font-extrabold items-center mx-auto my-auto">
          {" "}
          <hr />
        </div>
        <p className="text-xs text-gray-400 mt-3.5">
          We provide to you the best choices for you.Adjust it to your health
          needs and make sure your undergo treatment <br /> with our highly
          qualified doctors you can consult with us which type of service is
          suitable for your health
        </p>
      </div>
      <div>
        <img
          src={servicesImages}
          alt="Services"
          srcSet=""
          className="w-[35%] ml-[9%] mt-[-5%]"
        />
          </div>

             
          </div>

  );
};

export default OurServices;
