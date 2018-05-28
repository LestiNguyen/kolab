import React from 'react';
const Content = (props) =>{
    return (
        <div className="introduce cell-xl-4 cell-lg-4 cell-md-4 cell-sm-6 cell-xs-12">
            <div className="">
                <div className="introduce__icon">
                    <i className= {props.icon}></i>
                </div>
                <div className="introduce__content">
                    <h5 className="introduce__title">{props.title}</h5>
                    <div className="introduce__desc">{props.des}</div>
                </div>
            </div>
        </div>
    ); 
}
export default Content;