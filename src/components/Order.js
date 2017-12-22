import React from 'react';
import {formatPrice} from '../helpers';

class Order extends React.Component {
    constructor(props) {
        super(props);
        this.renderOrder = this.renderOrder.bind(this);
    }

    renderOrder(key) {
        const fish = this.props.fishes[key];
        const count = this.props.order[key];

        if (!fish || fish.status === 'unavailable') {
            return (
                <li key={key}>
                    Sorry, {fish ? fish.name : 'This fish'} is no longer available!
                </li>
            );
        }

        return (
            <li key={key}>
                <span>{count}lbs {fish.name}</span>
                <span className="price">{formatPrice(fish.price * count)}</span>
            </li>
        );
    }

    render() {
        const orderIds = Object.keys(this.props.order);

        const total = orderIds.reduce((total, key) => {
            const fish = this.props.fishes[key];
            const count = this.props.order[key];
            // The fish could be on the order but not in the catalog.
            const isAvailable = fish && fish.status === 'available';

            return total += isAvailable ? count * fish.price : 0;
        }, 0);

        return (
            <div className="order-wrap">
                <h2>Your order</h2>
                <ul className="order">
                    {orderIds.map(this.renderOrder)}
                    <li className="total">
                        <strong>Total:</strong>
                        {formatPrice(total)}
                    </li>
                </ul>
            </div>
        );
    }
}

export default Order;
