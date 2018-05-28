import React from 'react';

const content = (props)=>{
    var progress = {
        width: props.width
    }
    return (
        <div className="progressBar-item">
			<div className="info">
				<div className="name">{props.name}</div>
				<div className="percent">{props.percent}</div>
			</div>
			<div className="progressBar-primary">
				<div className="progress" style={progress}></div>
			</div>
		</div>
    )
}
export default content