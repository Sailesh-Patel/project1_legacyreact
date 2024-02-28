import PropTypes from 'prop-types';
import ItemCreate from "./ItemCreate";
import ItemGet from "./ItemGet";

function ItemManager(props) {
    
    return (   
        <tr>
            <td>{props.name}</td>
            <td>{props.price}</td>
            <td>{props.quantity}</td>
        </tr>
    );
    }

    ItemManager.propTypes = {
        name: PropTypes.string,
        price: PropTypes.string,
        quantity: PropTypes.string,
    }
export default ItemManager;