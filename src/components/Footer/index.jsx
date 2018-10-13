import React from 'react';

const Footer = () => (
  <footer>
    <div className="share">
      <p className="title">Share InTune</p>
      <ul>
        <li>
          <a
            href="https://twitter.com/home?status=InTune%20-%20Guitar%20Tunings%20without%20the%20memorization%20by%20%40zachbharris%20https%3A//intune.zachbharris.com"
            target="_blank"
            rel="noreferrer noopener">
              Twitter
          </a>
        </li>
      </ul>
    </div>
    <div className="issues">
      <a href="https://github.com/zachbharris/intune/issues/new" target="_blank" rel="noreferrer noopener">View on GitHub</a>!
    </div>
    <div className="personal"></div>
  </footer>
);

export default Footer;
