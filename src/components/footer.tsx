import React from 'react';
import "../styles/global.css";

interface FooterProps {
	msg: string
};

export default function NavBar(props: FooterProps) {
	return (
		<footer className="centered">
			<hr style={{width: '60%'}} />
			<div>
				{props.msg}
			</div>
		</footer>
	);
}
