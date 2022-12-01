import React from 'react'
import "./About.css"
import img from "../../assets/images/img2.svg"
function About() {
	return (
		<div className='about' id='about'>
			<h2 className='title'>About Me</h2>
			<div className='about_content d_flex d_flex_wrap'>
				<div className='grow1'>
					<div className="img">
						<img src={img} alt="img" />
					</div>
				</div>
				<div className='grow1 d_flex d_flex_column a_flex gap2'>
					<h3>Who I Am?</h3>
					<span>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at tellus semper lacus varius suscipit. Suspendisse pulvinar, justo id scelerisque efficitur, quam augue pharetra metus, ultricies finibus elit ipsum vitae.
					</span>
					<span>
					Cupiditate recusandae laudantium esse, harum animi aspernatur quisquam et delectus ipsum quam alias quaerat? Quasi hic quidem illum 
					</span>
					<a href="#" download >Download Resume <i className="fa-solid fa-download"></i></a>
				</div>
			</div>
		</div>
	)
}

export default About