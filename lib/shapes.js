//Parent class
class Shape {
    constructor(chars, textColor, logoColor) {
        this.chars = chars;
        this.textColor = textColor;
        this.logoColor = logoColor;
    }

    setColor(logoColor) {
        this.logoColor = logoColor;
        return logoColor;
    }

};

//Child classes that inherits arguments from the Shape class
class Circle extends Shape {
    constructor(chars, textColor, logoColor) {
        super(chars, textColor, logoColor);
    }

    setColor(logoColor) {
        this.logoColor = logoColor;
        return logoColor;
    }

    render() {
        return `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">

        <circle r="100" cx="150" cy="100" fill="${this.logoColor}" />

        <text font-size="72" font-weight="bold" x="85" y="125" fill="${this.textColor}">${this.chars}</text>

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