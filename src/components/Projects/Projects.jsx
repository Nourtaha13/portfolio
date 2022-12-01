import React from 'react'
import "./Projects.css"
import pattern from "../../assets/images/pattern.svg"
import img from "../../assets/images/preview.png"
function Projects() {
	return (
		<div className="projects" id='projects' style={{ background: `url(${pattern})` }}>
			<div className="title d_flex c_flex">
				<h2>Projects</h2>
			</div>
			<div className="pro_content d_flex s_flex">
				<div className="column d_flex d_flex_column">
					
					<div className='h75'><a href="#"><img src={img} /></a></div>
					<div className='h25'><a href="#"><img src={img} /></a></div>
				</div>
				<div className="column d_flex d_flex_column">
					<div className='h50'><a href="#"><img src={img} /></a></div>
					<div className='h50'><a href="#"><img src={img} /></a></div>
				</div>
				<div className="column d_flex d_flex_column">
					<div className='h25'><a href="#"><img src={img} /></a></div>
					<div className='h75'><a href="#"><img src={img} /></a></div>
				</div>
			</div>
		</div>
	)
}

export default Projects