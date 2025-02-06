import articles1 from "../assets/images/articles1.png";
import articles2 from "../assets/images/articles2.png";
import articles3 from "../assets/images/articles3.png";

interface Article {
  id: number;
  title: string;
  description: string;
  image: string;
  link: string;
}

const articles: Article[] = [
  {
    id: 1,
    title: "Disease detection, check up in the laboratory",
    description:
      "In this case, the role of the health laboratory is very important to do a disease detection...",
    image: articles1,
    link: "Read more",
  },
  {
    id: 2,
    title: "Herbal medicines that are safe for consumption",
    description:
      "Herbal medicine is very widely used at this time because of its very good for your health...",
    image: articles2,
    link: "Read more",
  },
  {
    id: 3,
    title: "Natural care for healthy facial skin",
    description:
      "A healthy lifestyle should start from now and also for your skin health. There are some...",
    image: articles3,
    link: "Read more",
  },
];
const LatestArticles: React.FC = () => {
  return (
    <div className="py-12 mt-[-35%] px-6">
      <div className="w-[60%] mx-auto">
        {/* Heading */}
        <h2 className="text-2xl font-bold text-center mb-4">
          Check out our latest article
        </h2>
        <hr className="border-t-2 border-black w-12 mx-auto mb-8" />
        {/* Article Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article) => (
            <div
              key={article.id}
              className="bg-white text-left rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow flex flex-col justify-between h-[400px]" // Set fixed height
            >
              {/* Image */}
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-40 object-cover"
              />
              {/* Content */}
              <div className="p-6 flex-grow">
                <h3 className="text-sm mb-2 text-gray-800">{article.title}</h3>
                <p className="text-xs text-gray-400 mb-4">
                  {article.description}
                </p>
              </div>
              {/* Read More Link */}
              <div className="p-6">
                <a
                  href="#"
                  className="text-blue-500 text-sm flex items-center hover:underline"
                >
                  {article.link} <span className="ml-1">&rarr;</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LatestArticles;
