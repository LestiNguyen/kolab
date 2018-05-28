import React, { Component } from 'react';
import Img from './service';
class content extends Component {
    render() {
        return (
            <section className="section section-team">
				<div className="container">
                    <h2 className="text-center">Our Team</h2>
                    <div className="teams grid grid-gap-40">
                            <Img src2="assets/images/kolabs-gallery1.jpg" src1="assets/images/kolabs-gallery1.webp" img= "assets/images/kolabs-gallery1.jpg"/>
                            <Img src2="assets/images/kolabs-gallery2.jpg" src1="assets/images/kolabs-gallery2.webp" img= "assets/images/kolabs-gallery2.jpg"/>
                            <Img src2="assets/images/kolabs-gallery3.jpg" src1="assets/images/kolabs-gallery3.webp" img= "assets/images/kolabs-gallery3.jpg"/>
                    </div>
                </div>
            </section>
        );
    }
}

export default content;