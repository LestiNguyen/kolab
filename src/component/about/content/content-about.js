import React, { Component } from 'react';
import Content from './des-about';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as fetchData from '../../../actions/action';
class content extends Component {
    componentWillMount(){
        this.props.apiIntro()
    }
    render() {
        const {data} = this.props.intro || {}
        return (
            <section className="section section-about">
                <div className="container">	
                    <div className="about grid grid-gap-40">
                        <div className="about__info cell-lg-9 cell-md-8 cell-sm-6 cell-xs-12">
                            <h2>About us</h2>
                            <p>KOLABS LLC is an exciting new kind of tech startup company that is headquartered in Los Angeles, CA with a satellite office in Ho Chi Minh City, Vietnam.</p>
                            <p>Unique to this space, we are not your typical startup as we are both a startup and an incubator.</p>
                            <p>We are able to achieve this as we are self-funded but also have backing from a network of angel investors.</p>
                            <p>With this model we are able to provide all the benefits of a US startup company but without the risks.</p>
                            <p>KOLABS LLC currently specializes in projects in gaming and is expanding to real-time social messaging apps and more.</p>
                            <p>At KOLABS LLC, we do not have clients nor do we want them.</p>
                            <p>We have partners and we want to be able to change the way companies are created and help our partners succeed.</p>
                        </div>
                        <div className="about__image cell-lg-3 cell-md-4 cell-sm-6 cell-xs-12">
                        <picture>
                            <source srcSet="assets/images/about_us.webp" type="image/webp"/>
                            <source srcSet="assets/images/about_us.jpg" type="image/jpeg"/>
                            <img src="assets/images/about_us.webp" className="img" alt=""/>
                        </picture>
                        </div>
                    </div>
                    <div className="introduces grid grid-gap-20">
                        {data.map(data => 
                        <Content  key={data.id}  icon = {data.icon} title={data.title} des={data.des}/>)}
                    </div>
                </div>
            </section>
        );
    }
}
const mapStateToProps = (state) =>{  
    return {
        intro:state.intro,
    }
}
const mapDispatchToProps = dispatch =>{
    return bindActionCreators({
		...fetchData,
	}, dispatch)
}
export default connect(mapStateToProps,mapDispatchToProps)(content)