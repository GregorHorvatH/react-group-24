import { useState, useEffect } from 'react';
import parser from 'fast-xml-parser';
import axios from 'axios';

const Video = () => {
  const [url, setUrl] = useState('');

  useEffect(() => {
    axios
      .get('https://cdn.admixer.net/public/player%2Fregular-preroll.xml')
      .then(({ data }) => data)
      .then((data) => {
        setUrl(
          parser.parse(data).VAST.Ad.InLine.Creatives.Creative.Linear.MediaFiles
            .MediaFile[0],
        );
      });
  }, []);

  const handlePlay = () => console.log('play');
  const handlePause = () => console.log('pause');
  const handleStop = () => console.log('stop');

  return (
    <div className="video">
      <p>video</p>
      <video
        src={url}
        controls="controls"
        onPlay={handlePlay}
        onPause={handlePause}
        onStop={handleStop}
      />
    </div>
  );
};

export default Video;
