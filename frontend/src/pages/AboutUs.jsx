// 1st onne-----

import { Link } from "react-router-dom";

const AboutUs = () => {
    return (
      <div
        className="min-h-screen py-12"
        style={{ backgroundColor: "#FEFAE0" }}
      >
        <div className="max-w-4xl mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-16">
            <h1
              className="text-4xl font-bold mb-4"
              style={{ color: "#BC6C25" }}
            >
              About Our FahamBooks
            </h1>
            <div
              className="w-24 h-1 mx-auto mb-6"
              style={{ backgroundColor: "#DDA15E" }}
            ></div>
            <p className="text-lg" style={{ color: "#606C38" }}>
              Bridging Technology and Literature Through Innovative Solutions
            </p>
          </div>

          {/* Project Showcase */}
          <div className="mb-20 grid gap-8 md:grid-cols-2">
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <h3
                className="text-2xl font-bold mb-4"
                style={{ color: "#283618" }}
              >
                📚 Our Vision
              </h3>
              <p className="mb-6" style={{ color: "#606C38" }}>
                Create a seamless digital experience that mirrors the joy of
                physical book browsing, enhanced with smart recommendations and
                community features.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <h3
                className="text-2xl font-bold mb-4"
                style={{ color: "#283618" }}
              >
                🔧 Key Features
              </h3>
              <ul
                className="list-disc pl-6 space-y-2"
                style={{ color: "#606C38" }}
              >
                <li>JWT Authentication System</li>
                <li>Real-time Inventory Updates</li>
                <li>Order Tracking Dashboard</li>
                <li>Responsive UI/UX Design</li>
              </ul>
            </div>
          </div>

          {/* Team Section */}
          <div className="space-y-16">
            {/* Team Member 1 */}
            <div className="flex flex-col md:flex-row items-center gap-8 bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition-shadow">
              <div className="relative group md:w-1/3">
                <div className="absolute inset-0 bg-#DDA15E opacity-0 group-hover:opacity-20 rounded-xl transition-opacity"></div>
                <img
                  src="img_hamza.JPG"
                  alt="Hamza Owais"
                  className="w-full h-64 object-cover rounded-xl transform group-hover:scale-102 transition-transform"
                />
              </div>
              <div className="md:w-2/3">
                <h2
                  className="text-3xl font-bold mb-2"
                  style={{ color: "#BC6C25" }}
                >
                  Muhammad Hamza Owais
                </h2>
                <p className="text-lg mb-4" style={{ color: "#606C38" }}>
                  Lead Frontend Architect
                </p>
                <p className="mb-4" style={{ color: "#283618" }}>
                  Specializes in React ecosystem and UI/UX design, with focus on
                  creating intuitive user interfaces and seamless interactions.
                </p>
                <div className="space-y-1">
                  <p
                    className="flex items-center gap-2"
                    style={{ color: "#606C38" }}
                  >
                    <span>📧</span> muhammadhamzaowais5@gmail.com
                  </p>
                  <p
                    className="flex items-center gap-2"
                    style={{ color: "#606C38" }}
                  >
                    <span>📱</span> +92 334 0246628
                  </p>
                </div>
              </div>
            </div>

            {/* Team Member 2 */}
            <div className="flex flex-col md:flex-row items-center gap-8 bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition-shadow">
              <div className="relative group md:w-1/3">
                <div className="absolute inset-0 bg-#DDA15E opacity-0 group-hover:opacity-20 rounded-xl transition-opacity"></div>
                <img
                  src="https://media.licdn.com/dms/image/v2/D4D03AQFt6YITvKZ4ZA/profile-displayphoto-shrink_800_800/B4DZT_VOg9G4Ac-/0/1739450543570?e=1746057600&v=beta&t=EDp2mNer7yOqufz3wbEkLuQw1Jc_cyPmskrYlyN7XEo"
                  alt="Muhammad Fahad"
                  className="w-full h-64 object-cover rounded-xl transform group-hover:scale-102 transition-transform"
                />
              </div>
              <div className="md:w-2/3">
                <h2
                  className="text-3xl font-bold mb-2"
                  style={{ color: "#BC6C25" }}
                >
                  Muhammad Fahad
                </h2>
                <p className="text-lg mb-4" style={{ color: "#606C38" }}>
                  Backend & DevOps Engineer
                </p>
                <p className="mb-4" style={{ color: "#283618" }}>
                  Expert in Node.js microservices and cloud infrastructure,
                  ensuring high availability and secure data management.
                </p>
                <div className="space-y-1">
                  <p
                    className="flex items-center gap-2"
                    style={{ color: "#606C38" }}
                  >
                    <span>📧</span> fahadkhan1503@gmail.com
                  </p>
                  <p
                    className="flex items-center gap-2"
                    style={{ color: "#606C38" }}
                  >
                    <span>📱</span> +92 3443205368
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-20 text-center">
            <h3
              className="text-2xl font-bold mb-6"
              style={{ color: "#283618" }}
            >
              Ready to Start Your Reading Journey?
            </h3>
            <Link
              to={"/all-books"}
              className="px-8 py-3 rounded-lg font-semibold text-white hover:opacity-90 transition-opacity"
              style={{ backgroundColor: "#BC6C25" }}
            >
              Explore Our Library
            </Link>
          </div>
        </div>
      </div>
    );
  };

  export default AboutUs;