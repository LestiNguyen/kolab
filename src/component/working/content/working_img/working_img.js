import React, { Component } from 'react';

class working_img extends Component {
    render() {

        return (
            <div className="working__image cell-xl-6 cell-lg-6 cell-md-6 cell-sm-12 cell-xs-12">
                <picture>
                    <source srcSet="assets/images/bg_working.webp" type="image/webp"/>
                    <source  type="image/jpeg"/>
                    <img src="assets/images/bg_working.webp" srcSet="assets/images/bg_working.jpg" className="img" alt=""/>
                </picture>
            </div>
        );
    }
}

export default working_img;