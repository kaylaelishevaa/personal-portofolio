export default function Footer() {
    return (
      <section
        id="contact"
        className="bg-light-blue py-16 px-6 md:px-16 lg:px-32"
      >
        <div className="max-w-7xl mx-auto">

          <h2 className="text-3xl md:text-4xl font-bold text-dark-black mb-10 text-center">
            Contact Me
          </h2>
  
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

            <div className="bg-light-yellow p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold text-dark-blue mb-4">
                Get In Touch
              </h3>
              <ul className="space-y-4 text-dark-black text-sm md:text-base">
                <li>
                  <strong>Phone:</strong>{" "}
                  <a
                    href="tel:+1234567890"
                    className="hover:underline text-dark-black"
                  >
                    +1 234 567 890
                  </a>
                </li>
                <li>
                  <strong>Email:</strong>{" "}
                  <a
                    href="mailto:example@email.com"
                    className="hover:underline text-dark-black"
                  >
                    example@email.com
                  </a>
                </li>
                <li>
                  <strong>Address:</strong> Melbourne, Australia
                </li>
              </ul>
            </div>
  

            <div className="bg-baby-pink p-6 rounded-lg shadow-md text-center">
              <h3 className="text-2xl font-bold text-dark-pink mb-6">
                Follow Me
              </h3>
              <div className="flex flex-wrap justify-center gap-4">

                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-dark-blue text-white px-6 py-3 rounded-full hover:bg-dark-pink transition"
                >
                  LinkedIn
                </a>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-dark-black text-white px-6 py-3 rounded-full hover:bg-dark-pink transition"
                >
                  GitHub
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-dark-pink text-white px-6 py-3 rounded-full hover:bg-dark-blue transition"
                >
                  Instagram
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
  