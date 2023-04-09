import "./About.css";
import { MdOutlineWavingHand } from 'react-icons/md';

function About(): JSX.Element {
    return (
        <div className="About">
            <h2>Welcome to the Countries platform <MdOutlineWavingHand/></h2>
			<p>This platform presents all the countries listed in our database, with the following information: the name of the country, the name of the capital, the size of the population and the flag.</p>
            <p>The data can be presented in the form of cards or a table. You can switch between forms of presentations by pressing the menu on the left side.</p>
            <p>The platform also allows you to filter the the countries based on their names, using the search bar above the presentation. When filtering the presentation include only countries that have the letters you've entered in their name.</p>
        </div>
    );
}

export default About;
