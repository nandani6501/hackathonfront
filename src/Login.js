import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import React, { useState } from 'react';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import { auth } from "./firebase";


const Login = () => {
	// Inputs
	const [mynumber, setnumber] = useState("");
	const [otp, setotp] = useState('');
	const [show, setshow] = useState(false);
	const [final, setfinal] = useState('');

	// Sent OTP
	const signin = () => {

		if (mynumber === "" || mynumber.length < 10) return;

		let verify = new firebase.auth.RecaptchaVerifier('recaptcha-container');
		let myfinalNumber = "+91 " + mynumber;
		console.log(myfinalNumber)
		auth.signInWithPhoneNumber(myfinalNumber, verify).then((result) => {
			setfinal(result);
			// alert("OTP sent on mobile number: +91 "+mynumber)
			setshow(true);
		})
			.catch((err) => {
				alert(err);
				window.location.reload()
			});
	}

	// Validate OTP
	const ValidateOtp = () => {
		if (otp === null || final === null)
			return;
		final.confirm(otp).then((result) => {
			// success
		}).catch((err) => {
			alert("Wrong code");
		})


	}

	return (
		<div style={{ "marginTop": "200px" }}>
			<center>
				<div style={{ display: !show ? "block" : "none" }}>
				<Form.Label style={{fontSize:"30px", color:"rgb(88, 143, 190)"}}>Enter Mobile Number</Form.Label><br/><br/>
					<input value={mynumber} onChange={(e) => {
					setnumber(e.target.value) }}
						style={{padding:"10px",width:"35vh"}} placeholder="Enter Mobile Number" />
					<br /><br />
					<div id="recaptcha-container"></div>
					
					<Button onClick={signin} style={{backgroundColor:"rgb(88, 143, 190)", marginTop:"2%"}}>Send OTP</Button>{' '}
				</div>
				<div style={{ display: show ? "block" : "none" }}>
				<Form.Label style={{fontSize:"30px", color:"rgb(88, 143, 190)"}}>Verify OTP</Form.Label><br/><br/>
					<input type="text"style={{padding:"10px",width:"35vh"}} placeholder={"Enter your OTP"}
						onChange={(e) => { setotp(e.target.value) }}></input>
					<br /><br />
					<p>OTP sent on mobile number: +91 {mynumber}</p>
					<br />
					<Button onClick={ValidateOtp} style={{backgroundColor:"rgb(88, 143, 190)", marginTop:"1%"}}>Generate Token</Button>{' '}
				</div>
			</center>
		</div>
	);
}

export default Login;
