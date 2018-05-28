import React,{Component} from 'react';
import axios from 'axios';
import $ from 'jquery';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as fetchData from '../../../../actions/action';
class renderReact extends Component{
    componentWillMount(){
        this.props.apiHeader()
    }
    pressItem(target){
        var mainMenu = $('.container').width() >= 992 ? 81 : 60;
        var position = $("." + target).offset().top - mainMenu;
        $("html, body").animate({
            scrollTop: position,
        },1000);   
    }
    render(){
        const {data} = this.props.aside || {}
        return (
            <section className="section-mainMenu">
				<div className="container">
					<div className="mainMenu">
						<ul className="menu">
                            {data.map(data => 
                                    <li
                                        onClick={this.pressItem.bind(this,data.classes)}
                                        key={data.id}
                                    >
                                        <a>{data.name}</a>
                                    </li>
                                )
							}
						</ul>
						<div className="socials">
							<a href="https://www.facebook.com/KolabsLLC/" className="social facebook"><i className="fa fa-facebook"></i></a>
						</div>
					</div>
				</div>
			</section>
        )
    }
    
}
const mapStateToProps = state =>{
    return {
        aside:state.aside
    }
}
const mapDispatchToProps = dispatch =>{
    return bindActionCreators({
		...fetchData,
	}, dispatch)
}
export default connect(mapStateToProps,mapDispatchToProps)(renderReact)