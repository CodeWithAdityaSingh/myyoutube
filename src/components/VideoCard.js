
const VideoCard = ({data}) => {

  
  const{snippet} = data

  const {statistics} = data

   


 const{description,channelTitle,title,thumbnails} = snippet


 const{url} = thumbnails.high

 const{likeCount,viewCount} = statistics
  
  
  return (
    <div className='m-3  w-72  rounded-md p-4 text-left'>
     <div><img className='rounded-2xl' alt='thumbnail' src={url}></img></div>
     {/* <h1>{description}</h1> */}
     <h3 className='font-bold'>{title}</h3>
    <div className='flex justify-between text-sm '>
    <span>{Number(likeCount/100).toFixed()}K likes</span>
    <span>{viewCount/100}K Views</span>
    </div>
    </div>
  )
}

export default VideoCard
