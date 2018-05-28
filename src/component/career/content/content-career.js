import React, { Component } from 'react';
import Card from './card/card-career';
class content extends Component {
    render() {
        return (
            <section className="section section-career">
				<div className="container">
					<h2 className="text-center">Careers</h2>
					<p className="pageTitle-desc">We're looking for talented individuals who want to work in a friendly, supportive and collaborative environment, and help us in our goal of internal development that continues throughout your career. Sound like you? Then you're the kind of person we need.</p>
                    <Card/>
                </div>
            </section>
        );
    }
}

export default content;