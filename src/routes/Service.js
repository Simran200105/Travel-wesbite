import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import AboutImg from "../Assets/night.jpg";
import Footer from "../components/Footer";
import Trip from "../components/Trip";
function Service() {
  return (
    <>
      <Navbar />
      <Hero cName="hero-mid" heroImg={AboutImg} title="Service" />
      <Trip />
      <Footer />
    </>
  );
}
export default Service;
