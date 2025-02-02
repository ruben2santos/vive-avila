import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import { initializeApp } from 'firebase/app';
import './App.css';

const firebaseConfig = {
	apiKey: "AIzaSyCBfqXp33H3Zj_8GfzjHnxW4RIMC4F5ACc",
	authDomain: "vive-avila.firebaseapp.com",
	projectId: "vive-avila",
	storageBucket: "vive-avila.firebasestorage.app",
	messagingSenderId: "889941160937",
	appId: "1:889941160937:web:ed10617ded750209689178"
};

const app = initializeApp(firebaseConfig);

// Esto es solo un ejemplo copiado para testear
function App() {
	const [count, setCount] = useState(0);
	return (
		<>
			<h1>{count}</h1>
			<button onClick={() => setCount((count) => count + 1)}>
				Increment
			</button>
			<iframe width="1460" height="610" frameborder="0" marginheight="0" marginwidth="0" id="gmap_canvas" src="https://maps.google.com/maps?width=1460&amp;height=610&amp;hl=en&amp;q=Universidad%20Metropolitana%20de%20Caracas%20Caracas+(Universidad%20Metropolitana%20de%20Caracas)&amp;t=k&amp;z=16&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe><script type='text/javascript' src='https://embedmaps.com/google-maps-authorization/script.js?id=ea2f4b417aa47ec70adcc844a9ef3dc3a996e900'></script>
		</>
	);
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(React.createElement(App, { key: "app" }));
