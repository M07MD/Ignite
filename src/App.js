// import global styles
import GlobalStyles from "./GlobaleStyle";

const { default: Home } = require("./pages/Home");

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <Home />
    </div>
  );
}

export default App;
