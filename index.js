const inquirer = require("inquirer");
const fs = require("fs");
const shapes = require("./lib/shapes");

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
        choices: [ //THIS SHOWS AS UNDEFINED!
            {
                shapeName: "circle",
                element: "circle",
            },
            {
                shapeName: "triangle",
                element: "polygon",
            },
            {
                shapeName: "square",
                element: "rect",
            }
        ],
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
        writeToFile("./examples/logo.svg", shapes.generateShape(response.element));//use the class methods here!
    });
}

init();