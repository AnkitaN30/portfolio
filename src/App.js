  import './App.css';

import { BrowserRouter,Routes,Route } from "react-router-dom";
import  About  from './pages/About/About';
import NavigationBar from './components/NavigationBar/NavigationBar';
import Home from './pages/Home/Home';

function App() {
  return (
    <BrowserRouter>
    <NavigationBar/>
      <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
      </Routes>
      </BrowserRouter>
  );
}

export default App;
