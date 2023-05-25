import MyRoute from "./1.4MyRoute";
import './App.css'
// import cartReducer from "./redux/reducer/cartReducer";
// import { createStore } from "redux";
// createStore is uded to provide information for compiler that our reducer is a store 
import { Provider } from "react-redux";
//provider is used to provide data from reducer to components
import dataStore from "./store";

const App=()=> {
  // const reducerData =createStore (cartReducer)

  return (

    <Provider store={dataStore}>
    <MyRoute/>
    </Provider>
  );
}

export default App;
