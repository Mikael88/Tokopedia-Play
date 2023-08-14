import Navbar from "./Navbar";
import Footer from "./Footer";

const LandingPage = (props) => {
  return (
    <>
      <Navbar />
      {props.children}
      <Footer />
    </>
  );
};

export default LandingPage;
