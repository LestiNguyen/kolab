import React from 'react';

const dialog = (props) =>{
    const style={
        textAlign:'center',
    }
    return (
        <div className={props.classes} id="modalQC">
		<div className="modal__container">
			<div className="modal__dimmer"></div>
			<div className="modal__content">
				<div className="modal__body">
					<div className="padding-20">
						<h3>Quality Control Engineer</h3>
						<h4>Knowledge, Skills and Experience</h4>
						<ul>
							<li>Minimum 3 years of experience with manual web-based testing;</li>
							<li>Proficient in writing test plans and test cases;</li>
							<li>Worked on an Agile teams and familiar with Scrum;</li>
							<li>Experience in using QA Automation Test Tools for web testing: Elenium, Cucumber, JMeter, Calabash ... is a plus;</li>
							<li>Knowledge of software QA methodologies (white/black box, regression, load, performance), tools and processes;</li>
							<li>Knowledge of SQL and handling JIRA, GITHUB;</li>
							<li>Ability to use English in reading and writing;</li>
							<li>Ability to communicate professionally with coworkers and customers;</li>
							<li>Ability to work independently and meet managerial goals;</li>
							<li>Ability to organize daily activities of self and others and to work as a team player. <br/> Educational Background</li>
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