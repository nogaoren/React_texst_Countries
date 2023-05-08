import { useEffect, useState } from "react";
import "./CountriesCard.css";
import { CountryModel } from "../../../Models/Country";
import axios from 'axios';
import CountryCard from "../../Shared/CountryCard/CountryCard";

function CountriesCard(): JSX.Element {
    const [country, setCountry] = useState<CountryModel[]>([]);
    const [search, setSearch] = useState<string>('');

    useEffect(() => {
        axios.get('https://restcountries.com/v2/all')
             .then(res => {setCountry(res.data);})
             .catch(err => {console.log('The data did not load');});
    }, []);

    return (
        <div className="CountriesCard">
            {/* <h2>Countries</h2> */}
            <header className="center">
                <h2>Countries</h2>
                <input type="text" placeholder="Search country's name or capital" className="CountryCard"
                value={search} onChange={(e) => setSearch(e.target.value.toLowerCase())}/>
            </header>
            <div className="cards center">
            {
                country.filter(c => c.name.toLowerCase().includes(search) || 
                                    c.capital?.toLowerCase().includes(search))
                                    .map(c => <CountryCard key={c.name} country={c}/>)
            }
            </div>
        </div>
    );
}

export default CountriesCard;
