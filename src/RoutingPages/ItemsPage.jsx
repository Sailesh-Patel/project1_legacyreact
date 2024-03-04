import ItemGet from '../components/Items/ItemGet'
import ItemCreate from '../components/Items/ItemCreate'

function ItemsPage() {
    return ( 
        <div>
            <h1>Items</h1>
            <ItemCreate />
            <ItemGet />

        </div>
     );
}

export default ItemsPage;