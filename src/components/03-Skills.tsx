export default function Skills() {
  return (
    <section id="skills" className="bg-light-blue py-16 px-6 md:px-16 lg:px-32">
      <div className="max-w-7xl mx-auto">
        {/* Judul */}
        <h2 className="text-3xl md:text-4xl font-bold text-dark-black mb-10 text-center">
          My Skills
        </h2>

        {/* Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Web Development */}
          <div className="bg-light-yellow p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-bold text-dark-blue mb-4">
              Web Development
            </h3>
            <ul className="text-dark-black">
              <li className="mb-2">
                <span className="font-bold">Front-end:</span> HTML, CSS,
                JavaScript
              </li>
              <li className="mb-2">
                <span className="font-bold">Framework:</span> React, Vue.js
              </li>
              <li>
                <span className="font-bold">Back-end:</span> Node.js
              </li>
            </ul>
          </div>

          {/* Programming Languages */}
          <div className="bg-baby-pink p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-bold text-dark-pink mb-4">
              Programming Languages
            </h3>
            <ul className="text-dark-black">
              <li className="mb-2">C++</li>
              <li className="mb-2">Python</li>
              <li>JavaScript</li>
            </ul>
          </div>

          {/* AI and Machine Learning */}
          <div className="bg-light-yellow p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-bold text-dark-blue mb-4">
              Artificial Intelligence and Machine Learning
            </h3>
            <ul className="text-dark-black">
              <li className="mb-2">Deep Learning</li>
              <li className="mb-2">TensorFlow, PyTorch</li>
              <li>Machine Learning Algorithms</li>
            </ul>
          </div>

          {/* Mathematics and Optimization */}
          <div className="bg-baby-pink p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-bold text-dark-pink mb-4">
              Mathematics and Optimization
            </h3>
            <ul className="text-dark-black">
              <li>Mathematical Optimization</li>
            </ul>
          </div>

          {/* Data Structures and Algorithms */}
          <div className="bg-light-yellow p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-bold text-dark-blue mb-4">
              Data Structures and Algorithms
            </h3>
            <ul className="text-dark-black">
              <li>Data Structures and Algorithms</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
