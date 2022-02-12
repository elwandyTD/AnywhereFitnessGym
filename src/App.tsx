import React from "react";
import { NativeBaseProvider } from "native-base";
import { Provider } from "react-redux";

import Navigation from "./navigation";
import store from "./redux/store";

const App = () => {
  return (
    <Provider store={store}>
      <NativeBaseProvider>
        <Navigation />
      </NativeBaseProvider>
    </Provider>
  )
}

export default App;