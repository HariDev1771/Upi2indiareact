import { BrowserRouter,Routes,Route  } from 'react-router-dom';
import './App.css';
import Addtobasketpage from './components/Addtobasketpage';
import IndividualOccasionpage from './components/IndividualOccasionpage';
import Mainpage from './components/Mainpage';
import Occassionpage from './components/Occassionpage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="" element={<Mainpage/>}/>
        <Route path="/occasion" element={<Occassionpage/>}/>
        <Route path="/occasioncard" element={<IndividualOccasionpage/>}/>
        <Route path="/addtobasket" element={<Addtobasketpage/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
