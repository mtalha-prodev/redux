import "./App.css";
import ReduxOne from "./components/ReduxOne";
import { Provider } from "react-redux";
import store from "./redux/store";
import ReduxTwo from "./components/ReduxTwo";
import ReduxThree from "./components/ReduxThree";
import ReduxFour from "./components/ReduxFour";
import UserContainer from "./components/UserContainer";
import UserContainerTwo from "./components/UserContainerTwo";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        {/* <ReduxTwo /> */}
        {/* <ReduxOne />
        <ReduxThree />
        <ReduxFour /> */}

        {/* <UserContainer /> */}
        <UserContainerTwo/>
      </div>
    </Provider>
  );
}

export default App;
