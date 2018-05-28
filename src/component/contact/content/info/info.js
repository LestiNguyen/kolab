import React, { Component } from 'react';
import Card from './service'
import axios from 'axios';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as fetchData from '../../../../actions/action';
class info extends Component {
    componentWillMount(){
        this.props.apiInfo()
    }
    render() {
        const {data} = this.props.info || {}
        return (
            <section className="footer__info">
				<div className="container">
                    <h2>Contact Us</h2>
					<div className="grid grid-gap-20">
                        {data.map(info => <Card key={info.id} icon={info.icon} detail={info.detail} title={info.title}/>)}
                    </div>
                </div>
            </section>
        );
    }
}
const mapStateToProps = (state) =>{ 
    return {
        ...state
    }
}
const mapDispatchToProps = dispatch =>{
    return bindActionCreators({
		...fetchData,
	}, dispatch)
}
export default connect(mapStateToProps,mapDispatchToProps)(info)