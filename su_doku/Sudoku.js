const GRID_SIZE = require('./Constants').GRID_SIZE;

class Coordinate {
    constructor(row, col) {
        this.row = row;
        this.col = col;
    }
}

module.exports = class Sudoku {
    constructor(grid) {
        this.grid = grid;
    }

    solve() {
        let emptyCell = this.getNextEmptyCell();

        if (!emptyCell) {
            return true;
        }

        for (let i = 1; i <= GRID_SIZE; i++) {
            if (this.isLegal(i, emptyCell)) {
                this.grid[emptyCell.row][emptyCell.col] = i;
                if (this.solve()) {
                    return true;
                } else {
                    this.grid[emptyCell.row][emptyCell.col] = 0;
                }
            }
        }

        return false;
    }

    isLegal(digit, coordinate) {
        return !(this.rowContains(coordinate.row, digit) ||
                 this.colContains(coordinate.col, digit) ||
                 this.subgridContains(coordinate, digit));
    }

    rowContains(row, digit) {
        for (let i = 0; i < GRID_SIZE; i++) {
            if (this.grid[row][i] === digit) {
                return true;
            }
        }
        return false;
    }

    colContains(col, digit) {
        for (let i = 0; i < GRID_SIZE; i++) {
            if (this.grid[i][col] === digit) {
                return true;
            }
        }
        return false;
    }

    subgridContains(coordinate, digit) {
        let subSize = GRID_SIZE / 3;
        let rowBase = subSize * Math.floor(coordinate.row / subSize);
        let colBase = subSize * Math.floor(coordinate.col / subSize);
        
        for (let row = rowBase; row < rowBase + subSize; row++) {
            for (let col = colBase; col < colBase + subSize; col++) {
                if (this.grid[row][col] === digit) {
                    return true;
                }
            }
        }

        return false;
    }

    isEmpty(cell) {
        return cell === 0;
    }

    getNextEmptyCell() {
        for (let row = 0; row < GRID_SIZE; row++) {
            for (let col = 0; col < GRID_SIZE; col++) {
                if (this.isEmpty(this.grid[row][col])) {
                    return new Coordinate(row, col);
                }
            }
        }
        return false;
    }
}
