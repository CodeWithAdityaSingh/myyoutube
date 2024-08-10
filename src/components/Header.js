import { useDispatch } from "react-redux";
import { addToggle } from "../utils/sideBarSlice";
import { useEffect, useRef, useState } from "react";



let Header = () => {
  let dispatch = useDispatch();
  // let suggestion =  useRef('')

//   let selector2 = useSelector((store)=>store.sidebar.theme)

  let [storeSuggestion, setstoreSuggestion] = useState([]);
  let [suggestion, setsuggestion] = useState("");

 

  let fech = async () => {
    let data = await fetch(
      "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=" +
        suggestion
    );

    let json = await data.json();

    setstoreSuggestion(json[1]);
  };

  useEffect(() => {
   setTimeout(()=>{
     fech()
  },)


 
  }, [suggestion]);

  return (
    <div className="header flex items-center justify-between px-6  py-2 w-screen  shadow-md"  >
      <div className="flex items-center   ">
        <img
          className="w-20 cursor-pointer h-12"
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
        <div className=" absolute  ">
          <input 
            value={suggestion}
            className="rounded-l-full border h-10 p-6 shadow w-96   "
            type="text"
            placeholder="Search"
            onChange={(e) => {
              setsuggestion(e.target.value);
            }}
          ></input>
          <button className="bg-slate-300  rounded-r-full p-3">🔎</button>

          {storeSuggestion.map((item) => (
            <div className="bg-rose-50 bg-opacity-80 p-2 rounded-sm font-bold">{item}</div>
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
