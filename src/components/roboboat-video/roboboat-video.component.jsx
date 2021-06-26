import React from 'react';
import Line from '../line/line.component';
import './roboboat-video.styles.scss';
import YouTube from 'react-youtube';

const RoboboatVideo = () => {
  const opts = {
    height: '400',
    width: '670'
  };

  return (
    <div className="roboboat-video">
      <h1>TRUSTest Mockup Development</h1>
      <Line />
      
      <div className="roboboat-video__youtube">
        <YouTube videoId="jsRMPio2Jv0" opts={opts} />
      </div>
    </div>
  );
};

export default RoboboatVideo;
