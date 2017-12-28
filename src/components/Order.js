import React from 'react';
import {formatPrice} from '../helpers';
import {CSSTransitionGroup} from 'react-transition-group';

class Order extends React.Component {
    constructor(props) {
        super(props);
        this.renderOrder = this.renderOrder.bind(this);
    }

    renderOrder(key) {
        const fish = this.props.fishes[key];
        const count = this.props.order[key];
        const removebutton = <button onClick={e => this.props.onDeleteOrder(key)}>&times;</button>

        if (!fish || fish.status === 'unavailable') {
            return (
                <li key={key}>
                    Sorry, {fish ? fish.name : 'This fish'} is no longer available!
                    {removebutton}
                </li>
            );
        }

        return (
            <li key={key}>
                <span>
                    <CSSTransitionGroup
                        component="span"
                        className="count"
                        transitionName="count"
                        transitionEnterTimeout="250"
                        transitionLeaveTimeout="250"
                    >
                        <span key={count}>{count}</span>
                    </CSSTransitionGroup>
                    <span>lbs {fish.name}</span>
                </span>
                <span className="price">{formatPrice(fish.price * count)}</span>
                {removebutton}
            </li>
        );
    }

    render() {
        const orderIds = Object.keys(this.props.order);

        const total = orderIds.reduce((total, key) => {
            const fish = this.props.fishes[key];
            const count = this.props.order[key];
            // Some fishes exists in the order, but they may not be available.
            const isAvailable = fish && fish.status === 'available';

            return total += isAvailable ? count * fish.price : 0;
        }, 0);

        return (
            <div className="order-wrap">
                <h2>Your order</h2>
                <CSSTransitionGroup
                    component="ul"
                    className="order"
                    transitionName="order"
                    transitionEnterTimeout={500}
                    transitionLeaveTimeout={500}
                >
                    {orderIds.map(this.renderOrder)}
                    <li className="total">
                        <strong>Total:</strong>
                        {formatPrice(total)}
                    </li>
                </CSSTransitionGroup>
            </div>
        );
    }
}

export default Order;
