import {Routes,Route,BrowserRouter} from 'react-router-dom';
import Home from './RickMorty/Home';
function RoutesWeb() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
        </Routes>
         
      </BrowserRouter>
    );
  }
  
  export default RoutesWeb;