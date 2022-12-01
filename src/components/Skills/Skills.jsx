import React from 'react'
import Progress from './Progress'
import "./Skills.css"
function Skills() {
	return (
		<div className="skills" id='skills'>
			<div className="title">
				<h2>My Skills</h2>
			</div>
			<div className="skills_content d_flex">
				<div className="content_left grow1 d_flex d_flex_column gap2">
					<h3>My creative <span className='main_color'>skills</span> and <span className="main_color">experiences.</span></h3>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, ratione error est recusandae consequatur, iusto illum deleniti quidem impedit, quos quaerat quis minima sequi. Cupiditate recusandae laudantium esse, harum animi aspernatur quisquam et delectus ipsum quam alias quaerat? Quasi hic quidem illum. Ad delectus natus aut hic explicabo minus quod.
					</p>
				</div>
				<div className="content_right grow1 d_flex gap1 d_flex_column">
					<Progress name="HTML" to="95%" />
					<Progress name="CSS" to="85%" />
					<Progress name="JavaScript" to="75%" />
					<Progress name="ReactJS" to="80%" />
					<Progress name="NodeJs" to="60%" />
				</div>
			</div>
		</div>
	)
}

export default Skills