import React from "react";
import { Link } from "react-router-dom";
import logo from '../../../assets/Img/logo.svg'
import "./Footer.css";
export default function Footer() {
	return (
		<footer>
			<div>
				<div className="">
					<div className="">
                        <img src={logo} alt="" />
					</div>
					<div className="">
						<h3>Kust</h3>
						<p>IOC</p>
					</div>
				</div>
				<p>
                We bring ideas to life with cutting-edge solutions tailored to your needs
				</p>
				<div className="socialmedialinks">
					<div className="soicalmediacirlce"></div>
					<div className="soicalmediacirlce"></div>
					<div className="soicalmediacirlce"></div>
					<div className="soicalmediacirlce"></div>
					<div className="soicalmediacirlce"></div>
				</div>
			</div>
			<div className="footerp">
				<div>
					<h2>Quick Links</h2>

					<p>
						<Link to={"/"}>Home</Link>
					</p>
					<p>
						<Link to={"/"}>About</Link>
					</p>
					<p>
						<Link to={"/"}>Services</Link>
					</p>
					<p>
						<Link to={"/"}>Faculty</Link>
					</p>
					<p>
						<Link to={"/"}>Sports</Link>
					</p>
				</div>
				<div>
					<h2>Home</h2>
					<p>About</p>
					<p>Services</p>
					<p>Faculty</p>
					<p>Sports </p>
					<p>Events </p>
				</div>
			</div>
		</footer>
	);
}