import React, { Component } from 'react';
import Content from './des';
import axios from 'axios';
class card extends Component {
    state = {cards:[]} 
    componentDidMount(){
        axios.get(window.location.origin+'/introduce')
        .then(res => this.setState({cards:res.data}))
    }
    render() { 
        return (
            <div className="introduces grid grid-gap-20">
                {this.state.cards.map(card => 
                <Content  key={card.id}  icon = {card.icon} title={card.title} des={card.des}/>)}
            </div>
        );
    }
}
export default card;