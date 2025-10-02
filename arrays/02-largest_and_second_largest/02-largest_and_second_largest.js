// Q. Find the Largest and Second Largest Element

// problem statement: 
// Given an array, find the largest and second largest elements.
// If no second largest exists (all equal), return null.

// Approach:

// Brute-force:

// sort the array and pick last two as largest and second-largest elem

function twoLargestElemBrute(arr) {
    arr.sort((a,b) => a - b); // sort the array
    let n = arr.length;
    if(n < 2) return null;  // if array don't have 2 elem
    return [arr[n-1], arr[n-2]]; // return  largest and second largest
}

console.log(twoLargestElemBrute([1,2,3,4]));

// Time Complexity -> O(n log n) -> sorting = log n and loop = n
// Space Complexity -> O(1)


//-----------------------------------------------------------

// Optimized:

// track first and second in one loop
// if num > first first = num and second = first
// if num > second but num < first second = num

function twoLargestElemOpt(arr) {
    let first = -Infinity,second = -Infinity;
    for(let i = 0;i <= arr.length - 1;i++) {
        // check if it is largest elem
        if(arr[i] > first) {
        second = first;
        first = arr[i]
        } else if(arr[i] > second && arr[i] < first){ // if it is second largest element
        second = arr[i];
        }
    }
    return second === -Infinity ? null: [first,second];
}

console.log(twoLargestElemOpt([1,3,5,7,100,50,60]));

// Time Complexity -> O(n)
// Space Complexity -> O(1) (no extra array)

