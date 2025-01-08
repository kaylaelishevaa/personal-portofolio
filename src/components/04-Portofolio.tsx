export default function Portfolio() {
  return (
    <section
      id="portfolio"
      className="bg-beige-white py-16 px-6 md:px-16 lg:px-32"
    >
      <div className="max-w-7xl mx-auto">

        <h2 className="text-3xl md:text-4xl font-bold text-dark-black mb-10 text-center">
          Portfolio
        </h2>


        <div className="space-y-12">

          <div className="bg-light-yellow p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <h3 className="text-xl md:text-2xl font-bold text-dark-blue mb-4">
              Situation
            </h3>
            <p className="text-dark-black text-md md:text-lg">
              As a highly motivated student at Monash University pursuing dual
              degrees in Computer Science and Commerce, along with a Master’s in
              Software Engineering, I wanted to showcase my ability to develop
              modern web applications. At only 16 years old, I aim to graduate
              at 20, already equipped with advanced skills in programming,
              machine learning, and optimization. My objective was to create a
              portfolio project demonstrating real-world solutions for client
              needs, including responsive design, scalable back-end
              architecture, and seamless user experiences.
            </p>
          </div>


          <div className="bg-baby-pink p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <h3 className="text-xl md:text-2xl font-bold text-dark-pink mb-4">
              Task
            </h3>
            <p className="text-dark-black text-md md:text-lg">
              I set out to develop a web platform combining advanced front-end
              and back-end technologies. The platform needed to include features
              such as interactive UI, efficient algorithms, secure data
              handling, and optimized performance. My role was to manage the
              entire development process while ensuring accessibility for users
              speaking English, Indonesian, and Chinese.
            </p>
          </div>


          <div className="bg-dark-blue p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <h3 className="text-xl md:text-2xl font-bold text-white mb-4">
              Action
            </h3>
            <ul className="list-disc pl-6 text-white text-md md:text-lg space-y-3">
              <li>
                Designed a responsive front-end using HTML, CSS, and JavaScript
                with frameworks like React.
              </li>
              <li>
                Built a robust back-end architecture using Node.js and
                Express.js, integrated with MongoDB for database management.
              </li>
              <li>
                Leveraged machine learning models to provide features such as
                personalized recommendations and advanced search filters.
              </li>
              <li>
                Applied mathematical optimization techniques to enhance data
                processing and system performance.
              </li>
              <li>
                Deployed the platform using AWS services, including EC2 and S3,
                for scalable and efficient hosting.
              </li>
              <li>
                Collaborated with clients to ensure the application aligned with
                their requirements and expectations.
              </li>
            </ul>
          </div>

          <div className="bg-light-blue p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <h3 className="text-xl md:text-2xl font-bold text-dark-black mb-4">
              Result
            </h3>
            <p className="text-dark-black text-md md:text-lg">
              The project successfully demonstrated a full-stack solution,
              showcasing advanced skills in web development and AI integration.
              It received positive feedback for its intuitive design, speed, and
              adaptability. The portfolio highlighted my ability to deliver
              client-centric projects, securing multiple freelance opportunities
              and solidifying my reputation as a young yet skilled developer.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
