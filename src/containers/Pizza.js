import React, { Component } from 'react';

import { PizzaImage } from "../components/Pizzaimage/Pizzaimage";

class Pizza extends Component {
    state = {  }
    render() {
        return (
            <div>
                <h1>The Pizza</h1>
                <PizzaImage />
            </div>
        );
    }
}

export default Pizza;