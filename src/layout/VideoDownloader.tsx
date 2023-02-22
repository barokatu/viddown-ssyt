import React, { useState } from 'react';
import VideoInfo from './VideoInfo';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faYoutube, faTiktok, faTwitter, faFacebook, faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons';

interface VideoDownloaderProps {}

const VideoDownloader: React.FC<VideoDownloaderProps> = () => {
  const [url, setUrl] = useState('');
  const [videoInfo, setVideoInfo] = useState<any>(null);
  const [error, setError] = useState('');

  const handleUrlChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUrl(event.target.value);
  };

  const handleGetVideoInfo = async () => {
    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/api/youtube?url=${url}`);
      if (response.ok) {
        const data = await response.json();
        setVideoInfo(data);
        setError('');
        console.log("DATA: ", data)
      } else {
        setError('Error fetching video information');
      }
    } catch (error) {
      setError('Error fetching video information');
    }
  };

    const renderPlatformIcon = (platform: string) => {
    switch (platform) {
      case 'youtube':
        return <FontAwesomeIcon icon={faYoutube} />;
      case 'tiktok':
        return <FontAwesomeIcon icon={faTiktok} />;
      case 'twitter':
        return <FontAwesomeIcon icon={faTwitter} />;
      case 'facebook':
        return <FontAwesomeIcon icon={faFacebook} />;
        case 'instagram':
          return <FontAwesomeIcon icon={faInstagram} />;
        case 'github':
          return <FontAwesomeIcon icon={faGithub} />;
      default:
        return null;
    }
  };

  return (
    <div className="container my-3">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <div className="card">
            <div className="card-body">
              <h3 className="card-title mb-3">Simple Video Downloader</h3>
              <h5 className='mb-4'>Support for Platform: {renderPlatformIcon('youtube')} {renderPlatformIcon('tiktok')} {renderPlatformIcon('twitter')} {renderPlatformIcon('facebook')} {renderPlatformIcon('instagram')}</h5>
              <div className="form-group">
                <label htmlFor="urlInput">URL</label>
                <input
                  type="text"
                  className="form-control mb-3"
                  id="urlInput"
                  value={url}
                  onChange={handleUrlChange}
                />
              </div>
              <button className="btn btn-dark" onClick={handleGetVideoInfo}>
                Get Video Info
              </button>
              {error && <div className="alert alert-danger mt-3">{error}</div>}
              {videoInfo && <VideoInfo videoInfo={videoInfo} />}
              
            </div>
            <div className='mb-3'>
            <center>Coded By <a href="https://github.com/Rizky21ID" style={{ color: "black" }}>Barox</a> ft. <a href="https://chat.openai.com/chat" style={{ color: "black" }}>OpenAI ChatGTP</a>.</center>
            <center>Backend Code API Using <a href="https://github.com/Sansekai/ssyoutube-api" style={{ color: "black" }}>Sansekai/ssyoutube-api {renderPlatformIcon('github')}</a></center>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoDownloader;