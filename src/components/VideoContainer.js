import VideoCard from "./VideoCard";
import { MAIN_CONT_BUTTON, YOUTUBE_API } from "../utils/constans";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToggle } from "../utils/sideBarSlice";
import WatchPage2 from "./WatchPage2";
import { addVideoContainerData } from "../utils/searchSlice";

let VideoContainer = () => {
  let [videoId, setVideoID] = useState(null);

  let selector2 = useSelector((store)=> store.search.searchItems)

  let dispatch = useDispatch()
  let fech = async () => {
    let data = await fetch(YOUTUBE_API);

    let json = await data.json();

   
    setVideoID(json.items);

   
    dispatch(addVideoContainerData(json.items))
    
  };

  useEffect(() => {
    fech();
    dispatch(addToggle())

  }, []);

  if (!videoId) return;

  return selector2 ? <WatchPage2/> : (
    <div className="videoCard min-w-screen  mt-7">
      {MAIN_CONT_BUTTON.map((eactbutton) => {
        return (
          <span
            key={eactbutton}
            className="bg-amber-100 m-2 p-2 rounded-md cursor-pointer hover:text-white hover:bg-black hover:bg-opacity-50 hover:font-semibold"
          >
            {eactbutton}
          </span>
        );
      })}

      <div className="flex mt-7 flex-wrap">
        {videoId.map((elem) => (
          <Link  key={elem.id} to={'/watch?v=' + elem.id}><VideoCard  data = {elem} /></Link>
        ))}
      </div>
    </div>
  );
};

export default VideoContainer;
