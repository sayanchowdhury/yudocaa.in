import React from 'react';
import Typewriter from 'components/Typewriter';
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
          I write infrastructure applications at Red Hat, currently working with the team building Fedora CoreOS.
        </div>
      </div>
    );
  }
}

export default Hero;
