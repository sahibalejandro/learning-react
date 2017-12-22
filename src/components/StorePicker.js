import React from 'react';
import { Redirect } from 'react-router-dom';

class StorePicker extends React.Component {
    state = {redirect: null}

    goToStore = e => {
        e.preventDefault();
        this.setState({redirect: `/store/${this.storeName.value}`});
    }

    render() {
        if (this.state.redirect) {
            return <Redirect to={this.state.redirect} push={true} />;
        }

        return (
            <form className="store-selector" onSubmit={this.goToStore}>
                <h2>Please enter a store</h2>
                <input type="text" defaultValue="store-name" ref={input => this.storeName = input} required placeholder="Store name"/>
                <button type="submit">Visit store</button>
            </form>
        );
    }
}

export default StorePicker;