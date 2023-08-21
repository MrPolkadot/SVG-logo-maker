const inquirer = require("inquirer");
const fs = require("fs");
const { Shape, Circle, Triangle, Square } = require("./lib/shapes");

const questions = [
    {
        type: "input",
        message: "Enter the character for your logo(Max: 3)",
        name: "chars",
    },
    {
        type: "input",
        message: "Enter a color keyword for the text-color( OR a hexadecimal number)",
        name: "textColor",
    },
    {
        type: "list",
        message: "Choose a shape for your logo",
        name: "shape",
        choices: ["circle", "triangle", "square"],

    },
    {
        type: "input",
        message: "Enter a color keyword for the shape's color(OR a hexadecimal number)",
        name: "shapeColor",
    }
];

function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (error) => {
        if (error) {
            return console.log(error);
        }
        console.log("Generated logo.svg")
    });
}

function init() {
    inquirer.prompt(questions).then((response) => {
        const { chars, textColor, shape, shapeColor } = response;
        if (shape === "circle") {
            const circle = new Circle(chars, textColor, shapeColor);
            circle.render();
            circle.setColor(shapeColor);
            writeToFile("./examples/logo.svg", circle.render());
        }
        if (shape === "triangle") {
            const triangle = new Triangle(chars, textColor, shapeColor);
            triangle.render();
            triangle.setColor(shapeColor);
            writeToFile("./examples/logo.svg", triangle.render());
        }
        if (shape === "square") {
            const square = new Square(chars, textColor, shapeColor);
            square.render();
            square.setColor(shapeColor);
            writeToFile("./examples/logo.svg", square.render());
        }



        //writeToFile("./examples/logo.svg", circle.render());//use the class methods here!
    });
}

init();