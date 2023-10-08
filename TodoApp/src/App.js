
import './App.css';
import Addtodo from './component/Addtodo';
import Heading from './component/Heading';

import Todolist from './component/Todolist';

function App() {
  return (
    <div className="App">
      <Heading />
      <Addtodo />
      <Todolist />
      
    </div>
  );
}

export default App;
