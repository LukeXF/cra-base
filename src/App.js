import './App.css';
import {
	BrowserRouter as Router,
	Switch,
	Route,
} from "react-router-dom";
import Account from "./views/Account";
import Homepage from "./views/Homepage";
import About from "./views/About";
import Navigation from "./components/Navigation";

const App = () => {
	return (
		<Router>
			<div>
				<Navigation/>

				<hr/>
				{/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
				<Switch>
					<Route path="/about" component={About}/>
					<Route path="/account" component={Account}/>
					<Route path="/" exact component={Homepage}/>
				</Switch>
			</div>
		</Router>
	);
}

export default App;
