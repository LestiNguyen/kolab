import React, { Component } from 'react';
import Content from './service-aside';
import axios from 'axios';
import $ from 'jquery';
class content extends Component {
    constructor(props) {
        super(props);
        this.state = {
            asides:[],
            active: {},
        }
      }
    componentDidMount(){
        axios.get(window.location.origin+'/aside')
        .then(res => this.setState({asides:res.data}))
    }
    pressItem(target){
		var mainMenu = $('.container').width() >= 992 ? 81 : 60;
		var position = $("." + target).offset().top - mainMenu;
		$("html, body").animate({
			scrollTop: position,
		},1000);   
	}
    render() {
        return (
        <aside className="sidebar">
		    <div className="sidebar__content">
			    <ul className="menu">
                    {this.state.asides.map(aside => 
                    <Content 
						click={this.pressItem.bind(this,aside.classes)}
						key={aside.id}
						name={aside.name}
                    />)}
                </ul>
            </div>
        </aside>
        )
    }
}
export default content;