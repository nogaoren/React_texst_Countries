import { CountryModel } from "../../../Models/Country";
import "./CountryCard.css";

interface CountryCardProps{
    country: CountryModel;
}

function CountryCard(props: CountryCardProps): JSX.Element {
    return (
        <div className="CountryCard">
			<h3>{props.country.name}</h3>
            <p>Capital: {props.country.capital}</p>
            <p>Population: {props.country.population}</p>
            <p className="center">
                <img className='flag' src={props.country.flags.png} alt={`${props.country.name}'s flag`} />
            </p>
        </div>
    );
}

export default CountryCard;
