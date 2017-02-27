// This file is for creating mazes with different size
generateMaze = function(x,y) {
    function maze(x,y) {
        var n=x*y-1;
        if (n<0) {alert("illegal maze dimensions");return;}
        var horiz =[]; for (var j= 0; j<x+1; j++) horiz[j]= [],
            verti =[]; for (var j= 0; j<x+1; j++) verti[j]= [],
            here = [Math.floor(Math.random()*x), Math.floor(Math.random()*y)],
            path = [here],
            unvisited = [];
        for (var j = 0; j<x+2; j++) {
            unvisited[j] = [];
            for (var k= 0; k<y+1; k++)
                unvisited[j].push(j>0 && j<x+1 && k>0 && (j != here[0]+1 || k != here[1]+1));
        }
        while (0<n) {
            var potential = [[here[0]+1, here[1]], [here[0],here[1]+1],
                [here[0]-1, here[1]], [here[0],here[1]-1]];
            var neighbors = [];
            for (var j = 0; j < 4; j++)
                if (unvisited[potential[j][0]+1][potential[j][1]+1])
                    neighbors.push(potential[j]);
            if (neighbors.length) {
                n = n-1;
                next= neighbors[Math.floor(Math.random()*neighbors.length)];
                unvisited[next[0]+1][next[1]+1]= false;
                if (next[0] == here[0])
                    horiz[next[0]][(next[1]+here[1]-1)/2]= true;
                else 
                    verti[(next[0]+here[0]-1)/2][next[1]]= true;
                path.push(here = next);
            } else 
                here = path.pop();
        }
        return {x: x, y: y, horiz: horiz, verti: verti};
    }

    function display(m) {
        var text= [];
        var box = [];
        for (var j= 0; j<m.x*2+1; j++) {
            var line= [];
            if (0 == j%2)
                for (var k=0; k<m.y*4+1; k++)
                    if (0 == k%4) 
                        line[k]= '+';
                    else
                        if (j>0 && m.verti[j/2-1][Math.floor(k/4)])
                            line[k]= ' ';
                        else
                            line[k]= '-';
            else
                for (var k=0; k<m.y*4+1; k++)
                    if (0 == k%4)
                        if (k>0 && m.horiz[(j-1)/2][k/4-1])
                            line[k]= ' ';
                        else
                            line[k]= '|';
                    else
                        line[k]= ' ';
            if (0 == j) line[1]= line[2]= line[3]= ' ';
            if (m.x*2-1 == j) line[4*m.y]= ' ';
            box.push(line);
            text.push(line.join('')+'\r\n');
        }
        return box;
    }
    return display(maze(x+2,y));
}


// To be used to find the solution for the maze:

var robotPaths = function(board) {
  var n = board.length;
  var m = board[0].length;

  var solutionBoard = null;
  var togglePiece = function(board, i, j) {
    if ( board[i][j] === '1' ) {

    } else if ( board[i][j] === '2' ) {
        solutionBoard = JSON.parse(JSON.stringify(board));
    } else if ( board[i][j] === ' ' ) {
        board[i][j] = '@';
    } else {
        board[i][j] = ' ';
    }
  };

  var isEmptySpace = function(board, i, j) {
    if ( board[i][j] === ' ' || board[i][j] === '2' ) {
        // solutionBoard = board.slice();
        return true;
    } else {
        return false;
    }
  };


  var findPath = function(newBoard, i = 0, j = 1, count = 0) {
    // console.log('newBoard " ', newBoard);
    togglePiece(newBoard,i,j);
    if ( !!solutionBoard ) {
        return; 
    }
    if ( i === n-1 && j === m-1 ) {
      return possiblePaths++;
    } 

    if ( i+1 < n ) {
      if ( isEmptySpace(newBoard, i+1, j)  && !solutionBoard ) {
        findPath(newBoard, i+1, j, count); 
        togglePiece(newBoard,i+1,j);      
      }
    }


    if ( j+1 < m ) {
      if ( isEmptySpace(newBoard, i, j+1) && !solutionBoard ) {
        findPath(newBoard, i, j+1, count);
        togglePiece(newBoard,i,j+1);
      }
    }
    
    if ( i-1 >= 0 ) {
      if ( isEmptySpace(newBoard, i-1, j) && !solutionBoard ) {
        findPath(newBoard, i-1, j, count);  
        togglePiece(newBoard,i-1,j);          
      }
    }

    if ( j-1 >= 0 ) {
      if ( isEmptySpace(newBoard, i, j-1) && !solutionBoard ) {
        findPath(newBoard, i, j-1, count);    
        togglePiece(newBoard,i,j-1);        
      }
    }
  };
  findPath(board);
  return solutionBoard;
};

var maze = generateMaze(10,10);
maze[0][1] = '1';
maze[maze.length-1][maze[0].length-1] = '2';
console.log(robotPaths(maze));
