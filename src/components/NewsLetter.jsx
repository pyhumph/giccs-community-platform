import Slogan from "./slogan";

export default function NewsletterSection() {
  const newsItems = [
    {
      id: 1,
      date: "25 Apr",
      category: "Community Development",
      title: "Empowering Local Communities Through Sustainable Projects",
      views: 12,
      shares: 0,
      image: "/news/community-interview.jpg",
    },
    {
      id: 2,
      date: "25 Apr",
      category: "Community Development",
      title: "Empowering Local Communities Through Sustainable Projects",
      views: 12,
      shares: 0,
      image: "/news/community-interview.jpg",
    },
    {
      id: 3,
      date: "25 Apr",
      category: "Community Development",
      title: "Empowering Local Communities Through Sustainable Projects",
      views: 12,
      shares: 0,
      image: "/news/community-interview.jpg",
    },
  ];

  return (
    <div className="w-full bg-gray-50 py-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-center">
          <Slogan />
        </div>
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold">
            <span className="text-gray-800">Our Latest </span>
            <span className="text-yellow-500">Newsletter</span>
            <span className="text-gray-800"> And</span>
            <br />
            <span className="text-gray-800">Insights You Like</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {newsItems.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <div className="relative">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute bottom-0 right-0 bg-yellow-500 text-white p-2 rounded-tl-lg">
                  <div className="text-center font-bold">
                    {item.date.split(" ")[0]}
                  </div>
                  <div className="text-xs">{item.date.split(" ")[1]}</div>
                </div>
              </div>

              <div className="p-4">
                <div className="text-yellow-500 text-sm font-medium mb-2">
                  {item.category}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">
                  {item.title}
                </h3>

                <div className="flex justify-between text-gray-500 text-sm">
                  <div className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 mr-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                      />
                    </svg>
                    <span>Views ({item.views})</span>
                  </div>

                  <div className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 mr-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
                      />
                    </svg>
                    <span>Shares</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <button className="bg-yellow-500 hover:bg-yellow-600 text-black px-6 py-3 rounded-full font-medium flex items-center gap-2">
            View All
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
