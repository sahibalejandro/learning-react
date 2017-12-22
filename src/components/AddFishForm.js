import React from 'react';

export default class AddFishForm extends React.Component {

    handleSubmit(e) {
        e.preventDefault();
        const fish = {
            name: this.name.value,
            price: this.price.value,
            status: this.status.value,
            desc: this.desc.value,
            image: this.image.value,
        };

        this.props.onAddFish(fish);
        this.form.reset();
    }

    render() {
        return (
            <form ref={form => this.form = form} className="fish-edit" onSubmit={this.handleSubmit.bind(this)}>
                <input ref={input => this.name = input} type="text" placeholder="Fish name"/>
                <input ref={input => this.price = input} type="text" placeholder="Fish price"/>
                <select ref={input => this.status = input}>
                    <option value="available">Fresh!</option>
                    <option value="unavailable">Sold out!</option>
                </select>
                <textarea ref={input => this.desc = input} placeholder="Description"></textarea>
                <input ref={input => this.image = input} type="text" placeholder="Fish image URL"/>
                <button type="submit">+ Add Item</button>
            </form>
        );
    }
}