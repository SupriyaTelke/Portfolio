import React,{ Component } from 'react';
import Projects from './Projects';
import SocialProfiles from './SocialProfiles';
import profile from '../assets/profile.png';
import Title from './Title';


class App extends Component{
    state = {displayBio : false};

    toggleDisplayBio = () =>{
        this.setState({displayBio : !this.state.displayBio});
    }

    render(){
        return( 
            <div>
                <img src={profile} alt ='Profile' style={{width:200 , height: 200, borderRadius: 100}}/>
                <h1>Hello</h1>
                <p>I am Software developer</p>
                <Title/>
                {
                    this.state.displayBio ? 
                    (
                        <div>
                            <p>I live in Oslo,Norway</p>
                            <p>I love to code everyday</p>
                            <p>My favourite language is Javascript and I like to React:)</p>
                            <button onClick={this.toggleDisplayBio}>Show Less</button>
                        </div>
                    ) :
                    (
                        <div>
                            <button onClick={this.toggleDisplayBio}>Read More</button>
                        </div>
                    )
                } 
                <hr />
                <Projects/>
                <hr />
                <SocialProfiles/>
            </div>
        )
    }
}

export default App;