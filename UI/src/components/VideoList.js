import axios from "axios";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import "../index.css";

const VideoList = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    let apiUrl = `${process.env.REACT_APP_BASE}/api/videos`;
    axios
      .get(apiUrl)
      .then((res) => {
        setData([...res.data]);
      })
      .catch((error) => {});
  }, []);

  return (
    <div className="flex flex-wrap justify-center items-center gap-x-4 gap-y-2">
      {data !== null &&
        data.map((res) => {
          return (
            <Link
              to={`/${res.videoID}`}
              key={res._id}
              className="card glass w-96 bg-base-100 shadow-xl"
            >
              <figure>
                <img src={res.urlImageThumbnail} alt="Shoes" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{res.titleImageThumbnail}</h2>
              </div>
            </Link>
          );
        })}
    </div>
  );
};

export default VideoList;
