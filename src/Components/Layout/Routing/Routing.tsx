import { Route, Routes } from "react-router-dom";
import "./Routing.css";
import About from "../../Pages/About/About";
import Home from "../../Pages/Home/Home";
import App from "../../../App";
import CountriesCard from "../../Pages/CountriesCard/CountriesCard";
import Page404 from "../../Pages/Page404/Page404";
import CountriesTable from "../../Pages/CountriesTable/CountriesTable";

function Routing(): JSX.Element {
    return (
        <div className="Routing">
			<Routes>
                <Route path="/" element={<App/>}/> 
                <Route path="home" element={<Home/>}/> 
                <Route index element={<Home />}/>
                <Route path="about" element={<About/>}/> 
                <Route path="countriesCard" element={<CountriesCard/>}/> 
                <Route path="countriesTable" element={<CountriesTable/>}/> 
                <Route path="*" element={<Page404/>}/> 
            </Routes> 

        </div>
    );
}

export default Routing;
