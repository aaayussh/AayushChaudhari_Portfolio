import NavBar from "./componets/NavBar";
import Home from "./componets/Home";
import SocialLinks from './componets/SocialLinks';
import About from "./componets/About";
import Portfolio  from "./componets/Portfolio";
import Experience from "./componets/Expirence";
import Contact from "./componets/Contact";

function App() {
  return (
    <div className="" >
     <NavBar/>
     <Home/>
     <About/>
     <Portfolio/>
     <Experience/>
     <Contact/>
     <SocialLinks/>
    </div>
  );
}

export default App;
