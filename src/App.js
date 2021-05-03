import "./App.css";
import ReduxOne from "./components/ReduxOne";
import { Provider } from "react-redux";
import store from "./redux/store";
import ReduxTwo from "./components/ReduxTwo";
import ReduxThree from "./components/ReduxThree";
import ReduxFour from "./components/ReduxFour";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        {/* <ReduxTwo /> */}
        <ReduxOne />
        <ReduxThree />
        <ReduxFour />
      </div>
    </Provider>
  );
}

export default App;
