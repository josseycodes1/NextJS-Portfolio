import Image from "next/image";

const PortfolioSection = () => {
  const portfolioItems = [
    {
      id: 1,
      image: "/assets/img/ecomm1.png",
      title: "Fullstack Fragrance E-commerce Website",
      description:
        "A single seller fragrance ecommerce website with cart, seller dashboard and buyer functionality.",
      link: "https://scent-shop.vercel.app/",
    },
    {
      id: 2,
      image: "/assets/img/ecomm2.png",
      title: "REST API for a Fragrance E-commerce Website",
      description:
        "Backend REST API built with Django for a single seller fragrance ecommerce website with cart, seller dashboard and buyer functionality.",
      link: "https://josseycodes-academy.onrender.com/",
    },
    {
      id: 3,
      image: "/assets/img/meportfolio2.png",
      title: "Portfolio Design",
      description:
        "A modern and responsive portfolio website showcasing my projects and skills as a developer.",
      link: "https://portfoliosite-sage-psi.vercel.app/",
    },
    {
      id: 4,
      image: "/assets/img/crownex.png",
      title: "Blogsite Application",
      description:
        "A blog platform featuring articles on various topics with content management capabilities.",
      link: "https://crownexempire.blogspot.com/",
    },
    {
      id: 5,
      image: "/assets/img/meportfolio1.png",
      title: "Portfolio Design",
      description:
        "Another portfolio design showcasing different styling approaches and layout techniques.",
      link: "https://josseycodes.pythonanywhere.com/",
    },
    {
      id: 6,
      image: "/assets/img/companyweb.png",
      title: "Company website",
      description:
        "A professional company website with services, about section, and contact information.",
      link: "https://cool-axolotl-18dcfd.netlify.app/",
    },
    {
    id: 6,
      image: "/assets/img/schoolweb.png",
      title: "Fullstack Multiple user role School Website",
      description:
        "A comprehensive school management system with multiple user roles including admin, teachers, and students.",
      link: "https://school-management-app-frontend.onrender.com/",
    },
    {
      id: 7,
      image: "/assets/img/schoolapi.png",
      title: "REST API for a school website",
      description:
        "Backend REST API built with Django for a school management system with authentication and data management.",
      link: "https://josseycodes-academy.onrender.com/",
    },
  ];

  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-700">My Portfolio</h2>
          <div className="w-20 h-1 bg-pink-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-lg overflow-hidden shadow-md transition-transform hover:scale-105"
            >
              <div className="h-48 overflow-hidden relative">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-700 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4">{item.description}</p>
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-600 transition-colors"
                >
                  View Website
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
