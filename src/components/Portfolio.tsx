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
      link: "https://josseycart-backend.onrender.com/api/products/",
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
      id: 7,
      image: "/assets/img/schoolweb.png",
      title: "Fullstack Multiple user role School Website",
      description:
        "A comprehensive school management system with multiple user roles including admin, teachers, and students.",
      link: "https://school-management-app-frontend.onrender.com/",
    },
    {
      id: 8,
      image: "/assets/img/schoolapi.png",
      title: "REST API for a school website",
      description:
        "Backend REST API built with Django for a school management system with authentication and data management.",
      link: "https://josseycodes-academy.onrender.com/",
    },
  ];

  return (
    <section id="portfolio" className="py-24 bg-white">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">My Portfolio</h2>
          <div className="w-24 h-1.5 bg-pink-500 mx-auto rounded-full mb-2"></div>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            A collection of my recent projects and creative work
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
          {portfolioItems.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="h-56 overflow-hidden relative">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-3 leading-tight">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-base mb-6 leading-relaxed">
                  {item.description}
                </p>
                <div className="pt-2">
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-pink-500 text-white px-6 py-3 rounded-lg hover:bg-pink-600 transition-colors duration-300 font-medium"
                  >
                    View Website
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-16">
          <p className="text-gray-500 text-sm">
            Showing {portfolioItems.length} projects
          </p>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;