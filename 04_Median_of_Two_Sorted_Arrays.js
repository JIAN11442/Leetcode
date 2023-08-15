// Given two sorted arrays nums1 and nums2 of size m and n respectively,
// return the median of the two sorted arrays.

// The overall run time complexity should be O(log (m+n)).

// Example 1:

// Input: nums1 = [1,3], nums2 = [2]
// Output: 2.00000
// Explanation: merged array = [1,2,3] and median is 2.

// Example 2:

// Input: nums1 = [1,2], nums2 = [3,4]
// Output: 2.50000
// Explanation: merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5.

const findMedianSortedArrays = (num1, num2) => {
  let result;
  let mergeSort = num1.concat(num2).sort((a, b) => a - b);
  let n = mergeSort.length;
  if (n % 2 === 0) {
    result = (mergeSort[n / 2 - 1] + mergeSort[(n + 2) / 2 - 1]) / 2;
  } else {
    result = mergeSort[(n + 1) / 2 - 1];
  }
  console.log(result);
  return result;
};

findMedianSortedArrays([3], [-2, -1]);
