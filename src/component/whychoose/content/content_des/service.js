import React from 'react';
const component = (props)=>{
    return (
        <div onClick={props.click} className={props.classes}>
			<div className="accordion__header">
				<div className="title">{props.title}</div>
			    <div className="collapse"></div>
			</div>
			<div className="accordion__body">
				<div className="padding-20">{props.body}</div>
			</div>
		</div>
    )
}
export default component