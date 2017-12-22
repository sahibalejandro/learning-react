import React from 'react';
import AddFishForm from './AddFishForm';

class Inventory extends React.Component {
    render() {
        return (
            <div>
                <p>Inventory</p>
                <AddFishForm onAddFish={this.props.onAddFish}/>
                <button onClick={this.props.onLoadSampleFishes}>Load sample fishes</button>
            </div>
        );
    }
}

export default Inventory;
