import React, { Component } from 'react';
import A from './service';
class footer extends Component {
    render() {
        return (
            <div className="feedback-logo">
				<A img="assets/images/fb_itviec.png" alt=""/>
				<A img="assets/images/fb_facebook.png" alt=""/>
				<A img="assets/images/fb_git.png" alt=""/>
			</div>	
        );
    }
}

export default footer;