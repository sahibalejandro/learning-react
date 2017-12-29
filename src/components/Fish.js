import React from 'react';
import {formatPrice} from '../helpers';
import PropTypes from 'prop-types';

class Fish extends React.Component {
    static propTypes = {
        fishKey: PropTypes.string.isRequired,
        details: PropTypes.object.isRequired,
        onAddToOrder: PropTypes.func.isRequired
    }

    render() {
        const {fishKey, details, onAddToOrder} = this.props;
        const isAvailable = details.status === 'available';
        const buttonText = isAvailable ? 'Add to order' : 'Sold out!';

        return (
            <li className="menu-fish">
                <img src={details.image} alt={details.name} />
                <h3 className="fish-name">
                    {details.name}
                    <span className="price">{formatPrice(details.price)}</span>
                </h3>
                <p>{details.desc}</p>
                <button disabled={!isAvailable} onClick={() => onAddToOrder(fishKey)}>{buttonText}</button>
            </li>
        );
    }
}

export default Fish;
