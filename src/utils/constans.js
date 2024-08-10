export const headerSideBar = ["🏠Home", "▶️Sorts", "🎬Subscription"];

export const HEADER = [
  "You",
  "Subscription",
  "Explore",
  "More On Youtube",
  "Settings",
];

export const HEADER_DES = [
  {
    query1: "Your Channel",
    query2: "History",
    query3: "Play List",
    query4: "Your Video",
  },
  {
    query1: "Code With Harry",
    query2: "Akshay Saini",
    query3: "Apna College",
    query4: "Aaj Tak",
  },
  {
    query1: "Trending",
    query2: "Shopping",
    query3: "Music",
    query4: "Movie",
  },
  {
    query1: "Youtube Premium",
    query2: "Youtube Studio",
    query3: "Youtube Music",
    query4: "Youtube Kids",
  },
  {
    query1: "Help",
    query2: "Report History",
    query3: "Send FeedBack",
  },
];

export const MAIN_CONT_BUTTON = [
  "All",
  "News",
  "Java Script",
  "Data Structure",
  "React",
  "Music",
  "Computer Programming",
  "Gadgets",
  "Comedy",
  "Podcasts",
  "public Speaking, Gaming",
  "New To You",
];


let API_KEY = 'AIzaSyDjLMvTqWMf-FUV-v0tfLQeHqkU66MX1DE'

export let YOUTUBE_API = ' https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=' + API_KEY