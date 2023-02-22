import React from 'react';

interface VideoInfoProps {
  videoInfo: any;
}

const VideoInfo: React.FC<VideoInfoProps> = ({ videoInfo }) => {
  const dataResult = videoInfo.result;
  const dataStatus = videoInfo.status;
  // console.log("dataResult: ", dataResult.url[0].url);
  return (
    <div className="card mt-3">
      {dataStatus === false && <h4 className="card-title mb-3 mt-3">Video Not Found/URL Broken</h4>}
      {dataStatus === true && <img src={dataResult.thumb} className="card-img-top mt-3"  alt={videoInfo.title} style={{  display: "block", marginLeft: "auto", marginRight: "auto", width: "50%"}} />}
      {dataStatus === true && <div className="card-body">
        <h4 className="card-title">{dataResult.meta.title}</h4>
        <a href={dataResult.url[0].url} download className="btn btn-dark">
          Download Video
        </a>
      </div>}
    </div>
  );
};

export default VideoInfo;