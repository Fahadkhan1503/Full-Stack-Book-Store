// 1st onne-----

import { Link } from "react-router-dom";

// const AboutUs = () => {
//   return (
//     <div className="min-h-screen bg-[#FEFAE0] py-12 px-6">
//       <div className="max-w-4xl mx-auto text-center">
//         <h1 className="text-4xl font-bold text-[#DDA15E] mb-6">About Us</h1>
//         <p className="text-lg text-[#283618]">
//           Welcome to our Book Store App! Built with MERN stack, our goal is to
//           provide book lovers with a seamless shopping experience.
//         </p>
//       </div>
      
//       <div className="max-w-6xl mx-auto mt-12 grid md:grid-cols-2 gap-8">
//         <div className="bg-white p-6 rounded-xl shadow-lg text-center transform transition duration-300 hover:scale-105">
//           <img src="img_hamza.JPG" alt="Muhammad Hamza Owais" className="mx-auto w-40 h-40 rounded-full border-4 border-[#DDA15E]" />
//           <h3 className="text-2xl font-semibold text-[#606C38] mt-4">Muhammad Hamza Owais</h3>
//           <p className="text-[#283618]">Co-Founder & Developer</p>
//         </div>
        
//         <div className="bg-white p-6 rounded-xl shadow-lg text-center transform transition duration-300 hover:scale-105">
//           <img src="IMAGE_URL_2" alt="Muhammad Fahad" className="mx-auto w-40 h-40 rounded-full border-4 border-[#DDA15E]" />
//           <h3 className="text-2xl font-semibold text-[#606C38] mt-4">Muhammad Fahad</h3>
//           <p className="text-[#283618]">Co-Founder & Developer</p>
//         </div>
//       </div>
      
//       <div className="mt-12 text-center">
//         <h2 className="text-3xl font-bold text-[#DDA15E]">Our Vision</h2>
//         <p className="text-lg text-[#283618] mt-4 max-w-3xl mx-auto">
//           Our mission is to revolutionize book shopping by offering a smooth
//           and user-friendly experience for book enthusiasts worldwide.
//         </p>
//       </div>
//     </div>
//   );
// };

// export default AboutUs;



// second option------

// const AboutUs = () => {
//     return (
//       <div className="bg-[#FEFAE0] min-h-screen">
//         {/* Hero Section */}
//         <div className="text-center py-16 bg-[#606C38] text-white">
//           <h1 className="text-4xl font-bold">About Us</h1>
//           <p className="mt-4 text-lg">Empowering Book Lovers with a Seamless Shopping Experience</p>
//         </div>
  
//         {/* Team Section */}
//         <div className="max-w-6xl mx-auto py-12 px-6">
//           <h2 className="text-3xl font-semibold text-center text-[#283618] mb-8">Meet the Founders</h2>
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//             {/* Founder 1 */}
//             <div className="bg-white shadow-lg rounded-lg p-6 text-center hover:scale-105 transition-transform">
//               <img
//                 src="img_hamza.JPG"
//                 alt="Muhammad Hamza Owais"
//                 className="w-40 h-40 mx-auto rounded-full border-4 border-[#DDA15E]"
//               />
//               <h3 className="text-2xl font-bold text-[#BC6C25] mt-4">Muhammad Hamza Owais</h3>
//               <p className="text-gray-700">Full-Stack Developer & Co-Founder</p>
//               <p className="mt-2 text-[#283618]">hamza@example.com</p>
//             </div>
  
//             {/* Founder 2 */}
//             <div className="bg-white shadow-lg rounded-lg p-6 text-center hover:scale-105 transition-transform">
//               <img
//                 src="IMAGE_URL_FAHD"
//                 alt="Muhammad Fahad"
//                 className="w-40 h-40 mx-auto rounded-full border-4 border-[#DDA15E]"
//               />
//               <h3 className="text-2xl font-bold text-[#BC6C25] mt-4">Muhammad Fahad</h3>
//               <p className="text-gray-700">Full-Stack Developer & Co-Founder</p>
//               <p className="mt-2 text-[#283618]">fahad@example.com</p>
//             </div>
//           </div>
//         </div>
  
//         {/* Why Choose Us Section */}
//         <div className="bg-[#DDA15E] text-white py-12 px-6 text-center">
//           <h2 className="text-3xl font-semibold">Why Choose Our Book Store?</h2>
//           <p className="mt-4 max-w-3xl mx-auto">
//             Our bookstore platform provides a seamless shopping experience, allowing book lovers to explore a wide variety of titles with ease. Built with MERN stack technology, our project is designed to be fast, scalable, and user-friendly.
//           </p>
//         </div>
//       </div>
//     );
//   };
  
//   export default AboutUs;
  


// 3rd option----

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




// 4rth option------

// const AboutUs = () => {
//     return (
//       <div className="min-h-screen py-12" style={{ backgroundColor: "#FEFAE0" }}>
//         {/* Hero Section */}
//         <div className="max-w-6xl mx-auto px-4">
//           <div className="text-center mb-16">
//             <h1 className="text-4xl md:text-6xl font-bold mb-6" style={{ color: "#283618" }}>
//               About FahamBooks
//             </h1>
//             <p className="text-lg md:text-xl max-w-3xl mx-auto" style={{ color: "#606C38" }}>
//               Your Digital Gateway to Literary Exploration - Built with Passion using MERN Stack
//             </p>
//           </div>
  
//           {/* Project Overview */}
//           <div className="bg-white rounded-2xl shadow-lg p-8 mb-16 transition-all duration-300 hover:shadow-xl">
//             <h2 className="text-3xl font-bold mb-6" style={{ color: "#DDA15E" }}>Our Story</h2>
//             <p className="text-gray-700 mb-6" style={{ color: "#283618" }}>
//               PageTurner is a full-stack MERN (MongoDB, Express, React, Node.js) application 
//               designed to revolutionize book shopping. Featuring user authentication, real-time 
//               inventory management, and seamless order processing, our platform combines robust 
//               functionality with elegant design.
//             </p>
//             <div className="grid md:grid-cols-3 gap-6">
//               <div className="p-4 rounded-lg" style={{ backgroundColor: "#FEFAE0" }}>
//                 <h3 className="text-xl font-semibold mb-2" style={{ color: "#BC6C25" }}>5000+ Books</h3>
//                 <p style={{ color: "#606C38" }}>Curated collection across genres</p>
//               </div>
//               <div className="p-4 rounded-lg" style={{ backgroundColor: "#FEFAE0" }}>
//                 <h3 className="text-xl font-semibold mb-2" style={{ color: "#BC6C25" }}>Secure Payments</h3>
//                 <p style={{ color: "#606C38" }}>SSL encrypted transactions</p>
//               </div>
//               <div className="p-4 rounded-lg" style={{ backgroundColor: "#FEFAE0" }}>
//                 <h3 className="text-xl font-semibold mb-2" style={{ color: "#BC6C25" }}>24/7 Support</h3>
//                 <p style={{ color: "#606C38" }}>Dedicated customer service</p>
//               </div>
//             </div>
//           </div>
  
//           {/* Team Section */}
//           <div className="mb-16">
//             <h2 className="text-3xl font-bold text-center mb-12" style={{ color: "#DDA15E" }}>Meet The Architects</h2>
            
//             <div className="grid md:grid-cols-2 gap-12">
//               {/* Team Member 1 */}
//               <div className="flex flex-col items-center bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
//                 <div className="w-48 h-48 rounded-full mb-6 overflow-hidden border-4" style={{ borderColor: "#DDA15E" }}>
//                   <img 
//                     src="img_hamza.JPG" 
//                     alt="Muhammad Hamza Owais"
//                     className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
//                   />
//                 </div>
//                 <h3 className="text-2xl font-bold mb-2" style={{ color: "#283618" }}>Muhammad Hamza Owais</h3>
//                 <p className="mb-4" style={{ color: "#606C38" }}>Full Stack Architect & Tech Lead</p>
//                 <div className="space-y-1 text-center">
//                   <p className="text-sm" style={{ color: "#BC6C25" }}>hamza@pagesturner.com</p>
//                   <p className="text-sm" style={{ color: "#BC6C25" }}>+92 300 1234567</p>
//                 </div>
//               </div>
  
//               {/* Team Member 2 */}
//               <div className="flex flex-col items-center bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
//                 <div className="w-48 h-48 rounded-full mb-6 overflow-hidden border-4" style={{ borderColor: "#DDA15E" }}>
//                   <img 
//                     src="https://example.com/fahad-image.jpg" 
//                     alt="Muhammad Fahad"
//                     className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
//                   />
//                 </div>
//                 <h3 className="text-2xl font-bold mb-2" style={{ color: "#283618" }}>Muhammad Fahad</h3>
//                 <p className="mb-4" style={{ color: "#606C38" }}>Backend Specialist & DevOps Engineer</p>
//                 <div className="space-y-1 text-center">
//                   <p className="text-sm" style={{ color: "#BC6C25" }}>fahad@pagesturner.com</p>
//                   <p className="text-sm" style={{ color: "#BC6C25" }}>+92 300 7654321</p>
//                 </div>
//               </div>
//             </div>
//           </div>
  
//           {/* Tech Stack */}
//           <div className="text-center py-8">
//             <h3 className="text-2xl font-semibold mb-6" style={{ color: "#283618" }}>
//               Powered By Modern Technology
//             </h3>
//             <div className="flex justify-center gap-8 flex-wrap">
//               <span className="px-6 py-2 rounded-full" style={{ backgroundColor: "#DDA15E", color: "#FEFAE0" }}>MongoDB</span>
//               <span className="px-6 py-2 rounded-full" style={{ backgroundColor: "#DDA15E", color: "#FEFAE0" }}>Express.js</span>
//               <span className="px-6 py-2 rounded-full" style={{ backgroundColor: "#DDA15E", color: "#FEFAE0" }}>React.js</span>
//               <span className="px-6 py-2 rounded-full" style={{ backgroundColor: "#DDA15E", color: "#FEFAE0" }}>Node.js</span>
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   };

// export default AboutUs;