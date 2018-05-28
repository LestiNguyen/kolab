import React, { Component } from 'react';
import Card from './card/card';
class content extends Component {
    render() {
        return (
                <section className="section section-introduce">
				    <div className="container">
                        <Card/>
				    </div>
			    </section>
        );
    }
}
export default content;