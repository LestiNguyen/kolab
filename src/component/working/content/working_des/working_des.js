import React, { Component } from 'react';
import Li from './working_li';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as fetchData from '../../../../actions/action';
class working_des extends Component {
	componentWillMount(){
        this.props.apiWork()
    }
    render() {
		const {data} = this.props.work || {}
        return (
            <div className="working__content cell-xl-6 cell-lg-6 cell-md-6 cell-sm-12 cell-xs-12">
						<h2>Why You'll Love Working Here</h2>
						<ul className="working__list">
							{data.map(data => <Li key={data.id} des={data.des} />)}
						</ul>
			</div>
        );
    }
}
const mapStateToProps = (state) =>{  
    return {
        work:state.work,
    }
}
const mapDispatchToProps = dispatch =>{
    return bindActionCreators({
		...fetchData,
	}, dispatch)
}
export default connect(mapStateToProps,mapDispatchToProps)(working_des)