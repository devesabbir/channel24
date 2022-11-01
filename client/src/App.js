import { Routes,Route } from "react-router-dom";
import Footer from "./components/footer/Footer";
import NavBar from "./components/navbar/NavBar";
import Home from "./pages/home/Home";



function App() {

   return (
       <> 
        <NavBar/>
        <Routes>
             <Route path="/" element={ <Home/>} />
        </Routes> 
        <Footer/> 
     </>       
    
   );
}

export default App
