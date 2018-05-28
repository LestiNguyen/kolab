import React, { Component } from 'react';
import Des from './content_des/content_des';
import Img from './content_img/content_img';
class content extends Component {
    render() {
        return (
            <section className="section section-whyChoose">
                <div className="container">
                <h2>Why you should choose us?</h2>
                    <div className="whyChoose grid grid-gap-40">
                        <Des/>
                        <Img/>  
                    </div>
                </div>
            </section>
        );
    }
}

export default content;