import React, {useState} from 'react';
import {MatrixInput} from './component';

export const MatrixInputScreen = ({navigation, route}) => {
  const {row, column} = route?.params;
  const [rowInput, setRowInput] = useState([]);
  let count;

  const onPressCalculate = () => {
    sanitizeArray();
  };

  const sanitizeArray = () => {
    /** BEFORE PROCEED TO CALCULATION MAKE SURE IS CLEAN FROM UNDEFINED & NULL VALUE & IN CORRECT FORMAT */
    let sanitizedArray = [];

    /** Remove undefined and null value if exists */
    const a = rowInput.filter(Boolean);

    let i;

    /** SPLIT AND ENSURE THE NUMBER INSIDE ARRAY IS NUMBER TYPE NOT IN STRING TYPE */
    for (i = 0; i < row; i++) {
      let rowValue = a[i];
      sanitizedArray.push(rowValue.split('').map(Number));
    }

    /** PASS THE SANITIZED ARRAY FOR CALCULATION*/
    visitArray(sanitizedArray);
  };

  const isSafe = (sanitizedArray, rows, columns, visited) => {
    // row number is in range, column number is in
    // range and value is 1 and not yet visited
    return (
      rows >= 0 &&
      rows < row &&
      columns >= 0 &&
      columns < row &&
      sanitizedArray[rows][columns] === 1 &&
      !visited[rows][columns]
    );
  };

  const DFS = (sanitizedArray, rows, columns, visited) => {
    // These arrays are used to get row and column
    let rowNbr = [-1, -1, -1, 0, 0, 1, 1, 1];
    let colNbr = [-1, 0, 1, -1, 1, -1, 0, 1];

    // Mark this cell as visited
    visited[rows][columns] = true;

    // Recur for all connected neighbours
    for (let k = 0; k < 8; k++) {
      if (
        isSafe(sanitizedArray, rows + rowNbr[k], columns + colNbr[k], visited)
      ) {
        // increment region length by one
        count++;
        DFS(sanitizedArray, rows + rowNbr[k], columns + colNbr[k], visited);
      }
    }
  };

  const visitArray = sanitizedArray => {
    // Make a boolean array to mark visited cells.
    // Initially all cells are unvisited
    let visited = new Array(row);
    for (let i = 0; i < row; i++) {
      visited[i] = new Array(column);
      for (let j = 0; j < column; j++) {
        visited[i][j] = false;
      }
    }

    // Initialize result as 0 and traverse through the
    // all cells of given matrix
    let result = 0;
    for (let i = 0; i < row; i++) {
      for (let j = 0; j < column; j++) {
        // If a cell with value 1 is not
        if (sanitizedArray[i][j] === 1 && !visited[i][j]) {
          // visited yet, then new region found
          count = 1;
          DFS(sanitizedArray, i, j, visited);

          // maximum region
          result = Math.max(result, count);
        }
      }
    }

    const newResult = result;
    navigation.navigate('MatrixResult', {result: newResult});
  };

  const onChangeText = matrixNumber => {
    let a = [...rowInput];
    a[matrixNumber.customKey] = matrixNumber.value;
    setRowInput(a);
  };

  const props = {
    onPressCalculate,
    onChangeText,
    row,
    column,
    rowInput,
  };

  return <MatrixInput {...props} />;
};
