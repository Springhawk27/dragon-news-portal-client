import './App.css';
import { RouterProvider } from 'react-router-dom';
import { routes } from './Routes/Routes/Routes';
import Main from './layout/Main';

function App() {
  return (
    <div className="">
      <RouterProvider router={routes}>
        <Main></Main>
      </RouterProvider>
    </div>
  );
}

export default App;
