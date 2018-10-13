import React from 'react';
import PropTypes from 'prop-types';

// INFO: id is from spotify
// INFO: right click => share => copy embed => pull id from end of embed <code>
const SpotifyEmbed = ({ id, height, title }) => (
  <iframe
    title={title}
    src={`https://open.spotify.com/embed/track/${id}`}
    width="100%"
    height={height}
    frameBorder="0"
    allowtransparency="true"
    allow="encrypted-media"
  />
);

export default SpotifyEmbed;

SpotifyEmbed.propTypes = {
  id: PropTypes.string.isRequired,
  height: PropTypes.number,
  title: PropTypes.string,
};

SpotifyEmbed.defaultProps = {
  height: 80,
  title: 'Spotify',
};