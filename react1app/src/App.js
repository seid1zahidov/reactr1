import './App.css';
import Cartlist from './Components/Cartlist';
import Navbar from './Components/Navbar';

function App() {


  const users = [
    {
      id:1,
      name:'Said',
      salary:'800'
    },
    {
      id:2,
      name:'Nicat',
      salary:'799'
    },
    {
      id:3,
      name:'Metin',
      salary:'666'
    },
    {
      id:4,
      name:'Ilkin',
      salary:'6666'
    }
  ]
  return (
    
    <div className="main">  
          <Navbar />
          <Cartlist userlis = {users} />
    </div>
  );
}

export default App;
