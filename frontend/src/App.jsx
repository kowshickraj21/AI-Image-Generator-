import './App.css';
import { Navbar, Home, Scroller, Review, Subsription, Footer }from './components/route';
import { useScroll } from "framer-motion";


function App() {

  const { scrollY } = useScroll();
  const scroll = () =>{
    console.log(scrollY);
    }

  return (
    <>
    <Navbar scroll={scroll}/>
    <Home />
    <Scroller />
    <Review />
    <Subsription />
    <Footer />
    </>
  );
}

export default App;
