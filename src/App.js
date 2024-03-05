import { Outlet } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import { Provider } from "react-redux";
import appStore from "./utils/redux/appStor";

function App() {
  // const [user, setUser] = useState(null);
  // useEffect(()=>
  // {
  //   const data = {
  //     name: 'jack',
  //   }
  //   setUser(data.name);
  // },[])
  return (
    <div className='App'>
      <Provider store={appStore}>
        {/* <userContext.Provider value={{loggedIn : use}}> */}
        <Header />
        <Outlet />
        {/* </userContext.Provider> */}
      </Provider>
    </div>
  );
}

export default App;
