/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Image from "next/image";
import Link from "next/link";
import Footer from "../../components/global/footer";

function Login() {
	return (
		<React.Fragment>
			<div className="auth login-container">
				<div className="auth-wrapper login-wrapper">
					<div className="section sideimage">
						<div className="bg-wrapper">
							{/* <Image
								layout="fill"
								priority
								src="/images/loginbg.png"
								alt="background-image for login page"
							/> */}
						</div>
					</div>
					<div className="section form-box">
						<form action="" className="form-group login-form">
							<div className="form-wrapper">
								<div className="form-label">
									Hi, Welcome Back
								</div>
								<div className="form-control">
									<label
										htmlFor="username"
										className="form-control-label"
									>
										<span className="label-text">
											Username*
										</span>
									</label>
									<input
										type="text"
										id="username"
										placeholder="Enter your username"
										name="username"
										className="text-control username"
									/>
								</div>
								<div className="form-control">
									<label
										htmlFor="username"
										className="form-control-label"
									>
										<span className="label-text">
											Wallet Key*
										</span>
									</label>
									<input
										type="text"
										id="username"
										placeholder="Enter your wallet key"
										name="username"
										className="text-control username"
									/>
								</div>
								<div className="action-control">
									<button
										type="button"
										className="submit-btn"
										id="submit-form"
									>
										<span>Login</span>
									</button>
								</div>
								<div className="register-link link">
									<div className="text">
										<span>
											Don't have an account ?{"   "}
											<span>
												<Link href="/register" passHref>
													<a href="#">
														{" "}
														Create Account
													</a>
												</Link>
											</span>
										</span>
									</div>
								</div>
							</div>
						</form>
					</div>
				</div>
			</div>
			<Footer />
		</React.Fragment>
	);
}

export default Login;
