import React from 'react';

class ContactLinks extends React.PureComponent {
  render() {
    return (
      <div className="contact-links">
        <span>
          <a rel="noopener" target="_blank" href="mailto:gmail@yudocaa.in">
            gmail@yudocaa.in
          </a>
        </span>
        <span>
          <a
            rel="noopener"
            target="_blank"
            href="https://www.twitter.com/yudocaa"
          >
            twitter
          </a>
        </span>
        <span>
          <a
            rel="noopener"
            target="_blank"
            href="https://github.com/sayanchowdhury"
          >
            github
          </a>
        </span>
        <span>
          <a
            rel="noopener"
            target="_blank"
            href="https://facebook.com/yudocaa"
          >
            facebook
          </a>
        </span>
      </div>
    );
  }
}

export default ContactLinks;
