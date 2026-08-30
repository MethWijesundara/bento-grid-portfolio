
// COMPONENTS
import Header from "./components/Header";
import About from "./components/About";
import Skills from "./components/Skills";
import ActionCards from "./components/ActionCards";
import Projects from "./components/Projects";
import Education from "./components/Education";

// STYLING
import "/src/styles/Base.css";
import "/src/styles/Header.css";
import "/src/styles/Main.css";
import "/src/styles/Responsive.css";
import "/src/styles/Skills.css";
import "/src/styles/ActionCards.css";
import "/src/styles/About.css";
import "/src/styles/Projects.css";
import "/src/styles/Education.css";

function App(){
  return(
    <main>
      <Header />
      <div className="portfolio">
        <div className="content-grid">
          {/* Left column */}
          <div className="grid-col main-col">
            <About /> 
            <Education />
            <Projects />
          </div>

          {/* right column */}
          <div className="grid-col side-col">
            <ActionCards />
            <Skills />
          </div>
        </div>
      </div>
    </main>
  );
}
export default App;