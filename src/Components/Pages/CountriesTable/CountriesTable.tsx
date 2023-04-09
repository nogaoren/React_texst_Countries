import { useEffect, useState } from "react";
import "./CountriesTable.css";
import { CountryModel } from "../../../Models/Country";
import axios from "axios";
import CountryTable from "../../Shared/CountryTable/CountryTable";

function CountriesTable(): JSX.Element {
    const [country, setCountry] = useState<CountryModel[]>([]);
    const [search, setSearch] = useState<string>('');

    useEffect(() => {
        axios.get('https://restcountries.com/v2/all')
            .then(res => {setCountry(res.data);})
            .catch(err => {console.log('The data did not upload');})
    },[]);

    return (
        <div className="CountriesTable">
			<header className="center">
                <h2>Countries</h2>
                <input type="text" placeholder="Search country's name or capital" className="CountryCard"
                value={search} onChange={(e) => setSearch(e.target.value.toLowerCase())}/>
            </header>
            <div className="center">
                {
                    (search.length > 0) ?
                    <CountryTable country={country.filter(c => c.name.toLowerCase().includes(search) || 
                                                            c.capital?.toLowerCase().includes(search))}/>
                    :
                    <CountryTable country={country}/>
                }
            </div>
        </div>
    );
}

export default CountriesTable;
