import Hero from "../components/02-Hero"
import Skills from "../components/03-Skills";
import Portfolio from "../components/04-Portofolio";
import Experience from "../components/05-Experience";
import Testimonial from "../components/06-Testimonial";

interface HomeProps {
  toggleSidebar: () => void;
}

export default function Home({ toggleSidebar }: HomeProps) {
  return (
    <>
      <Hero toggleSidebar={toggleSidebar} />
      <Skills />
      <Portfolio />
      <Experience />
      <Testimonial />
    </>
  );}