import React, { Component } from 'react';
import Card from './service-career'
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as fetchData from '../../../../actions/action';
import _ from 'lodash';
import $ from 'jquery';
class card extends Component {
    componentWillMount(){
        this.props.apiCareer()
    }
    openModal(id) {
        this.props.clickCareer(id)
    }
    render() {
        const {data} = this.props.career || {}
        return (
            <div>
                <div className ="careers grid grid-gap-40">
                        {data.map(data => 
                            <Card 
                                key={data.id} 
                                title={data.title} 
                                des={data.des} 
                                img={data.img}
                                src1={data.webp}
                                src2={data.img}
                                click={this.openModal.bind(this,data.id)}
                            />
                        )}
                </div>
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
export default connect(mapStateToProps,mapDispatchToProps)(card)

