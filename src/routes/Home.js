import Destination from "../components/Destination";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Trip from "../components/Trip";
import Footer from "../components/Footer";
import HomeImg from "../Assets/12.jpg";
function Home() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero"
        heroImg={HomeImg}
        // title="Your Journey Your story"
        buttonText="Travel Plan"
        url="/"
        btnClass="show"
      />
      <Destination />
      <Trip />
      <Footer />
    </>
  );
}
export default Home;
