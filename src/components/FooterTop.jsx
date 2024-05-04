import React from 'react'
import '../../public/assets/footer.css'
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { logo } from '../constants/sliderData';
export default function FooterTop() {
  return (
    <div className='footerImage'>
    <footer className="footer">
  	 <div className="container">
  	 	<div className="row">
           <div className="footer-col">
               <img className='footerlogo' src={logo} />
               </div>
  	 		<div className="footer-col">
  	 			<h4>company</h4>
  	 			<ul>
  	 				<li><a href="#">about us</a></li>
  	 				<li><a href="#">our services</a></li>
  	 				<li><a href="#">privacy policy</a></li>
  	 				<li><a href="#">affiliate program</a></li>
  	 			</ul>
  	 		</div>
  	 		<div className="footer-col">
  	 			<h4>get help</h4>
  	 			<ul>
  	 				<li><a href="#">FAQ</a></li>
  	 				<li><a href="#">About</a></li>
  	 				<li><a href="#">Services</a></li>
  	 				<li><a href="#">Contact</a></li>
  	 			</ul>
  	 		</div>
  	 		
            
  	 		<div className="footer-col">
  	 			<h4>follow us</h4>
  	 			<div className="social-links">
  	 				<a href="#"><FaFacebookF /></a>
  	 				<a href="#"><FaXTwitter /></a>
  	 				<a href="#"><FaInstagram /></a>
  	 				<a href="#"><FaLinkedinIn /></a>
  	 			</div>
  	 		</div>
               
  	 	</div>
  	 </div>
  </footer>
    </div>
  )
}
