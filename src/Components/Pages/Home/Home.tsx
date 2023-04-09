import "./Home.css";

function Home(): JSX.Element {
    return (
        <div className="Home">
			<h2>Welcome to the Countries platform</h2>
            <div className="centerColumn">
                <iframe 
                src="https://giphy.com/embed/llJ72v9vCcVgbUXSss" 
                width="300"
                height="500"
                frameBorder="0" 
                allowFullScreen
                title="home"></iframe>
            </div>
        </div>
    );
}

export default Home;
