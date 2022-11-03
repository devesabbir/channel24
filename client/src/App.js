import { Routes,Route } from "react-router-dom";
import Footer from "./components/footer/Footer";
import NavBar from "./components/navbar/NavBar";
import Home from "./pages/home/Home";
import Single from "./pages/singlepage/Single";
import Cricket from "./pages/sports/cricket/Cricket";



function App() {

   return (
       <> 
        <NavBar/>
        <Routes>
              <Route path="/" element={ <Home/>} />
              <Route path="/sports/" > 
                   <Route path="cricket" element={ <Cricket/>} />
                   <Route path="cricket/:id" element={ <Single/> } />
             </Route>
        </Routes> 
        <Footer/> 
      </>       
    
   );
}

export default App
