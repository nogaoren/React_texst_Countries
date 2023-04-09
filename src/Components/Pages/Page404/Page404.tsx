import "./Page404.css";

function Page404(): JSX.Element {
    return (
        <div className="Page404">
			<h3>Sorry, the page you were looking for is unavailable.</h3>
            <h3>But do not worry! Our sharpest minds are working on it right now...</h3>
            <div className="centerColumn">
                <iframe 
                src="https://giphy.com/embed/Zk9mW5OmXTz9e" 
                width="480" 
                height="314" 
                frameBorder="0" 
                allowFullScreen
                title="page404"></iframe>
            </div>
        </div>
    );
}

export default Page404;
