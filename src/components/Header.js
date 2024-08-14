import { useDispatch } from "react-redux";
import sideBarSlice, { addToggle } from "../utils/sideBarSlice";
import { useEffect, useRef, useState } from "react";
import { addSearch } from "../utils/searchSlice";



let Header = () => {
  let dispatch = useDispatch();
  // let suggestion =  useRef('')

//   let selector2 = useSelector((store)=>store.sidebar.theme)

  let [storeSuggestion, setstoreSuggestion] = useState([]);
  let [suggestion, setsuggestion] = useState("");
  let[showSuggestion,setShowSuggestion] = useState(false)
  let search = useRef(null)
  





 

  let fech = async () => {
    let data = await fetch(
      "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=" +
        suggestion
    );

    let json = await data.json();

    setstoreSuggestion(json[1]);
  };

  useEffect(() => {
  let data = setTimeout(()=>{
     fech()
  },200)


  return ()=>{
    clearTimeout(data)
  }
  
  }, [suggestion]);

  return (
    <div className="header flex items-center justify-between px-6  py-2 w-screen  shadow-md sticky top-0 bg-white"  >
      <div className="flex items-center   ">
        <img
          className="w-20 cursor-pointer h-12 "
          alt="hm"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgkDucqjsAw3xHF9p0Ltd1TocnHnlxM0T-4w&s"
          onClick={() => dispatch(addToggle())}
        ></img>
        <img
          className="w-44"
          alt="header-logo "
          src="https://cdn.mos.cms.futurecdn.net/8gzcr6RpGStvZFA2qRt4v6.jpg"
          
        ></img>
      </div>
      <div className="  -mt-10  flex justify-center  ">
        <div className=" absolute   ">
          <input 
            value={suggestion}
            className="rounded-l-full border h-10 p-6 shadow w-96   "
            type="text"
            placeholder="Search"
            onChange={(e) => {
              setsuggestion(e.target.value);
            }}
            onFocus={()=> setShowSuggestion(true)}
            onMouseEnter={()=> setShowSuggestion(true)}

            onMouseLeave={()=>{
              setShowSuggestion(false)
            }}
          ></input>
          <button className="bg-slate-300  rounded-r-full p-3">🔎</button>

          {showSuggestion&& storeSuggestion.map((item,index) => (

    
             

               <div ref={search} className="bg-rose-50 z-50 bg-opacity-80 p-2 rounded-sm font-bold cursor-pointer" onClick={(e)=>{

                dispatch(addSearch(item))
               }}
               
               onMouseEnter={()=>{
                setShowSuggestion(true)
               }}
               
               
               onMouseLeave={()=>{
                setShowSuggestion(false)
               }}>{item}</div>

         

          ))}
        </div>
      </div>
     <div className=" flex justify-end">
       
     <img  
        className="rounded-full w-14"
        alt="login-logo"
        src="https://yt3.ggpht.com/yti/ANjgQV8FSl6VWeFDpXp1KY4viNeKzQ3iy5X1GFPTH8KSPBDmzFs=s88-c-k-c0x00ffffff-no-rj"
      ></img>
     </div>
    </div>
  );
};

export default Header;
