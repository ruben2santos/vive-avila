import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import { initializeApp } from 'firebase/app';
import './App.css';

initializeApp({
	apiKey: "AIzaSyCL6SvBfAg1kwaqCrOYy-2U2CoAiMuRsk8",
	authDomain: "excursiones-avila.firebaseapp.com",
	projectId: "excursiones-avila",
	storageBucket: "excursiones-avila.firebasestorage.app",
	messagingSenderId: "742115851793",
	appId: "1:742115851793:web:11302cf4d26616cca1fbb0"
});

// Esto es solo un ejemplo copiado para testear
function App() {
	const [count, setCount] = useState(0);
	return (
		<>
			<h1>{count}</h1>
			<button onClick={() => setCount((count) => count + 1)}>
				Increment
			</button>
		</>
	);
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(React.createElement(App, { key: "app" }));
