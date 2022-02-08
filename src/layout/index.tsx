import React, {Fragment} from "react";
import * as Interfaces from "../../utils/interfaces";
import Box from "@mui/material/Box";
import Menu from "@mui/icons-material/Menu";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import {motion, AnimatePresence} from "framer-motion";
import {variant, NavbarData} from "../../lib/data";
import HouseIcon from "@mui/icons-material/House";
import ExploreIcon from "@mui/icons-material/Explore";
import PeopleIcon from "@mui/icons-material/People";
import Footer from "../../components/global/footer";
import {
	CircularProgress,
	Container,
	IconButton,
	Button,
	Stack,
	Divider,
	List,
	ListItem,
	ListItemIcon,
	ListItemText,
} from "@mui/material";
import Link from "next/link";
import Image from "next/image";

function Layout(props: Interfaces.LayoutInterface) {
	const [loading, setLoading] = React.useState<boolean>(true);
	const {children, type, text} = props;
	const headerRef = React.useRef<HTMLDivElement>(null);

	const handleScroll = (e: React.ChangeEvent<HTMLDivElement>) => {
		const target = e.target.scrollTop;
		if (target > 10) headerRef.current.classList.add("scrolling");
		else headerRef.current.classList.remove("scrolling");
	};

	React.useEffect(() => {
		setTimeout(() => {
			setLoading(false);
		}, 3000);
	}, []);

	return (
		<Fragment>
			{loading && (
				<div className="loader">
					<CircularProgress variant="indeterminate" />
				</div>
			)}
			{/*@ts-ignore */}
			<div className="container" onScroll={handleScroll}>
				<div className="wrapper page-wrapper">
					<div
						className="header page-header top-header"
						ref={headerRef}
					>
						<Navbar />
					</div>
					<div className="main" role="main">
						{children}
					</div>
					<Footer />
				</div>
			</div>
		</Fragment>
	);
}

function Navbar() {
	const [state, setState] = React.useState<
		Partial<Interfaces.LayoutStateInterface>
	>({openDrawer: false});

	// stores window or screen width
	const [width, setWidth] = React.useState<number>(null);

	React.useEffect(() => {
		// this setWidth will set the width of the window
		// and rerender the header to it's right content
		setWidth(window.innerWidth);

		// this is the function that is called every time the window
		// is on resize
		const handleResize = () => {
			// checking if the window size is less or greater than 800
			// and setWidth to current width of the window
			if (window.innerWidth < 800 || window.innerWidth > 800) {
				setWidth(window.innerWidth);
			}
		};

		// Listens to window screen resize
		window.addEventListener("resize", handleResize);
		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);

	// This is the header content that will be displayed if the window width
	// is less than 800px
	const HeaderOnDesktop = (): JSX.Element => {
		return (
			<nav
				className="page-navbar responsive"
				style={{position: "relative"}}
			>
				<Stack
					spacing={5}
					direction="row"
					alignItems="center"
					className="navigation-bar"
					role="navigation"
				>
					<div className="link">
						<Link passHref href="/explore">
							<a
								href="#"
								style={{display: "flex", alignItems: "center"}}
							>
								{/* <ExploreIcon style={{marginRight: 5}} /> */}
								Protocols
							</a>
						</Link>
					</div>
					<div className="link">
						<Link passHref href="/agent-apply">
							<a
								href="#"
								style={{display: "flex", alignItems: "center"}}
							>
								Features
							</a>
						</Link>
					</div>
					<div className="link">
						<Link passHref href="/agent-apply">
							<a
								href="#"
								style={{display: "flex", alignItems: "center"}}
							>
								About us
							</a>
						</Link>
					</div>
					<div className="link">
						<Link passHref href="/#">
							<a
								href="#"
								style={{display: "flex", alignItems: "center"}}
							>
								Token
							</a>
						</Link>
					</div>
					<div className="link">
						<Link passHref href="/#">
							<a
								href="#"
								style={{display: "flex", alignItems: "center"}}
							>
								Wallet
							</a>
						</Link>
					</div>
					<div className="launch" id="launch-app-btn-wrap">
						<Button
							color="warning"
							size="small"
							variant="contained"
						>
							Launch DApp
						</Button>
					</div>
				</Stack>
			</nav>
		);
	};

	// This is the header content that will be displayed if the window width
	// is greater than 800px
	const HeaderOnMobile = (): JSX.Element => {
		return (
			<nav className="page-navbar responsive mobile-screen">
				<Stack direction="row" alignItems="center" spacing={3}>
					<div className="launch" id="launch-dapp-btn-wrap">
						<Button
							color="warning"
							size="medium"
							variant="contained"
						>
							Launch DApp
						</Button>
					</div>
					<div className="navigation-icon">
						<IconButton
							role="toolbar"
							className="icon"
							aria-roledescription="it toggle menubar on small screen size [andriod, tablet]"
							onClick={() =>
								setState({...state, openDrawer: true})
							}
						>
							<Menu fontSize="medium" className="icon-svg" />
						</IconButton>
					</div>
				</Stack>
				<SwipeableDrawer
					anchor="right"
					open={state.openDrawer}
					onClose={() => setState({...state, openDrawer: false})}
					onOpen={() => setState({...state, openDrawer: true})}
				>
					<div className="drawer-container">
						<div className="drawer-wrapper">
							<ul>
								{NavbarData.map((data, index) => {
									return (
										<Link
											key={index}
											passHref
											href={data.link}
										>
											<a href="#">
												<ListItem>
													<ListItemIcon>
														<data.icon fontSize="small" />
													</ListItemIcon>
													<ListItemText
														primary={
															<small>
																{data.text}
															</small>
														}
													/>
												</ListItem>
											</a>
										</Link>
									);
								})}
							</ul>
							<div
								className="launch"
								id="launch-app-btn-wrap"
								style={{padding: 12, marginTop: "1em"}}
							>
								<Button
									color="warning"
									size="medium"
									variant="contained"
									fullWidth
								>
									Launch DApp
								</Button>
							</div>
						</div>
					</div>
				</SwipeableDrawer>
			</nav>
		);
	};

	// returns this navbar if user is on mobile
	return (
		<div className="header-wrapper">
			<div className="logo-wrapper">
				<Link passHref href="/">
					<a
						href="#"
						className="logo"
						style={{
							display: "flex",
							alignItems: "center",
							fontSize: "1.5em",
							fontWeight: 600,
						}}
					>
						<Image
							src="/logos/logo-light.png"
							height="40"
							width={120}
							alt="Veegor logo"
						/>
					</a>
				</Link>
			</div>
			{width > 900 ? <HeaderOnDesktop /> : <HeaderOnMobile />}
		</div>
	);
}

export default Layout;
