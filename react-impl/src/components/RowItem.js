import React, { Component } from 'react';
import './RowItem.css';

class RowItem extends Component {
    constructor() {
        super();
        this.state = {
            content: this.randomContent()
        };
        this.style.backgroundColor = this.generateColor();
        this.size = this.getRandomSize();
    }

    render() {
        return (
            <div className="row-item" style={ this.style }>{ this.state.content }</div>
        );
    }

    size = this.getRandomSize();

    style = {
        backgroundColor: this.generateColor(),
        height: this.size,
        width: this.size
    };

    update() {
        this.setState({ content: this.randomContent() });
        var clone = Object.assign({}, this.style);
        this.style = clone;
        this.style.backgroundColor = this.generateColor();
        this.size = this.getRandomSize();
    }

    updateSome() {
        var rand = Math.floor((Math.random() * 5) + 1);
        if (rand === 5) {
            this.update();
        }
    }

    randomContent() {
        let chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        let stringLength = 1;
        let content = "";
        for (var i = 0; i < stringLength; ++i) {
            content += chars.charAt(Math.floor(Math.random() * chars.length));
        }
        return content;
    }

    getRandomSize() {
        return Math.floor((Math.random() * 6) + 1) + 13 + "px";
    }

    generateColor() {
        var color = this.generateRandomColor(256, 256, 256);
        return color;
    }

    // http://stackoverflow.com/a/43235
    // http://stackoverflow.com/a/5624139
    generateRandomColor(inRed, inGreen, inBlue) {
        var red = Math.floor(Math.random() * 256);
        var green = Math.floor(Math.random() * 256);
        var blue = Math.floor(Math.random() * 256);

        // mix the color
        if (inRed && inGreen && inBlue) {
            red = Math.floor((red + inRed) / 2);
            green = Math.floor((green + inGreen) / 2);
            blue = Math.floor((blue + inBlue) / 2);
        }
        return "#" + ((1 << 24) + (red << 16) + (green << 8) + blue).toString(16).slice(1);
    }
}

export default RowItem;