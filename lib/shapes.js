class Shape {
    constructor(data) {
        this.data = data;
    }

    generateShape(data) {
        let text = data.chars;
        let setTextColor = data.textColor;
        let shapeColor = data.shapeColor;
        this.text = text;
        this.setTextColor = setTextColor;
        this.shapeColor = shapeColor;
    }


    render() {
        return ``;
    }
};


class Circle extends Shape {
    constructor(data) {
        super(data);


    }
};

class Triangle extends Shape {
    constructor(text, textColor, shapeColor) {
        super(text, textColor, shapeColor);

    }
};

class Square extends Shape {
    constructor(data) {
        super(data)
    }
    generateShape(data) {
        let squareCode = `width="200" height="200" x="50" y="0"`;

        return `<svg width="300" height="200">

        <${data.element} ${squareCode} fill="${shapeColor}"

        <text font-size="72" font-weight="bold" x="85" y="125" fill="${setTextColor}">${text}</text>
        `
    }
}


module.exports = {
    Shape,
    Circle,
    Triangle,
    Square
}