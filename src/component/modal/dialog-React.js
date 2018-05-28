import React from 'react';

const dialog = (props) =>{
    return (
        <div className={props.classes} id="modalNodejs">
		<div className="modal__container">
			<div className="modal__dimmer"></div>
			<div className="modal__content">
				<div className="modal__body">
					<div className="padding-20">
						<h3>Front-end Developer (Nodejs or React)</h3>
						<h4>Knowledge, Skills and Experience</h4>
						<ul>
							<li>Proficient understanding of code versioning tools: GIT (Bitbucket, Github …);</li>
							<li>Worked on an Agile teams and familiar with Scrum;</li>
							<li>Quick learning, teamwork, active and self-started;</li>
							<li>Above 2 years work experience with REACT;</li>
							<li>Have quick-learning and problem-solving skill.</li>
							<li>Be a SMART guy, energy, sharp with very optimistic attitude.</li>
							<li>Strong skills in JQuery, React JS, Bootstraps, Gruntjs…;</li>
							<li>Experience applying Functional and Object-Oriented styles of programming;</li>
							<li>Experience using Javascript extensively;</li>
							<li>Knowledge and experience in graphic design for web or user experience is a plus. <br/><b>Educational Background</b></li>
							
							<li>Bachelor’s degree in information technology or relevant field.</li>
						</ul>
						<p className="text-center margin-top-10">
							Please send your profile to Long Tran (Mr.): ltran@kolabs.co
							<br/>
							For more information, please visit:
							<br/>
							- Our Office: 03th floor, Kicotrans building,  05 Dong Da, W.2 , Tan Binh District , HCMC
							<br/>
							- Our Website: www.kolabs.co
						</p>
					</div>
				</div>
				<div className="modal__footer">
						<a className="btn btn-round btn-outline-info min-width-150" onClick={props.clickModal}>CLOSE</a>
				</div>
			</div>
		</div>
	</div>
    )
}
export default dialog