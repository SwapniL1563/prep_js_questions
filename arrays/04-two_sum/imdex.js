// Q. Two Sum Problem

// problem statement: 
// Given an array of integers and a target sum, return the indices of two numbers that add up to the target.

// example: 
// Input: nums = [2,7,11,15], target = 9
//  Output: [0,1] // Because nums[0] + nums[1] = 2 + 7 = 9


// Approach:

// Brute-force:

// loop through each elem and find pair with same sum as target
// using nested loops

function twoSumBrute(arr, target) {
    for(let i = 0; i < arr.length;i++) {
        for(let j = i + 1; j < arr.length;j++) {
            if(arr[i] + arr[j] === target) {
                return [i,j]
            }
        }
    }

    return [];
}

console.log(twoSumBrute([2,7,11,15], 9));

// Time Complexity -> O(n*2) -> nested loops
// Space Complexity -> O(1) -> no extra array sapce


//-----------------------------------------------------------

// Optimized:

// Using hashMap -> traverse array one time
// for each num we will try to find complement = tar - arr[i]
// if found in map return the indices of those else store arr[i] with its index in map


function twoSum(arr,target) {
    let map = new Map();
    for(let i = 0;i < arr.length;i++){
        let complement = target - arr[i];
        // if complement found in map return it
        if(map.has(complement)){
            return [map.get(complement),i];
        }

        // if not found then store it in map with its index
        map.set(arr[i],i);
    }

    return [];
}

console.log(twoSum([2,7,11,15], 9));

// dry run:
// arr = [2,7,11,15] target = 9
// i = 0,  complement = tar - arr[0] = 9 - 2 = 7 -> not in map so store it

// map = ((2,0))

// i = 1, complement = 9 - 7 = 2 -> present in map 
// so retun [map.get(arr[1]),i] => [0,1]


// Time Complexity -> O(n)
// Space Complexity -> O(n) -> map store n numbers

//-----------------------------------------------------------------------------

// if array is sorted already use two pointer

// left = 0 , right = arr.length - 1
// cal sum =  arr[left] + arr[right]
// if sum === tar return [left,right]
// else if sum < tar left++
// else right--

function twoSumSorted(arr,tar) {
    let left = 0, right = arr.length - 1;
    while(left < right) {
        let sum = arr[left] + arr[right];
        if (sum === tar) {
            return [left,right];
        } else if(sum < tar) {
            left++;
        } else {
            right--;
        }
    }

    return []
}


console.log(twoSumSorted([2,7,11,15],9));

// Time Complexity -> O(n)
// Space Complexity -> O(1) -> no map use