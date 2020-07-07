import React from 'react';
import Typewriter from '../components/Typewriter';
import Scrollchor from 'react-scrollchor';

class Hero extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="hero-container">
        <Typewriter className="hero-title" text="Sayan Chowdhury" />
        <div className="hero-description">
          I work as a Linux Software Engineer at Kinvolk, currently working with the team building Flatcar Container Linux.
        </div>
      </div>
    );
  }
}

export default Hero;
