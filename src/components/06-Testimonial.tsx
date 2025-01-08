export default function Testimonial() {
    return (
      <section
        id="testimonial"
        className="bg-beige-white py-16 px-6 md:px-16 lg:px-32"
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-dark-black mb-10 text-center">
            Testimonials
          </h2>
  
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-light-yellow p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <img
                  src="/john.avif"
                  alt="Client 1"
                  className="w-16 h-16 rounded-full mr-4 object-cover"
                />
                <div>
                  <h3 className="text-lg font-bold text-dark-blue">John Doe</h3>
                  <p className="text-sm text-dark-pink">CEO, TechCorp</p>
                </div>
              </div>
              <p className="text-dark-black text-sm md:text-base">
                "Kayla is a highly skilled developer with a deep understanding of
                modern technologies. She delivered exceptional results on our
                project and exceeded all expectations."
              </p>
            </div>
  
            {/* Card 2 */}
            <div className="bg-baby-pink p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <img
                  src="/maria.jpg"
                  alt="Client 2"
                  className="w-16 h-16 rounded-full mr-4 object-cover"
                />
                <div>
                  <h3 className="text-lg font-bold text-dark-pink">
                    Maria Gonzalez
                  </h3>
                  <p className="text-sm text-dark-black">Project Manager</p>
                </div>
              </div>
              <p className="text-dark-black text-sm md:text-base">
                "I was impressed by Kayla's professionalism and creativity. She
                has a knack for solving complex problems and making things look
                easy."
              </p>
            </div>
  
            {/* Card 3 */}
            <div className="bg-light-blue p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <img
                  src="/liwei.avif"
                  alt="Client 3"
                  className="w-16 h-16 rounded-full mr-4 object-cover"
                />
                <div>
                  <h3 className="text-lg font-bold text-dark-black">Li Wei</h3>
                  <p className="text-sm text-dark-blue">CTO, InnovateX</p>
                </div>
              </div>
              <p className="text-dark-black text-sm md:text-base">
                "Working with Kayla was a pleasure. Her technical expertise and
                ability to communicate complex ideas made her an invaluable
                partner for our team."
              </p>
            </div>
  
            {/* Card 4 */}
            <div className="bg-light-yellow p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <img
                  src="/ahmed.jpg"
                  alt="Client 4"
                  className="w-16 h-16 rounded-full mr-4 object-cover"
                />
                <div>
                  <h3 className="text-lg font-bold text-dark-blue">
                    Ahmed Al-Farsi
                  </h3>
                  <p className="text-sm text-dark-pink">Software Engineer</p>
                </div>
              </div>
              <p className="text-dark-black text-sm md:text-base">
                "Kayla's ability to quickly adapt to project requirements and her
                dedication to delivering quality work make her a top choice for
                any development project."
              </p>
            </div>
  
            {/* Card 5 */}
            <div className="bg-baby-pink p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <img
                  src="/sophia.jpg"
                  alt="Client 5"
                  className="w-16 h-16 rounded-full mr-4 object-cover"
                />
                <div>
                  <h3 className="text-lg font-bold text-dark-pink">Sophia Lim</h3>
                  <p className="text-sm text-dark-black">UX Designer</p>
                </div>
              </div>
              <p className="text-dark-black text-sm md:text-base">
                "Kayla's attention to detail and commitment to excellence set her
                apart. Her work has greatly enhanced our user experience."
              </p>
            </div>
  
            {/* Card 6 */}
            <div className="bg-light-blue p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <img
                  src="/alex.jpg"
                  alt="Client 6"
                  className="w-16 h-16 rounded-full mr-4 object-cover"
                />
                <div>
                  <h3 className="text-lg font-bold text-dark-black">Alex Tan</h3>
                  <p className="text-sm text-dark-blue">Product Manager</p>
                </div>
              </div>
              <p className="text-dark-black text-sm md:text-base">
                "Kayla's work ethic and technical acumen make her an asset to any
                project. She consistently delivers above and beyond expectations."
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }
  