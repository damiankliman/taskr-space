import { Route, Routes } from 'react-router-dom';

import NewSpacePage from './pages/NewSpace';
import TaskSpacePage from './pages/TaskSpace';

import './index.css';

function App() {
  return <div>
    <Routes>
      <Route path='/' element={<NewSpacePage />} />
      <Route path='/tasks' element={<TaskSpacePage />} />
    </Routes>
  </div>;
}

export default App;
