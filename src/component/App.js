import React, { Component } from 'react';
import Home from './home/home';
import About from './about/about';
import Working from './working/working';
import Skill from './skill/skill';
import Feedback from './feedback/feedback';
import Whychoose from './whychoose/whychoose';
import Team from './team/team';
import Career from './career/career';
import Contact from './contact/contact';
import Aside from './aside/aside';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
const {Top,Header,Content} = Home
import Dialog from './modal/modal';
import * as fetchData from '../actions/action';
class App extends Component {
  closeModal(){
      this.props.closeModal()
  }
  render() {
    return (
      <div className="App">
        		<header className="header">
              <Top/>
              <Header/>
              <Content/>
            </header>
            <main className="main">
              <About/>
              <Working/>
              <Skill/>
              <Whychoose/>
              <Feedback/>
              <Team/>
              <Career/>
            </main>
            <footer className="footer">
              <Contact/>
            </footer>
            <Aside/>
            {this.props.idDialog == 1 ? <Dialog.reactDialog classes = "modal active" clickModal={event=>{this.closeModal()}}/> : <Dialog.reactDialog classes = "modal"/>}
            {this.props.idDialog == 2 ? <Dialog.netDialog classes = "modal active" clickModal={event=>{this.closeModal()}}/> : <Dialog.netDialog classes = "modal"/>}
            {this.props.idDialog == 3 ? <Dialog.qcDialog classes = "modal active" clickModal={event=>{this.closeModal()}}/> : <Dialog.qcDialog classes = "modal"/>}
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
export default connect(mapStateToProps,mapDispatchToProps)(App);
