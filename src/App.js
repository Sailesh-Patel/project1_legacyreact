import './App.css';
import ItemManager from './components/Items/ItemManager';
import ItemCreate from './components/Items/ItemCreate';
import ItemGet from './components/Items/ItemGet';

function App() {
  return (
    <div>
    <div>
      <h1>Main</h1>
    </div>
    <div>
{/* <ItemManager /> */}
{/* <ItemCreate /> */}
<ItemCreate />
    </div>
    </div>
  );
}

export default App;
