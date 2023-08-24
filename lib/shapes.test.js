const { Shape, Circle, Triangle, Square } = require("./shapes");


//Runs tests on our functions to make sure it passes.
describe("Shape", () => { //Creates a test suite
    describe("Circle", () => { //Description of our suite
        it("Should render a circle with given color", () => { //Followed by what we expect our function to require in order to pass
            const circle = new Circle();
            const color = circle.setColor("red");
            expect(circle.render()).toEqual(`<circle r="100" cx="150" cy="100" fill="${color}" />`);
        })
    })
});


describe("Shape", () => {
    describe("Triangle", () => {
        it("Should render a triangle with given color", () => {
            const triangle = new Triangle();
            const color = triangle.setColor("blue");
            expect(triangle.render()).toEqual(`<polygon fill="${color}" points="150,0 250,200 50,200" />`);
        })
    })
});

describe("Shape", () => {
    describe("Square", () => {
        it("Should render a square with given color", () => {
            const square = new Square();
            const color = square.setColor("green");
            expect(square.render()).toEqual(`<rect width="200" height="200" x="50" y="0" fill="${color}" />`);
        })
    })
});