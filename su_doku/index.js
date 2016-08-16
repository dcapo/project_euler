const path = require('path');
const Sudoku = require('./Sudoku');
const SudokuParser = require('./SudokuParser');

let file = path.join(__dirname, '50_puzzles.txt'),
    puzzles = SudokuParser.parse(file),
    sum = 0;

for (let i = 0; i < puzzles.length; i++) {
    let isSolution = puzzles[i].solve(),
        solution = puzzles[i].grid;
    if (!isSolution) {
        console.log("No solution found for puzzle: " + puzzles[i]);
        continue;
    }
    let upperLeft = solution[0][0] * 100 + solution[0][1] * 10 + solution[0][2];
    sum += upperLeft;
}

console.log(sum);

