// // Solution 1 : Time Complexity: O(N); Space Complexity: O(N)

// const majorityElement = (nums) => {
//   let j = {};
//     for (let i = 0; i < nums.length; i++) {
//         j[nums[i]] ? j[nums[i]] = j[nums[i]] + 1: j[nums[i]] = 1
//             if(j[nums[i]] > nums.length/2){
//                   return nums[i]
//             }
//     }
// }

// Solution 2 : Time Complexity: O(N); Space Complexity: O(1)
const majorityElement = (nums) => {
  let j = 0
  let count = 0
  for(let i = 0; i<nums.length;  i++){
    if(count === 0)j = nums[i]
    nums[i] === j ? count++ : count--
    // console.log(nums[i],j,count)
  }
  // console.log(`---------`)
  console.log(j)
  return j
}

majorityElement([3, 2, 3]);
majorityElement([2, 2, 1, 1, 1, 2, 2]);
