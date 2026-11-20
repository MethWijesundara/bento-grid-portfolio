
// COMPONENTS
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Skills from "./components/Skills";
import ActionCards from "./components/ActionCards";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Footer from "./components/Footer";
import PageDisplay from "./components/PageDisplay";

// STYLING
import "/src/styles/Base.css";
import "/src/styles/Header.css";
import "/src/styles/Responsive.css";
import "/src/styles/Skills.css";
import "/src/styles/ActionCards.css";
import "/src/styles/About.css";
import "/src/styles/Projects.css";
import "/src/styles/Education.css";
import "/src/styles/Footer.css";
import "/src/App.css";

// REACT HELMET
import { Helmet } from "react-helmet";

// USESTATE
import { useState } from "react";

// FONTAWESOME
import "@fortawesome/fontawesome-free/css/all.min.css";

function App(){

  const [activePage, setActivePage] = useState("profile");

  return(
    <main className="app">
      <Helmet>
          <title> 🌟 Portfolio • Meth Wijesundara</title>
      </Helmet>


      {/* <Header /> */}
      <div className="main-layout">
        <Navbar 
          activePage={activePage}
          setActivePage={setActivePage}
        />
        
        <main className="app-container">
          <PageDisplay activePage={activePage}/>
        </main>

      </div>

      <Footer />
    </main>
  );
}
export default App;