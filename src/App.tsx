import React from "react";
import { Provider } from "react-redux";

import Routes from "App/routes";
import store from "Store";

const App = () => {
  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  )
}

export default App;