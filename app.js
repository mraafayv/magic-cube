
let input = 9;
let requiredResult = [];


//creates an array according to the size provided by the user
for (let size = 0; size < input; size++) {
    requiredResult.push(Array());

}


let number = 1;

//determines the middle point to start the insertion from
let middle = (requiredResult.length - 1) / 2;


let i = 0;
let j = middle;

// console.log(i,j);

requiredResult[i][j] = number;
number++;

//inserts the numbers into the cube according to the given size
for (let k = 0; k < input ** 2 - 1; k++) {

    let prevRow = i;
    let prevCol = j;

    if (i === 0) {
        i += (input - 1);
    }
    else {
        i -= 1;
    }


    if (j === input - 1) {
        j -= (input - 1);
    }
    else {
        j += 1;
    }
    // console.log(i,j);


    //checks if there is a number present at the location or not
    if (typeof requiredResult[i][j] === 'undefined') {
        requiredResult[i][j] = number;
        number++;
    }
    else {
        i = prevRow;
        j = prevCol;
        i++;
        requiredResult[i][j] = number;
        number++;
    }

    // console.log(i,j);

}

console.table(requiredResult)



//Checking sum of row for verifying the result
let sum = 0;
for (let x = 0; x < input; x++) {
    sum += requiredResult[0][x];

}

console.log("Sum: " +sum);