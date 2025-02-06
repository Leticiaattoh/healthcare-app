import services1 from "../assets/images/services1.png";
import services2 from "../assets/images/services2.png";
import services3 from "../assets/images/services3.png";
import services4 from "../assets/images/services4.png";
import services5 from "../assets/images/services5.png";
import services6 from "../assets/images/services6.png";


const ServiceInfo = () => {
  const services = [
    {
      id: 1,
      image: services1,
      text: "Search doctor",
      description: "Choose your doctor from thousands of specialist, general, and trusted hospitals",
    },
    {
      id: 2,
      image: services2,
      text: "Online pharmacy",
      description: "Buy your medicines with our mobile application with a simple delivery system",
    },
    {
      id: 3,
      image: services3,
      text: "Consultation",
      description: "Free consultation with our trusted doctors and get the best recommendations",
    },
    {
      id: 4,
      image: services4,
      text: "Details info",
      description: "Free consultation with our trusted doctors and get the best recommendations",
    },
    {
      id: 5,
      image: services5,
      text: "Emergency care",
      description: "You can get 24/7 urgent care for yourself or your children and your lovely family",
    },
    {
      id: 6,
      image: services6,
      text: "Tracking",
      description: "Track and save your medical history and health data",
    },
  ];

  return (

    <div className="grid grid-cols-1 w-[70%]  mx-auto my-auto sm:grid-cols-2 mt-[-32%] lg:grid-cols-3 gap-8 p-10">
      {services.map((service) => (
        <div
          key={service.id}
          className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-start"
        >
          <img
            src={service.image}
            alt={service.text}
            className="w-14 h-16 mb-4"
          />
          <h3 className="text-sm font-semibold text-gray-800 mb-2">
            {service.text}
          </h3>
          <p className="text-[0.65rem]  text-left text-gray-600">{service.description}</p>
          </div>
         
      ))}
    </div>
  );
};

export default ServiceInfo;



