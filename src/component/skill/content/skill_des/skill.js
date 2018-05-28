import React from 'react';
const content = (props) =>{
    return (
        <div className="skill cell-lg-3 cell-md-3 cell-sm-6 cell-xs-12">
            <div className="skill__image">
            <picture>
                <source srcSet={props.src1} type="image/webp"/>
                <source srcSet={props.src2} type="image/jpg"/>
                <img src={props.img}  className="img" alt=""/>
            </picture>
			</div>
            <div className="skill__content">
                <div className="title"><i className="fa fa-edit"></i>{props.name}</div>
                <div className="desc">{props.detail}</div>
            </div>
        </div>
    );
}
export default content