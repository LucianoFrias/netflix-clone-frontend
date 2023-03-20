import './App.css';
import Navbar from './components/navbar/Navbar';
import Banner from './components/sections/header/Banner';
import RowsSection from './components/sections/rows/RowsSection';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <RowsSection />
    </div>
  );
}

export default App;
