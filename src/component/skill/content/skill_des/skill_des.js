import React, { Component } from 'react';
import Content from './skill';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as fetchData from '../../../../actions/action';
class skill_des extends Component {
    componentWillMount(){
        this.props.apiSkill()
    }
    render() {
        const {data} = this.props.skill || {}
        return (
            <section className="section-skill">
        		<div className="skill-header">
				    <h2>Our key skills</h2>
			    </div>
                <div className="skill-body">
                    <div className="container">
                        <div className="skill-list grid grid-gap-10">
                        {data.map(data =><Content key={data.id} name ={data.title} detail={data.des} img={data.img} src1={data.webp} src2={data.img}/>) }
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
const mapStateToProps = (state) =>{  
    return {
        skill:state.skill
    }
}
const mapDispatchToProps = dispatch =>{
    return bindActionCreators({
		...fetchData,
	}, dispatch)
}
export default connect(mapStateToProps,mapDispatchToProps)(skill_des)