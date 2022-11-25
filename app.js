let input = 3;
let requiredResult = [];
let counter = 1;

let mainContainer = document.querySelector('.main-container');

//creates an array according to the size provided by the user
for (let size = 0; size < input; size++) {
    requiredResult.push(Array());
    let rows = document.createElement('div');
    rows.className = 'row';

    for (let j = 0; j < input; j++) {
        let square = document.createElement('div');
        square.className = 'square button-20';

        rows.append(square);

    }
    mainContainer.append(rows);
    // console.log(rows);
}
// mainContainer.append(square)



function placeNumbers() {


    let number = 1;

    //determines the middle point to start the insertion from
    let middle = (requiredResult.length - 1) / 2;


    let i = 0;
    let j = middle;

    // console.log(i,j);

    requiredResult[i][j] = number;
    mainContainer.children[i].children[j].innerText = number;
    
    number++;

    //inserts the numbers into the cube according to the given size
    for (let k = 0; k < input ** 2 - 1; k++) {
        setTimeout(() => {
            let prevRow = i;
            let prevCol = j;


            if (i === 0) {
                i += (input - 1);
            } else {
                i -= 1;
            }


            if (j === input - 1) {
                j -= (input - 1);
            } else {
                j += 1;
            }
            // console.log(i,j);


            if (typeof requiredResult[i][j] === 'undefined') {
                requiredResult[i][j] = number;
                mainContainer.children[i].children[j].innerText = number;
                number++;
            } else {

                i = prevRow;
                j = prevCol;
                i++;
                requiredResult[i][j] = number;
                mainContainer.children[i].children[j].innerText = number;
                number++;
            }
        }, counter * 1000)
        counter += 1;

        //checks if there is a number present at the location or not


        // console.log(i,j);

    }

}

console.table(requiredResult);


placeNumbers();

//Checking sum of row for verifying the result
let sum = 0;
for (let x = 0; x < input; x++) {
    sum += requiredResult[0][x];

}

console.log("Sum: " + sum);