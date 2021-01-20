import logo from "./logo.svg";
import "./App.css";
import Background from "./components/background";
import About from "./components/about";
import Expertise from "./components/expertise";
import Experience from "./components/experience";
import Tweet from "./components/tweet";
import TrustedBy from "./components/trustedBy";
import Testimonials from "./components/testimonials";
import ContactUs from "./components/contactUs";
import Update from "./components/update";
import Footer from "./components/footer";
import Ending from "./components/ending";

function App() {
  return (
    <div className="App">
      <Background />
      <About />
      <Expertise />
      <Experience />
      <Tweet />
      <TrustedBy />
      <Testimonials />
      <ContactUs />
      <Update />
      <Footer />
      <Ending />
    </div>
  );
}

export default App;
