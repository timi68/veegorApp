import React from "react";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import Link from "next/link";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import Chip from "@mui/material/Chip";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const linksArray = [
	{
		title: "Protocols",
		links: [
			{text: "Network Protocol", url: "/#"},
			{text: "Listing Protocol", url: "/#"},
		],
	},

	{
		title: "About us",
		links: [
			{text: "Info", url: "/#"},
			{text: "Our Team", url: "/#"},
			{text: "Blogs", url: "/#"},
		],
	},
	{
		title: "Support",
		links: [
			{text: "Help Center", url: "/"},
			{text: "Press Room", url: "/"},
			{text: "Terms of Service", url: "/"},
			{text: "Privacy Policy", url: "/"},
		],
	},
];

function Footer({children}: {children?: React.ReactNode}) {
	return (
		<div className="footer page-footer">
			<div className="footer-wrapper">
				<div className="navigation-container">
					<div className="navigation-link-list-wrapper">
						<ul className="link-list-group">
							{linksArray.map((li, index) => {
								return (
									<li
										className="link-subgroup wrap"
										key={index}
									>
										<div className="subgroup-wrapper">
											<div className="link-title">
												<span>{li.title}</span>
											</div>
											<div className="external-links-group">
												{li.links.map((a, index) => {
													return (
														<div
															className="link-wrap"
															key={index}
														>
															<Link
																passHref
																href={a.url}
															>
																<a
																	href="#"
																	className="link"
																	style={{
																		display:
																			"flex",
																		alignItems:
																			"center",
																		gap: ".5em",
																	}}
																>
																	<ArrowForwardIosIcon
																		style={{
																			fontSize:
																				".8em",
																		}}
																	/>
																	<span>
																		{a.text}
																	</span>
																</a>
															</Link>
														</div>
													);
												})}
											</div>
										</div>
									</li>
								);
							})}
						</ul>
					</div>
				</div>
				<div className="flex-wrap">
					<div className="connect-container">
						<div className="title">Connect with us</div>
						<ul className="icons-list">
							<li className="link email">
								<a href="mailto:oderindejames02@gmail.com">
									<IconButton className="icon">
										<EmailIcon
											fontSize="medium"
											className="icon"
										/>
									</IconButton>
								</a>
							</li>
							<li>
								<a
									href="https://facebook.com/veegor"
									className="facebook-link"
									target="_blank"
									rel="noreferrer"
								>
									<IconButton size="medium" className="icon">
										<FacebookIcon fontSize="medium" />
									</IconButton>
								</a>
							</li>
							<li>
								<a
									href="https://wa.me/+2347064239637"
									className="whatsapp-link"
								>
									<IconButton size="medium" className="icon">
										<WhatsAppIcon fontSize="medium" />
									</IconButton>
								</a>
							</li>
							<li>
								<a
									href="https://instagram.com/veegordapp"
									className="instagram-link"
									target="_blank"
									rel="noreferrer"
								>
									<IconButton size="medium" className="icon">
										<InstagramIcon fontSize="medium" />
									</IconButton>
								</a>
							</li>
							<li>
								<a
									href="https://twitter.com/veegorDApp"
									target="_blank"
									rel="noreferrer"
									className="twitter-link"
								>
									<IconButton size="medium" className="icon">
										<TwitterIcon fontSize="medium" />
									</IconButton>
								</a>
							</li>
							<li>
								<a
									href="https://www.linkedin.com/company/veegor/about/?viewAsMember=true"
									target="_blank"
									rel="noreferrer"
									className="linkedIn"
								>
									<IconButton size="medium" className="icon">
										<LinkedInIcon fontSize="medium" />
									</IconButton>
								</a>
							</li>
						</ul>
					</div>
					<div className="bottom-text copyright-wrapper">
						<div className="copyright">
							<div className="text">
								Copyright &copy; 2022 Frutiv Technologies
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Footer;
