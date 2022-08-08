import './App.css';
import { CreateTable } from './Components/CreateTable';
import { HomePageHeader } from './Components/HomePageHeader';
import { Footer } from './Components/Footer';

function App() {
  return (
    <div className="App">
    <HomePageHeader/>
   <CreateTable/>
   <Footer/>
  </div>
  );
}

export default App;
