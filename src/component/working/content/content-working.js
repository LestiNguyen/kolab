import React, { Component } from 'react';
import Des from './working_des/working_des';
import Img from './working_img/working_img';
class content extends Component {
    render() {
        return (
            <section className="section-working">
                <div className="container container-fluid">
                    <div className="working grid grid-gap-40">
                        <Img/>
                        <Des/>
                    </div>
                </div>
            </section>
        );
    }
}

export default content;