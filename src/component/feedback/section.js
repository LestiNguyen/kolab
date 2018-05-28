import React, { Component } from 'react';
import Footer from './footer/footer';
import Content from './content/content-feedback';
class section extends Component {
    render() {
        return (
            <section className="section section-feedback">
				<div className="container">
                    <h2 className="text-center">What people say about us</h2>
                    <h4 className="text-center">Nothing makes us happier than hearing how happy we make you!</h4>
                    <Footer/>
                    <div className="icon-quote"><i className="fa fa-quote-left"></i></div>
                    <Content/>
                </div>
            </section>
        );
    }
}
export default section;