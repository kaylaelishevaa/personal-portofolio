interface HeaderProps {
  toggleSidebar: () => void;
}

export default function Hero({ toggleSidebar }: HeaderProps) {
  return (
    <section
      id="hero"
      className="bg-beige-white py-16 shadow-md rounded-lg mt-20 flex flex-col md:flex-row items-center justify-center gap-8 px-6"
    >
      <div className="flex-shrink-0">
        <img
          src="/kayla-portofolio.png"
          alt="Kayla's Portofolio"
          className="rounded-full w-40 h-40 md:w-64 md:h-64 object-cover"
        />
      </div>

      <div className="text-center md:text-left p-3">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Hello! I'm Kayla Elisheva, a{" "}
          <span className="text-dark-blue">Software Engineer!</span>
        </h2>
        <p className="text-md md:text-lg text-gray-700">
          Bringing your ideas to life with clean and modern designs ⸜(｡˃ ᵕ ˂ )⸝♡
        </p>
        <button
          onClick={toggleSidebar}
          className="bg-dark-blue text-white py-2 px-4 mt-6 rounded-lg hover:bg-dark-black transition duration-300"
        >
          About Me
        </button>
      </div>
    </section>
  );
}
