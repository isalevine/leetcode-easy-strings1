// source: https://leetcode.com/explore/interview/card/top-interview-questions-easy/127/strings/879/



// Write a function that reverses a string. The input string is given as an array of characters char[].

// Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.

// You may assume all the characters consist of printable ascii characters.

 

// Example 1:

// Input: ["h","e","l","l","o"]
// Output: ["o","l","l","e","h"]
// Example 2:

// Input: ["H","a","n","n","a","h"]
// Output: ["h","a","n","n","a","H"]





var reverseString = function(s) {
    let counter = Math.floor(s.length / 2);     // stop half-way, do not move middle character
    let endIndex = s.length - 1;

    for (startIndex = 0; startIndex < counter; startIndex++) {
      let endLetter = s[endIndex];
      s[endIndex] = s[startIndex];
      s[startIndex] = endLetter;
      endIndex--;
    };
};