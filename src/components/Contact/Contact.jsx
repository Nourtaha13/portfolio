import React from 'react'
import "./Contact.css"

function Contact() {
	return (
		<div className="contact d_flex d_flex_column" id='contact'>
			<div className="title">
				<h2>Contact Me</h2>
			</div>
			<div className="content_con d_flex">
				<div className="con_left grow1 ">
					<form action="#" className='d_flex d_flex_column gap1'>
						<p>Message Me</p>
						<div className="row d_flex gap1">
							<input type="text" placeholder='Name' />
							<input type="email" placeholder='Email' />
						</div>
						<input type="text" placeholder='Subject' />
						<textarea placeholder='Message'></textarea>
						<button type='submit'>Send Message <i className="fa-solid fa-right-long"></i></button>
					</form>
				</div>
				<div className="con_right d_flex d_flex_column gap1 grow1">
					<h3>Get in Touch</h3>
					<p className='topic'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos harum corporis fuga corrupti. Doloribus quis soluta nesciunt veritatis vitae nobis?</p>
					<span><i className="fa-solid fa-user"></i>Nour Eldin</span>
					<span><i className="fa-solid fa-location-dot"></i>Egypt, Egypt</span>
					<span><i className="fa-solid fa-at"></i>nourraaft@gmail.com</span>
				</div>
			</div>
		</div>
	)
}

export default Contact