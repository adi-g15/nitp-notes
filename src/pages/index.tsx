import React from 'react';
import NavBar from "../components/navbar";
import Footer from "../components/footer";
import LinkBtn from "../components/link_btn";
import "../styles/global.css";

import Helmet from "react-helmet";

export default function NITPNotes() {
	// Bas inko edit karna hai
	const theory_links = [
		["CS6401 (Graphics)","https://patnanit.sharepoint.com/:f:/r/sites/Jan_2022_CS6401ComputerGraphhics/Shared%20Documents/General?csf=1&web=1&e=iaupUT"],
		["CS6402 (Software Eng.)","https://patnanit.sharepoint.com/sites/Jan_2022_CS6402SoftwareEngineering/Class%20Materials/Forms/AllItems.aspx"],
		["CS6403 (Data Mining)","https://patnanit.sharepoint.com/:f:/r/sites/Jan_2022_CS6403DataMiningWarehousing/Shared%20Documents/General?csf=1&web=1&e=SMzocO"],
		["CS6404 (Information Security)","https://patnanit.sharepoint.com/:f:/r/sites/Jan_2022_CS6404InformationSecurity/Shared%20Documents/General?csf=1&web=1&e=HRoDvd"],
		["CS6475 (Blockchain Technology)","https://patnanit.sharepoint.com/sites/Jan_2022_CS6475BlockchainTechnology/Shared%20Documents/General"],
	];

	const lab_links = [
		["CSL6401","https://patnanit.sharepoint.com/sites/Jan_2022_CSL6401CGLab/Class%20Materials/Forms/AllItems.aspx"],
		["CSL6402","https://patnanit.sharepoint.com/:f:/r/sites/Jan_2022_CSL6402SELab/Shared%20Documents/General?csf=1&web=1&e=A9V44I"],
	];

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
				{"Lecture notes ka link... [IN DEVELOPMENT] Baad me may directly fetch using MS graph APIs, bas abhi pata nahi hai :D"}
			</div>
			<hr className="separation" />
			<br />
			<div className="centered">
				<div style={{padding: '5px', fontSize: 'large'}}>
				{
					theory_links.map(p => (
						<LinkBtn name={p[0]} link={p[1]} />
					))
				}
				</div>
				<hr style={{width: '60%'}} />
				<div style={{padding: '5px', fontSize: 'large'}}>
				{
					lab_links.map(p => (
						<LinkBtn name={p[0]} link={p[1]} />
					))
				}
				</div>
			</div>
			<Footer msg="" />
		</>
	);
}
