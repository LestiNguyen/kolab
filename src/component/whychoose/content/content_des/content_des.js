import React, { Component } from 'react';
import axios from 'axios';
import Accordion from './service';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as fetchData from '../../../../actions/action';
class content_des extends Component {
    componentWillMount(){
        this.props.apiChoose()
    }
    handleChoose = (id) =>{
        this.props.clickChoose(id)
    }
    render() { 
        const {data} = this.props.choose
        return (
            <div className="whyChoose__content cell-lg-6 cell-md-6 cell-sm-6 cell-xs-12">
                {data.map((data) =>
                     <Accordion 
                        click={this.handleChoose.bind(this,data.id)} 
                        classes ={this.props.active === data.id ? 'accordion active': 'accordion'} 
                        title={data.title} 
                        body={data.body}
                        key={data.id}
                     />
                )}
            </div>
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
export default connect(mapStateToProps,mapDispatchToProps)(content_des)