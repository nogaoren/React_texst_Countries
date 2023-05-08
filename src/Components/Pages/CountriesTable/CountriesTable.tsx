import { useEffect, useState } from "react";
import "./CountriesTable.css";
import { CountryModel } from "../../../Models/Country";
import axios from "axios";

function CountriesTable(): JSX.Element {
    const [country, setCountry] = useState<CountryModel[]>([]);
    const [search, setSearch] = useState<string>('');
    const header = ['Name', 'Capital', 'Population', 'Flag'];

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
                <table>
                    <thead>
                        <tr>
                            {header.map(h => <th key={h}>{h}</th>)}
                        </tr>
                    </thead>
                    <tbody>
                        {country.filter(c => c.name.toLowerCase().includes(search) || 
                                                            c.capital?.toLowerCase().includes(search))
                                .map(c => 
                                    <tr key={c.name}>
                                        <td>{c.name}</td>
                                        <td>{c.capital}</td>
                                        <td>{c.population}</td>
                                        <td>
                                            <img className='flag' src={c.flags.png} alt={`${c.name}'s flag`} />
                                        </td>
                                    </tr>
                                    )
                        }
                    </tbody>
            </table>
        </div>
    );
}

export default CountriesTable;
