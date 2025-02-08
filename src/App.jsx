import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc } from 'firebase/firestore';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import './App.css';

const firebaseConfig = {
	apiKey: "AIzaSyCBfqXp33H3Zj_8GfzjHnxW4RIMC4F5ACc",
	authDomain: "vive-avila.firebaseapp.com",
	projectId: "vive-avila",
	storageBucket: "vive-avila.firebasestorage.app",
	messagingSenderId: "889941160937",
	appId: "1:889941160937:web:ed10617ded750209689178"
};

const firebaseApp = initializeApp(firebaseConfig);
const firebaseDb = getFirestore(firebaseApp);
const firebaseAuth = getAuth(firebaseApp);

const Page = Object.freeze({
	start: Symbol(),
	register: Symbol(),
	login: Symbol(),
});

function Register({ setUser }) {
	const [formUsername, setFormUsername] = useState('');
	const [formPhone, setFormPhone] = useState('');
	const [formEmail, setFormEmail] = useState('');
	const [formPassword, setFormPassword] = useState('');

	async function registerCreateAccount(e) {
		e.preventDefault();
		createUserWithEmailAndPassword(firebaseAuth, formEmail, formPassword).then((userCredential) => {
			const user = userCredential.user;
			setUser(user);
			addDoc(collection(firebaseDb, "users"), {
				uid: user.uid,
				username: formUsername,
				phone: formPhone,
				email: formEmail,
			});
		}).catch((e) => {
			// TODO: handle firebase errors
			console.log(e);
		});
	}

	return <>
		<form onSubmit={registerCreateAccount}>
			<h1>Registrar Usuario</h1>
			<h2>Nombre Completo</h2>
			<input type="text" id="register_name" name="register_name"
				value={formUsername} onChange={(e) => setFormUsername(e.target.value)}
				className="register_name register_field" required minLength="3" maxLength="40" />
			{/*existe el type="tel", pero idk si lo queremos usar */}
			<h2>Número de Teléfono</h2>
			<input type="number" id="register_phone" name="register_phone"
				value={formPhone} onChange={(e) => setFormPhone(e.target.value)}
				className="register_phone register_field" required minLength="3" maxLength="40" />
			<h2>Correo Electrónico</h2>
			<input type="email" id="register_email" name="register_email"
				value={formEmail} onChange={(e) => setFormEmail(e.target.value)}
				className="register_email register_field" required minLength="3" maxLength="40" />
			<h2>Contraseña</h2>
			<input type="password" id="register_password" name="register_password"
				value={formPassword} onChange={(e) => setFormPassword(e.target.value)}
				className="register_password register_field" required minLength="6" maxLength="40" />
			<button type="submit" className="register_create_account button-1">Crear Cuenta</button>
		</form>
	</>;
}

// Esto es solo un ejemplo copiado para testear
function App() {
	const [count, setCount] = useState(0);
	const [user, setUser] = useState(null);
	const [page, setPage] = useState(Page.register);

	switch (page) {
		case Page.start:
			return (
				<>
					<h1>{count}</h1>
					<button onClick={() => setCount((count) => count + 1)}>
						Increment
					</button>
				</>
			);
		case Page.register:
			return <Register setUser={setUser} />;
	}
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(React.createElement(App, { key: "app" }));
//<iframe width="1460" height="610" frameborder="0" marginheight="0" marginwidth="0" id="gmap_canvas" src="https://maps.google.com/maps?width=1460&amp;height=610&amp;hl=en&amp;q=Universidad%20Metropolitana%20de%20Caracas%20Caracas+(Universidad%20Metropolitana%20de%20Caracas)&amp;t=k&amp;z=16&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe><script type='text/javascript' src='https://embedmaps.com/google-maps-authorization/script.js?id=ea2f4b417aa47ec70adcc844a9ef3dc3a996e900'></script>
