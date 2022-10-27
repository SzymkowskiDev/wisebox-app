import "./App.css";
import MainLayout from "./layouts/MainLayout";
import Dashboard from "./pages/dashboard/Dashboard";

import "./styles/typography.scss";
import "./styles/variables.scss";

function App() {
  return (
    <div className="App">
      <MainLayout>
        <Dashboard />
      </MainLayout>
    </div>
  );
}

export default App;
