//Parent class
class Shape {
    constructor(chars, textColor, logoColor) {
        this.chars = chars;
        this.textColor = textColor;
        this.logoColor = logoColor;
    }

    //Sets our shape color
    setColor(logoColor) {
        this.logoColor = logoColor;
        return logoColor;
    }


};

//Child classes that inherits arguments from the Shape class
class Circle extends Shape {
    constructor(chars, textColor) {
        super(chars, textColor);
    }

    //Sets the text element with our text color and character values from the input answers
    setText() {
        return `<text font-size="72" font-weight="bold" x="85" y="125" fill="${this.textColor}">${this.chars}</text>`;
    }


    //Sets the shape element with the shape color value from the input answers
    render() {


        return `<circle r="100" cx="150" cy="100" fill="${this.logoColor}" />`


    }

    createShape() {
        return `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">

        ${this.render()}

        ${this.setText()}
        
        </svg>`;
    }
};

class Triangle extends Shape {
    constructor(chars, textColor, logoColor) {
        super(chars, textColor, logoColor);
    }

    render() {
        return `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">
    
        <polygon fill="${this.logoColor}" points="150,0 250,200 50,200" />

        <text font-size="60" font-weight="bold" x="95" y="150" fill="${this.textColor}">${this.chars}
    </text>

        </svg>`
    }
};

class Square extends Shape {
    constructor(chars, textColor, logoColor) {
        super(chars, textColor, logoColor);
    }

    render() {
        return `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">

        <rect width="200" height="200" x="50" y="0" fill="${this.logoColor}" />
        
        <text font-size="72" font-weight="bold" x="85" y="125" fill="${this.textColor}">${this.chars}
        </text>
    
        </svg>`
    }
};


module.exports = { Shape, Circle, Triangle, Square };