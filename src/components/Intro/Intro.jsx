import React from 'react'
import "./Intro.css"
import img from "../../assets/images/img.svg"
import bg from "../../assets/images/bg.svg"
function Intro() {
	return (
		<div className='intro c_flex' id='home' style={{ 
			background: `url(${bg})`,    
			backgroundPosition: "center",
			backgroundRepeat: "repeat",
			backgroundSize: "contain", }}
		>
			<div className="content_left d_flex d_flex_column grow1">
				<span>Hello, i'm</span>
				<h1>Nour Eldin</h1>
				<span>Web Developer</span>
				<a href='#' className='d_flex ca_flex'>
					Content Me 
					<i className="fa-solid fa-right-long"></i>
				</a>
			</div>
			<div className="content_right grow1 d_flex">
				<img src={img} alt="img" />
			</div>
		</div>
	)
}

export default Intro
