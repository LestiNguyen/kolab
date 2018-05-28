import React, { Component } from 'react';
import axios from 'axios';
import Content from './service-feedback'
import OwlCarousel from 'react-owl-carousel';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as fetchData from '../../../actions/action';
class content extends Component {
    componentWillMount() {
        this.props.apiFeedBack()
        this.props.feed.timeoutId = setTimeout(() => {
            this.setState({show: true});
        }, 1000);
    }
    render() {
        const {data} = this.props.feed || {}
        const carouselIndex = data.map(data => 
                <Content
                    key = {data.id} 
                    content = {data.content}
                    img = {data.img}
                    src1 = {data.webp}
                    src2 = {data.img}
                    name = {data.name}
                    comment = {data.comment}
                /> 
        )
        return (
            <OwlCarousel {...this.props.options} className="feedback owl-theme">
                        {carouselIndex}
             </OwlCarousel>
        );
    }
}
const mapStateToProps = (state) =>{ 
    return {
        ...state,
    }
}
const mapDispatchToProps = dispatch =>{
    return bindActionCreators({
		...fetchData,
	}, dispatch)
}
export default connect(mapStateToProps,mapDispatchToProps)(content)
