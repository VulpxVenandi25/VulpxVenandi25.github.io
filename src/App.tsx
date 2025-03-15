import About from "./layouts/About";
import Footer from "./layouts/Footer";
import Main from "./layouts/Main";
import Navbar from "./layouts/Navbar";
import Novels from "./layouts/Novels";
import Social from "./layouts/Social";
import Support from "./layouts/Support";

import "./static/css/index.css";

function App() {
  return (
    <>
      <Navbar />

      <section>
        <Main />
      </section>
      <section>
        <Novels />
      </section>
      <section>
        <Social />
      </section>
      <section>
        <Support />
      </section>
      <section>
        <About />
      </section>
      <Footer />
    </>
  );
}

export default App;
