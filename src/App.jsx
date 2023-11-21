import "./App.css"; // Import your Tailwind CSS styles
import Button from "./components/Button";
import Checkbox from "./components/Checkbox";
import Checkbox2 from './components/Checkbox2'

const App = () => {
  return (
    <div className="bg-white dark:bg-slate-900 dark:text-slate-200 h-screen px-12 pt-20">
      <Button />
      <br />
      <br />
      <Checkbox />
      <br /><br />
      <Checkbox2/>
    </div>
  );
};

export default App;
