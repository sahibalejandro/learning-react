import React from 'react';
import AddFishForm from './AddFishForm';

class Inventory extends React.Component {
    constructor(props) {
        super(props);

        this.renderInventory = this.renderInventory.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e, key) {
        const updatedFish = {
            ...this.props.fishes[key],
            [e.target.name]: e.target.value
        };

        this.props.onUpdateFish(key, updatedFish);
    }

    renderInventory(key) {
        const fish = this.props.fishes[key];

        return (
            <div className="fish-edit" key={key}>
                <input type="text" name="name" value={fish.name} onChange={e => this.handleChange(e, key)} placeholder="Fish name"/>
                <input  type="text" name="price" value={fish.price} onChange={e => this.handleChange(e, key)} placeholder="Fish price"/>
                <select name="status" value={fish.status} onChange={e => this.handleChange(e, key)}>
                    <option value="available">Fresh!</option>
                    <option value="unavailable">Sold out!</option>
                </select>
                <textarea name="desc" value={fish.desc} onChange={e => this.handleChange(e, key)} placeholder="Description"></textarea>
                <input type="text" name="image" value={fish.image} onChange={e => this.handleChange(e, key)} placeholder="Fish image URL"/>
                <button onClick={e => this.props.onDeleteFish(key)}>Remove Fish</button>
            </div>
        );
    }

    render() {
        return (
            <div>
                <h2>Inventory</h2>
                {Object.keys(this.props.fishes).map(this.renderInventory)}
                <AddFishForm onAddFish={this.props.onAddFish}/>
                <button onClick={this.props.onLoadSampleFishes}>Load sample fishes</button>
            </div>
        );
    }
}

export default Inventory;
