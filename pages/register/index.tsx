/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Image from "next/image";
import Link from "next/link";
import Footer from "../../components/global/footer";

function Register() {
	return (
		<React.Fragment>
			<div className="auth register-container">
				<div className="auth-wrapper register-wrapper">
					<div className="page-bg-image-container">
						<Image
							src="/images/homebg.jpg"
							layout="fill"
							priority
							alt="background-image"
							className="bgimage"
						/>
					</div>
					<div className="section form-box">
						<form action="" className="form-group login-form">
							<div className="form-wrapper">
								<div className="form-label">
									<div className="primary-text">
										Hi, Welcome
									</div>
									<div className="secondary-text">
										Sign up by filling the form below
									</div>
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
										placeholder=""
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
											Email*
										</span>
									</label>
									<input
										type="email"
										id="email"
										placeholder=""
										name="email"
										className="text-control email"
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
										placeholder=""
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
										<span>Sign up</span>
									</button>
								</div>
								<div className="register-link link">
									<div className="text">
										<span>
											Have an account ? {"  "}
											<span>
												<Link href="/login" passHref>
													<a href="#"> Login</a>
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
			{/* <Footer /> */}
		</React.Fragment>
	);
}

export default Register;