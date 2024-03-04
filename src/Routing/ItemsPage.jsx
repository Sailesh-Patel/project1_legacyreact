import ItemGet from '../components/Items/ItemGet'
import ItemCreate from '../components/Items/ItemCreate'
import ItemCard from '../components/Items/ItemCard';

function ItemsPage() {
    return ( 
        <div>
            <h1>Items</h1>
            <ItemCreate />
            <ItemGet />
            <ItemCard />

        </div>
     );
}

export default ItemsPage;