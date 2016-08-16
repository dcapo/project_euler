const fs = require('fs');
const Sudoku = require('./Sudoku');
const GRID_SIZE = require('./Constants').GRID_SIZE;

module.exports = class SudokuParser {
    static parse(file) {
        let contents = fs.readFileSync(file).toString();
        let gridStrings = contents.split(/Grid \d+\n/).slice(1);
        let puzzles = [];
        for (let i = 0; i < gridStrings.length; i++) {
            let grid = [];
            let rowStrings = gridStrings[i].split(/\n/).slice(0, GRID_SIZE);
            for (let j = 0; j < rowStrings.length; j++) {
                let colStrings = rowStrings[j].split("");
                grid[j] = [];
                for (let k = 0; k < colStrings.length; k++) {
                    grid[j][k] = parseInt(colStrings[k]);
                }
            }
            puzzles.push(new Sudoku(grid));
        }
        return puzzles;
    }
}
