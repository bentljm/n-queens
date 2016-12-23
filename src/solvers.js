/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other


window.findNRooksSolution = function(n) {
  var board = new Board({n: n});
  var solution;

  var findSolution = function(row) {
    if (row === n) {
      return solution = board.rows();
    }
    for (var column = 0; column < n; column++) {
      board.togglePiece(row, column);
      if (!board.hasAnyRooksConflicts()) {
        findSolution(row + 1);
      } else {
        board.togglePiece(row, column);
      }
    }
  };
  findSolution(0);

  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  return solution;
};



// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  var board = new Board({n: n});
  var solutionCount = 0;

  var findSolution = function(row, column) {
    if (row === n) {
      return solutionCount++;
    }
    for (var column = 0; column < n; column++) {
      board.togglePiece(row, column);
      if (!board.hasAnyRooksConflicts()) {
        findSolution(row + 1);
      }

      board.togglePiece(row, column);

    }
  };
  findSolution(0);

  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};



// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var board = new Board({n: n});
  var solution = board.rows();
  var countQueens = 0;

  var findSolution = function(row) {
    if (row === n) {
      return board.rows();

    }
    for (var column = 0; column < n; column++) {
      board.togglePiece(row, column);
      countQueens++;
      if (!board.hasAnyQueensConflicts()) {
        findSolution(row + 1);
      }
      if (countQueens === n && !board.hasAnyQueensConflicts()) {
        return;
      } else {
        board.togglePiece(row, column);
        countQueens--;
      }
    }
  };
  findSolution(0);

  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;
};


// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var board = new Board({n: n });
  var solutionCount = 0;

  var findSolution = function(row, column) {
    if (row === n) {
      return solutionCount++;
    }
    for (var column = 0; column < n; column++) {
      board.togglePiece(row, column);
      if (!board.hasAnyQueensConflicts()) {
        findSolution(row + 1);
      }
      board.togglePiece(row, column);
      //what happens if there's no where on a specific row to put a queen?
      //we have to somehow iterate to the next row anyways/backtrack
      //number of queens MUST equal to 'n' in order to count as a solution
      //so if we have a board that only has 3 queens on it, we have to backtrack and go to the next
      //column to see/find a solution with 4 queens on it.
      //A 4x4 MATRIX ONLY HAS 2 POSSIBLE SOLUTIONS
    }
  };
  findSolution(0);

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
