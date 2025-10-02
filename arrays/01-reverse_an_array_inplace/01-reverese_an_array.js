// Q. Reverse an array in-place

// problem statement: 
// given an array, reverse its elem without using extra array

// Approach:

// Brute-force:

// we will use an extra array, push elem from end by running reverse loop in it 
// problem not in-place 

function reverseArr(arr) {
    let rev = [];
    for(let i = arr.length - 1;i >= 0;i--) {
        rev.push(arr[i]);
    }

    return rev;
}

console.log(reverseArr([1,2,3,4]));

// Time Complexity -> O(n)
// Space Complexity -> O(n)


//-----------------------------------------------------------

// Optimized:

// Using 2 pointers:
// left = 0, right = end
// To reverse, we will swap first elem with last and second with second-last and so on
// continue till two pointer meet in middle 

function revArrInPlace(arr) {
    let left = 0, right = arr.length - 1;
    while(left < right) {
        // swap two elem
        [arr[left],arr[right]] = [arr[right],arr[left]];
        left++;
        right--;
    }

    return arr;
}

console.log(revArrInPlace([1,3,5,7]));

// Time Complexity -> O(n)
// Space Complexity -> O(1) (no extra array)

