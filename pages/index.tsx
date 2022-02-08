import React from "react";
import Image from "next/image";
import Layout from "../src/layout";
import {FeaturesData} from "../lib/data";
import {
	Card,
	CardActionArea,
	Grid,
	TextField,
	Button,
	Stack,
} from "@mui/material";
import Link from "next/link";
import Head from "next/head";
import ArrowCircleRightOutlinedIcon from "@mui/icons-material/ArrowCircleRightOutlined";
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";

function LandingPage() {
	return (
		<Layout>
			<Head>
				<title>Veegor - your easy access to the blockchain</title>
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1.0"
				/>
				<meta name="description" content="Veegor Blockchain App" />
				<meta
					name="keywords"
					content="Erc20, Ethereum, Binance, Bitcoin, Matic"
				/>
				<meta name="author" content="veegor" />
				<meta name="email" content="info@veegor.io" />
				<meta name="website" content="https://veegor.io" />
				<meta name="Version" content="v1.0.0" />

				{/* favicon */}
				<link href="public/images/favicon.ico" rel="shortcut icon" />
				<link
					rel="icon"
					type="image/x-icon"
					href="/images/favicon.ico"
				/>
			</Head>
			<div className="banner">
				<div
					className="banner-cover"
					style={{position: "relative", height: 500}}
				>
					<Image
						className="image"
						layout="fill"
						priority
						src="/images/bannerCover.png"
						alt="banner cover image"
					/>
				</div>
				<div className="layer-content">
					<div className="layer-text">
						<div className="primary-text bold">
							<span>YOUR CRYPTO ASSET MANAGEMENT SYSTEM</span>
						</div>
						<div className="secondary-text small">
							<span>
								Launch your project on BlockchainRim today and
								experience the power of the Blockchain
							</span>
						</div>
					</div>
				</div>
				<div className="banner-image">
					<Image
						src="/images/bannerImage.png"
						alt="banner image bottom"
						height="500"
						width="500"
						priority
					/>
				</div>
			</div>
			<div className="features">
				<div className="features-wrapper">
					<div className="features-header">
						<div className="title">
							<div className="primary-text">FEATURES</div>
							<div className="secondary-text"></div>
						</div>
					</div>
					<div className="cards-wrapper">
						{FeaturesData.map((content, index) => {
							return (
								<Card
									className="card"
									elevation={2}
									key={index}
								>
									<CardActionArea className="CardActionArea">
										<div className="card-content">
											<div className="card-icon">
												<Image
													height={40}
													width={40}
													src={content.icon}
													alt={content.title}
												/>
											</div>
											<div className="card-title">
												<h3 className="title-text">
													{content.title}
												</h3>
											</div>
											<div className="card-body">
												<div className="card-text">
													<div className="text">
														{content.text}
													</div>
												</div>
												<div className="card-link">
													<Link
														passHref
														href={content.url}
													>
														<a href="#">
															<div
																className="link-wrap"
																style={{
																	display:
																		"flex",
																	alignItems:
																		"center",
																	gap: ".5em",
																}}
															>
																<div className="link-label">
																	{
																		content.url_label
																	}
																</div>
																{index < 3 && (
																	<ArrowCircleRightOutlinedIcon
																		className="link-icon arrow-forward"
																		style={{
																			fill: "#5c6b91",
																		}}
																	/>
																)}
															</div>
														</a>
													</Link>
												</div>
											</div>
										</div>
									</CardActionArea>
								</Card>
							);
						})}
					</div>
				</div>
			</div>
			<div className="ecosystem-container">
				<div className="ecosystem-wrapper wrapper">
					<div className="section-header">
						<div className="title">
							<div className="primary-text">VEEGOR ECOSYSTEM</div>
							<div className="secondary-text">
								Creating powerful services with out ecosystem.
								There is strong relationship between us.
							</div>
						</div>
					</div>
					<div className="logo-list">
						<div className="logo">
							<div className="logo-image">
								<Image
									alt="ethereum logo image"
									width={120}
									height="50"
									src="/logos/eth-logo.png"
								/>
							</div>
						</div>
						<div className="logo">
							<div className="logo-image">
								<Image
									alt="ethereum logo image"
									width={120}
									height="50"
									src="/logos/binance.png"
								/>
							</div>
						</div>
						<div className="logo">
							<div className="logo-image">
								<Image
									alt="ethereum logo image"
									width={120}
									height="50"
									src="/logos/cmc-logo.png"
								/>
							</div>
						</div>
						<div className="logo">
							<div className="logo-image">
								<Image
									alt="ethereum logo image"
									width={120}
									height="50"
									src="/logos/avalanche.png"
								/>
							</div>
						</div>
						<div className="logo">
							<div className="logo-image">
								<Image
									alt="ethereum logo image"
									width={120}
									height="50"
									src="/logos/polygon.png"
								/>
							</div>
						</div>
						<div className="logo">
							<div className="logo-image">
								<Image
									alt="ethereum logo image"
									width={120}
									height="50"
									src="/logos/Solana-logo.png"
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="video-section dapp" style={{position: "relative"}}>
				<div className="custom-shape-divider-top-1644282389">
					<svg
						data-name="Layer 1"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 1200 120"
						preserveAspectRatio="none"
					>
						<path
							d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
							className="shape-fill"
						></path>
					</svg>
				</div>
				<div className="wrapper">
					<div className="video-layout">
						<iframe
							width="100%"
							height="250"
							src="https://www.youtube.com/embed/QchSUPJoDfw?rel=0"
							title="YouTube video player"
							frameBorder="0"
							allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
							allowFullScreen={true}
						></iframe>
					</div>
					<div className="section-content">
						<div className="title">Veegor DApp</div>
						<div className="text">
							<span>
								The Veegor dApp is the No.1 Web3 Platform,
								offering access to token creation, with unique
								customization features including marketplace
								listing. Launch your project on Veegor and
								experience the power of blockchain from your
								Mobile Phone.
							</span>
						</div>
						<div className="links-wrapper">
							<div className="link">
								<a href="https://play.google.com/store/apps/details?id=io.veegor.app">
									<Image
										height={50}
										width={150}
										src="/images/iosimggg.png"
										alt="google play link"
									/>
								</a>
							</div>
							<div className="link">
								<Link passHref href="/login">
									<a href="#">
										<Image
											width={150}
											height={50}
											src="/images/webimgg.png"
											alt="web version of veegor DApp"
										/>{" "}
									</a>
								</Link>
							</div>
						</div>
					</div>
				</div>
				<div className="custom-shape-divider-bottom-1644207901">
					<svg
						data-name="Layer 1"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 1200 120"
						preserveAspectRatio="none"
					>
						<path
							d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
							opacity=".25"
							className="shape-fill"
						></path>
						<path
							d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
							opacity=".5"
							className="shape-fill"
						></path>
						<path
							d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
							className="shape-fill"
						></path>
					</svg>
				</div>
			</div>

			<div className="newsletter-section">
				<div className="wrapper">
					<div className="section-info">
						<div className="section-icon">
							<KeyboardArrowDownRoundedIcon
								fontSize="large"
								style={{fill: "#fff"}}
							/>
						</div>
						<div className="section-title">
							<div className="primary-text">
								<span>Subscribe To Our Newsletter</span>
							</div>
							<div className="secondary-text">
								<span>
									Lets keep in touch with you, you will be the
									first to recieve news about oportunities and
									offers from our platform
								</span>
							</div>
						</div>
					</div>
					<div className="section-form">
						<div className="form-control">
							<TextField
								label="Enter your email*"
								margin="dense"
								size="small"
								variant="outlined"
								fullWidth
							/>
						</div>
						<div className="action-btn">
							<Button
								variant="contained"
								style={{background: "#030d30"}}
							>
								<span>Subscribe</span>
							</Button>
						</div>
					</div>
				</div>
			</div>
		</Layout>
	);
}

export default LandingPage;
