import "./App.css";
import MainLayout from "./layouts/MainLayout";
import HelloWorld from "./shared/HelloWorld";

import "./styles/typography.scss";
import "./styles/variables.scss";

function App() {
  return (
    <div className="App">
      <MainLayout>
        <HelloWorld />
        <HelloWorld />
      </MainLayout>
    </div>
  );
}

export default App;
