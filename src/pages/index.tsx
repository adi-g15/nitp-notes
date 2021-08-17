import React from 'react';
import NavBar from "../components/navbar";
import Footer from "../components/footer";
import "../styles/global.css";

import dayjs from "dayjs";
import Helmet from "react-helmet";

export default function CS4401() {
	return (
		<>
			<div className="application">
				<Helmet>
					<meta charSet="utf-8" />
					<meta name="description" content="CS4401 bina password" />
					<meta name="theme-color" content="#20b2aa" />
					<meta name="lang" content="en" />
					<title>NITP Notes</title>
				</Helmet>
			</div>
			<NavBar title="NITP Notes"/>

			<hr className="separation" />
			<div className="centered">
				{"Lecture notes ka link... Baad me may directly fetch using MS graph APIs, bas mai kaam ka cheez nhi dhundh paya :D"}
			</div>
			<hr className="separation" />
			<br />
			<div className="container">
			</div>
			<Footer msg="" />
		</>
	);
}
