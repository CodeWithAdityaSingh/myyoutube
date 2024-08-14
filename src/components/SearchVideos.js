
import CommentContainer from "./CommentContainer";
import RightSidePlayList from "./RightSidePlayList";

let SearchVideos = ({ data }) => {


  const { snippet } = data;
  

  const { description, channelTitle, thumbnails, title } = snippet;

  const { url } = thumbnails.high;

  return (
   <div className="flex">

 <div className="flex  m-2 items-start flex-row w-9/12 p-4  cursor-pointer overflow-hidden  ">
      <div className="w-8/12  ">
        <img
          className="object-cover h-56 w-full rounded-xl "
          alt="video"
          src={url}
        ></img>
      </div>
      <div className="ml-3">
        <div className="font-bold text-xl ">{title}</div>
        <div className="font-semibold mt-6 my-2 text-lg">👤{channelTitle}</div>
        <p className="text-sm">{description}</p>
      </div>
    </div>

   
   </div>
  );
};

export default SearchVideos;
