import React, { Component } from 'react';

const TITLE = [
    'a software developer',
    'a music lover',
    'an enthusiastic learner',
    'an adventure seeker'
];

class Title extends Component{
    state = {titleIndex : 0 , fadeIn : true};

    componentDidMount() {
        const timeOut = setTimeout(() => {
            this.setState( {fadeIn : false})
        }, 2000);
        this.animateTitle();
    }

    componentWillUnmount() {
        clearInterval(this.titleInterval);
        clearTimeout(this.timeOut);
    }

    animateTitle = () => {
        const titleInterval = setInterval(() => {
            const titleIndex = (this.state.titleIndex + 1) % TITLE.length;
            this.setState({titleIndex, fadeIn: true});
            this.timeOut = setTimeout(() => {
                this.setState( {fadeIn : false})
            }, 2000);
        },4000)
    }
    render(){
        const {fadeIn,  titleIndex} = this.state;
        const title = TITLE[titleIndex];

        return(
            <p className = { fadeIn ? 'title-fade-in' : 'title-fade-out' }>I am {title}</p>
        )
    }
}

export default Title;