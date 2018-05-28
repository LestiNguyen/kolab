import React from 'react';
const content = (props) =>{
    return (
        <div className="contactInfo">
			<div className="icon">
				<span><i className={props.icon}></i></span>
			</div>
			<div className="text">{props.text1} <br></br>{props.text2} </div>
		</div>
    )
}
export default content