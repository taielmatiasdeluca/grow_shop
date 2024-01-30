import { Routes,Route,BrowserRouter } from "react-router-dom";
import { useLocation } from "react-router-dom";

//Main styles
import './static/css/main.css';
import './static/css/variables.css';
import 'bootstrap/dist/css/bootstrap.min.css';

//React Imports
import { Landing } from "./components/Landing";
import { NotFound } from "./components/NotFound";
import { Header } from "./components/Header";

function App() {
  return (
    <BrowserRouter >
      <Header  />
      <Routes  >
        <Route exact  path="" element={<Landing />} />
        <Route  path="*" element={<NotFound />} />
    
        
        

      </Routes>
    </BrowserRouter>
  );
}

export default App;
