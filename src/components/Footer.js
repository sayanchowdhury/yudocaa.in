import React from 'react';

class Footer extends React.PureComponent {
  render() {
    return (
      <div className="footer">
        <span>Sayan Chowdhury © {new Date().getFullYear()}. Made by <a rel="noopener" href="https://www.justinchi.me/" target="_blank" data-reactid="59">Justin Chi</a></span>
      </div>
    );
  }
}

export default Footer;
