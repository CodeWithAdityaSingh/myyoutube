import { Provider } from "react-redux";
import Main from "./components/Main";
import appstore from "./utils/appStore";

function App() {
  return (
    <div className="App w-screen">

 <Provider store={appstore}>
    <Main/>
 </Provider>
    
    </div>
  );
}

export default App;
