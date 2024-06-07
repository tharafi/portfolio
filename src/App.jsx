import { useContext } from "react";
import About from "./components/about/about";
import Contact from "./components/contact/Contact";
import Intro from "./components/intro/intro";
import ProductList from "./components/productList/ProductList";
import Toggle from "./components/toggle/Toggle";
import { themeContext } from "./context";

const App = () => {
  const theme = useContext(themeContext)
  const darkMode = theme.state.darkMode;
  return (
    <div className="" style={{backgroundColor: darkMode ? "#222" :"white", color: darkMode && "white"}}>
      <Toggle />
      <Intro />
      <About />
      <ProductList/>
      <Contact />
    </div>
  );
};

export default App;
