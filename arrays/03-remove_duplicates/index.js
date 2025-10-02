// Q. Remove Duplicates from array

// problem statement: 
// Given an array, remove duplicate elements and return unique ones.

// Approach:

// Brute-force:

// create a new array and check each elem if that elem does'nt include in arr push it if already exist then skip

function removeDuplBrute(arr) {
    let result = [];

    for(let i = 0;i < arr.length;i++) {
        if(!result.includes(arr[i])) {
            result.push(arr[i]);
        }
    }

    return result;
}

console.log(removeDuplBrute([1,2,2,4,3,4]));

// Time Complexity -> O(n*2) -> .includes() is costly
// Space Complexity -> O(n) -> extra array sapce


//-----------------------------------------------------------

// Optimized:

// Using Set -> to remove duplicate elem as set only store unique elem

function removeDuplOptSet(arr) {
    return [...new Set(arr)];
}

console.log(removeDuplOptSet([1,3,3,3,2,1,4]));

// Time Complexity -> O(n)
// Space Complexity -> O(n) -> set

//-----------------------------------------------------------------------------

// Without Using Set ->
// first sort the array so duplicates are adjacent
// then use 2 pointer 
// first -> hold prev elem and second pointer -> scan the array holding curre elem
// if new elem found update first if duplicate then skip 

function removeDuplOptNoSet(arr) {
    arr.sort((a,b) => a - b);

    let i = 0;
    for(let j = 1;j < arr.length;j++) {
        if(arr[i] !== arr[j]) {
           i++;
           arr[i] = arr[j];
        }
    }

    return arr.slice(0,i+1);
}

console.log(removeDuplOptNoSet([1,3,3,3,2,1,4]));

// Time Complexity -> O(n log n)
// Space Complexity -> O(1) -> no set all in-place