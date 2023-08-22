const { Shape, Circle, Triangle, Square } = require("./shapes");

describe("Shape", () => {
    describe("Circle", () => {
        it("Should render a circle with given color", () => {
            const shape = new Circle();
            shape.setColor("red");
            expect(shape.render()).toEqual(`<circle r="100" cx="150" cy="100" fill="red" />`);
        })
    })
});


describe("Shape", () => {
    describe("Triangle", () => {
        it("Should render a triangle with given color", () => {
            const shape = new Triangle();
            shape.setColor = ("blue");
            expect(shape.render()).toEqual(`<polygon fill="${shape.setColor}" points="150,0 250,200 50,200" />`);
        })
    })
});

describe("Shape", () => {
    describe("Square", () => {
        it("Should render a square with given color", () => {
            const shape = new Square();
            shape.setColor = ("green");
            expect(shape.render()).toEqual(`<rect width="200" height="200" x="50" y="0" fill="${shape.setColor}" />`);
        })
    })
});