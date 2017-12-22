import React from 'react';
import Header from './components/Header';
import Order from './components/Order';
import Inventory from './components/Inventory';
import Fish from './components/Fish';
import sampleFishes from './sample-fishes';
import rebase from './rebase';

class App extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            fishes: {},
            order: {}
        };

        this.handleAddFish = this.handleAddFish.bind(this);
        this.handleLoadSampleFishes = this.handleLoadSampleFishes.bind(this);
        this.handleAddToOrder = this.handleAddToOrder.bind(this);
    }

    componentWillMount() {
        // Sync state with firebase using re-base. what a cool is this!
        rebase.syncState(`${this.props.match.params.storeId}/fishes`, {
            context: this,
            state: 'fishes'
        });

        // Read order from local storage
        const localOrder = localStorage.getItem(`order-${this.props.match.params.storeId}`);
        if (localOrder) {
            this.setState({order: JSON.parse(localOrder)});
        }
    }

    componentWillUpdate(nextProps, nextState) {
        // Update local storage when props/state changes.
        localStorage.setItem(
            `order-${this.props.match.params.storeId}`,
            JSON.stringify(nextState.order)
        );
    }

    handleAddFish(fish) {
        const fishes = {...this.state.fishes};
        const timestamp = Date.now();
        fishes[`fish-${timestamp}`] = fish;

        this.setState({fishes});
    }

    handleLoadSampleFishes(e) {
        e.preventDefault();
        this.setState({fishes: sampleFishes});
    }

    handleAddToOrder(key) {
        const order = {...this.state.order};
        order[key] = order[key] + 1 || 1;
        this.setState({order});
    }

    render() {
        const fishes = Object.keys(this.state.fishes).map(
            key => (
                <Fish key={key}
                    fishKey={key}
                    details={this.state.fishes[key]}
                    onAddToOrder={this.handleAddToOrder} />
            )
        );

        return (
            <div className="catch-of-the-day">
                <div className="menu">
                    <Header tagline="Fresh Seafood Market" />
                    <ul className="list-of-fishes">{fishes}</ul>
                </div>
                <Order fishes={this.state.fishes} order={this.state.order} />
                <Inventory onLoadSampleFishes={this.handleLoadSampleFishes} onAddFish={this.handleAddFish}/>
            </div>
        );
    }
}

export default App;
