import { Provider } from "react-redux";
import store from "./store/store";
import HomePage from "./pages/HomePage/index";

const App = () => {
  return (
    <Provider store={store}>
      <HomePage />
    </Provider>
  );
};

export default App;