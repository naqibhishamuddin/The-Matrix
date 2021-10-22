import React, {useState} from 'react';
import {MatrixInput} from './component';

export const MatrixInputScreen = ({navigation, route}) => {
  const {row, column} = route?.params;
  const [rowInput, setRowInput] = useState([]);
  const [loading, setIsLoading] = useState(false);
  let count;
  const calculateRegion = () => {};

  const onPressCalculate = () => {
    setIsLoading(true);
    sanitizeArray();
  };

  const sanitizeArray = () => {
    /** BEFORE PROCEED TO CALCULATION MAKE SURE IS CLEAN FROM UNDEFINED & NULL VALUE & IN CORRECT FORMAT */

    let sanitizedArray = [];

    /** Remove undefined and null value if exists */
    const a = rowInput.filter(Boolean);

    let i;

    /** SPLIT AND ENSURE THE NUMBER INSIDE ARRAY IS NUMBER TYPE NOT IN STRING TYPE */
    for (i = 0; i <= row; i++) {
      let rowValue = a[i];
      sanitizedArray.push(rowValue.split('').map(Number));
    }

    //setRowInput(sanitizeArray);
    visitArray(sanitizedArray);
  };
  const isSafe = (sanitizedArray, rowie, colie, visited) => {
    // row number is in range, column number is in
    // range and value is 1 and not yet visited
    return (
      rowie >= 0 &&
      rowie < row &&
      colie >= 0 &&
      colie < row &&
      sanitizedArray[rowie][colie] === 1 &&
      !visited[rowie][colie]
    );
  };

  const DFS = (sanitizedArray, rowie, colie, visited) => {
    // These arrays are used to get row and column
    // numbers of 8 neighbours of a given cell
    let rowNbr = [-1, -1, -1, 0, 0, 1, 1, 1];
    let colNbr = [-1, 0, 1, -1, 1, -1, 0, 1];

    // Mark this cell as visited
    visited[rowie][colie] = true;

    // Recur for all connected neighbours
    for (let k = 0; k < 8; k++) {
      if (
        isSafe(sanitizedArray, rowie + rowNbr[k], colie + colNbr[k], visited)
      ) {
        // increment region length by one
        count++;
        DFS(sanitizedArray, rowie + rowNbr[k], colie + colNbr[k], visited);
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
    console.log('Result is 🚀 : ', result);
  };

  const onChangeText = matrixNumber => {
    let a = [...rowInput];
    a[matrixNumber.customKey] = matrixNumber.value;
    setRowInput(a);
  };

  const props = {
    onPressCalculate,
    onChangeText,
    loading,
    row,
    column,
    rowInput,
  };

  return <MatrixInput {...props} />;
};