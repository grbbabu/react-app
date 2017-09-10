import React, { Component } from "react";
import "./Button.css";

class Button extends Component {
    render () {
        return(
            <div class="Button-container">
                <button class="Button">{this.props.buttonLabel}</button>
            </div>
        );
    }
}

export default Button;