import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { addToggle } from "../utils/sideBarSlice";
import { useDispatch } from "react-redux";

import { API_KEY } from "../utils/constans";
import CommentContainer from "./CommentContainer";
import LiveChats from "./LiveChats";

const Watch = () => {
  let [param, setParam] = useSearchParams();
  let dispatch = useDispatch();
  let data = param.get("v");

  let [dataById, setDataById] = useState(null);

  let fech = async () => {
    let data = await fetch(
      `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${param.get(
        "v"
      )}&key=` + API_KEY
    );

    let json = await data.json();

    setDataById(json.items[0]);
  };

  console.log(data);

  useEffect(() => {
    fech();
    dispatch(addToggle());
  }, []);

  if (!dataById) return;

  const { statistics } = dataById;
  const { snippet } = dataById;

  const { channelTitle, title, description } = snippet;
  const { likeCount, commentCount, viewCount } = statistics;
  return (
    <div className="w-full">
      <div className="flex ">
        <div className="">
          <iframe
            width="800"
            height="450"
            src={"https://www.youtube.com/embed/" + data + "?autoplay=1"}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
        <LiveChats />
      </div>
      <p className="mt-2 font-bold text-xl">{title}</p>

      <div className="flex justify-between mt-3 items-center w-8/12 ml-3">
        <div className="flex items-center">
          <div className="text-3xl">👤</div>
          <div className="flex-col items-center">
            <h1 className="font-bold text-lg">{channelTitle}</h1>
            <h1 className="">{viewCount / 100}K</h1>
          </div>
          <button className="bg-slate-300 mx-2 p-1 rounded-3xl px-3">
            Join
          </button>
          <button className="bg-slate-300 p-1 rounded-3xl">
            🔔Subscribed🔻
          </button>
        </div>

        <div className="flex">
          <button className="bg-slate-300  px-2 rounded-l-3xl">
            👍{likeCount / 100}K
          </button>
          <button className="bg-slate-300  px-2 rounded-r-3xl">👎</button>
          <button className="bg-slate-300 mx-2 px-4 rounded-3xl">Share</button>
          <button className="bg-slate-300 mx-2 p-1 rounded-3xl">⏬</button>
        </div>
      </div>

      <CommentContainer />
    </div>
  );
};

export default Watch;
