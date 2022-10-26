import { RouterProvider } from 'react-router-dom';
import './App.css';
import Main from './outlet/Main';
import { routes } from './routes/Routes';

function App() {
  return (
    <div className="App">
      <RouterProvider router={routes}/>
  </div>
  );
}

export default App;
