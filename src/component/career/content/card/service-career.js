import React from 'react';
const component = (props) => {
    return (
        <div className="career cell-xl-4 cell-lg-4 cell-md-4 cell-xs-12">
			<div className="career__container">
				<div className="career__image">
					<picture>
                    	<source srcSet={props.src1} type="image/webp"/>
                    	<source srcSet={props.src2} type="image/jpeg"/>
                    	<img src={props.img} className="img" alt=""/>
                    </picture>
				</div>
				<div className="career__content">
					<div className="title">{props.title}</div>
					<div className="desc">{props.des}</div>
				    <div className="action"><a className="btn" onClick={props.click} id="openModalNode" >MORE...</a></div>
				</div>
			</div> 	
		</div>
    )
}
export default component