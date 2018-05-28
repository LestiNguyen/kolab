import React, { Component } from 'react';
import Content from './service';
class top extends Component {
    render() {
        return (
            <section className="section-topHeader">
                <div className="container">
                    <div className="topHeader">
                        <a href="" className="logo"><img src="assets/images/kolabs.png" alt="kolabs"/></a>
                            <div className="topHeader__contactInfo">
                                <Content icon="fa fa-map-marker" text1="5 Dong Da" text2="Wrd 2, Tan Binh Dist"/>
                                <Content icon="fa fa-envelope-o" text1="Write to us " text2="ltran@kolabs.co"/>
                                <Content icon="fa fa-phone" text1="Call us " text2="+84 8 6685 2648"/>
                                <div className="toggle-asideMenu"><i className="fa fa-bars"></i></div>
                            </div>
                        </div>
                    </div>
            </section>
        );
    }
}

export default top;