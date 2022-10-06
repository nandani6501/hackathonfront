import React,{Component} from 'react';
import { auth } from './firebase';
import jsPDF from 'jspdf';
import { Button } from 'react-bootstrap';

// const Mainpage = () => {

	const logout = () => {
		auth.signOut();
	}



class Mainpage extends Component{
	pdfGenerate=()=>{
		var doc = new jsPDF('landscape','px','a4','false');
		doc.setFont('Helvetica')
		doc.text(60,100,"Token Details: ")
		doc.text(60,140,"Service Name : Aadhar Card" )
		doc.text(60,160,"Mobile Number :" +auth.currentUser.phoneNumber)
		doc.text(60,180,"Token Number : 1" )
		doc.text(60,200,"Estimated Coming Time : 11.00" )
		doc.text(60,240,"Documents List That should be brought together : " )

		
		doc.setFontSize(14)
		doc.text(60,260,"1.qwertyhuj" )
		doc.text(60,280,"2.swdefghj " )

		doc.setFontSize(12)
		doc.text(60,320,"**Note : Time may vary in certain situations such as power failure , server down etc." )
		
		doc.save('token.pdf')
	}

	render(){
		return(
		
			<>	
			<div style={{textAlign:"center"}}>
			<h2 style={{marginTop:"5%"}}>Token Details : </h2><br></br>
			<p style={{fontSize:"20px"}}>Service Name : Aadhar Card <br/> <br/>
			Mobile Number : {auth.currentUser.phoneNumber}<br/> <br/>
			Token Number : 1 <br/> <br/>
			Estimated Coming Time : 11 <br/> <br/>
			Documents List <br/>1.asdf <br/> 2.asd <br/><br/>
			</p>
			<p style={{fontSize:"12px"}}>**Note : Time may vary in certain situations such as power failure , server down etc.</p>
			<Button onClick={this.pdfGenerate}>Download PDF</Button>
			<Button style={{ "marginLeft": "20px" }}
				onClick={logout}>Logout</Button>
			</div>
					
			
				</>
		);
	}
}

export default Mainpage;
