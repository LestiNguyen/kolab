import React from 'react';
const component = (props) =>{
    return (
        <div className="contact cell-xl-3 cell-lg-3 cell-md-3 cell-sm-6 cell-xs-12">
			<div className="contact__container">
				<div className="contact__icon">
					<i className={props.icon}></i>
				</div>		
				<div className={"contact__title"}>{props.title}</div>
				<div className="contact__detail">{props.detail}</div>
			</div>
		</div>
    )
}
export default component