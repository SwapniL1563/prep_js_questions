// reverse string 

// brute force 

function revStr(str) {
    return str.split("").reverse().join("");
}

console.log(revStr("Hello"));
// tc -> O(n) sc -> O(n

// optimsed

// two pointer approach

function revStrOpt(str) {
    let arr = str.split("")
    let left = 0,right = arr.length - 1;

    while(left < right) {
        [arr[left],arr[right]] = [arr[right],arr[left]];
        left++;
        right--;
    }

    return arr.join("")
}

// tc -> O(n) sc -> O(n)


// palindrome

function isPalindromeBrute(str) {
    return str === str.split("").reverse().join("");
}

console.log(isPalindromeBrute("hooh"));

function isPalindrome(str) {

    // special case
    str = str.toLowerCase().replace(/[^a-z0-9]/g,"")
    let left = 0,right = str.length - 1;

    while (left < right) {
        if(str[left] !== str[right]) return false;
        left++;
        right--;
    }

    return true;
}

console.log(isPalindrome("RaceCar")); // true
console.log(isPalindrome("A man, a plan, a canal: Panama")); // true
console.log(isPalindrome("hello")); // false

/// string compression

Input: "aabcccccaaa"
Output: "a2b1c5a3"

function stringComp(str) {
    if(!str) return ""

    let compress = ""
    let count = 1;

    for(let i = 1;i <= str.length;i++) {
        if(str[i] === str[i-1]) // same char 
        {
            count++
        }

        else {
            compress += str[i-1] + count;
            count = 1;
        }
    }

    return compress.length < str.length ?  compress : str;
}

console.log(stringComp("aaabbbccccd"))