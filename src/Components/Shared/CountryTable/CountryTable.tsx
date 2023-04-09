import { CountryModel } from "../../../Models/Country";
import "./CountryTable.css";

interface CountryTableProps{
    country: CountryModel[];
}

function CountryTable(props: CountryTableProps): JSX.Element {
    const header = ['Name', 'Capital', 'Population', 'Flag'];
    return (
        <div className="CountryTable">
			<table>
                <thead>
                    <tr>
                        {header.map(h => <th key={h}>{h}</th>)}
                    </tr>
                </thead>
                <tbody>
                    {props.country.map(c => 
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

export default CountryTable;
