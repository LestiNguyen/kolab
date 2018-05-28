import React from 'react';

const component = (props) =>{
    return (
        <div className="team cell-xl-4 cell-lg-4 cell-md-4 cell-sm-4 cell-xs-12">
            <picture>
                <source srcSet={props.src1} type="image/webp"/>
                <source srcSet={props.src2} type="image/jpeg"/>
                <img src={props.img} className="img" alt=""/>
            </picture>
		</div>
    )
}
export default component