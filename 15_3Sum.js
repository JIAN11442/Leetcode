const threeSum = (nums) => {
  if (nums.length < 3) {
    return "";
  }

  let target = 0;
  let result = [];
  let sort_nums = nums.sort((a, b) => a - b);

  for (let i = 0; i < sort_nums.length - 2; i++) {
    // 如果當前的sort_nums[i]與sort_nums[i-1]一樣，跳過當前i，進入下個迴圈
    if (i > 0 && sort_nums[i] === sort_nums[i - 1]) continue;

    let j = i + 1;
    let k = sort_nums.length - 1;

    while (j < k) {
      let sum = sort_nums[i] + sort_nums[j] + sort_nums[k];

      if (sum === target) {
        // 相加有等於target,就符合條件，所以將這組合push到result中
        result.push([sort_nums[i], sort_nums[j], sort_nums[k]]);
        // 遇到符合條件的組合，除了要push外，還要讓j繼續往右邊移動判斷，
        // 但因為當前i,j,k屬於符合條件的組合，所以假設下一個j或k與當前j,k一樣的話，就會重複取值，
        // 所以這一步在移動的同時，可以順便規避與當前組合一樣的組合
        while (sort_nums[j + 1] === sort_nums[j]) j++;
        while (sort_nums[k + 1] === sort_nums[k]) k--;
        j++;
      } else if (sum < target) {
        // 如果sum 小於 target，就讓j移動到下一個（i,k不變情況下繼續判斷）
        j++;
      } else {
        // 如果sum 大於target，那麼j就沒有移動下去的必要了，因為j不管怎麼向右移動，結果一定是大於target
        // 而在i不能移動；j沒有移動的意義下，能移動的就只有k（在i不變，且j沒意義的情況下，改變k才能有更多可能性組合）
        k--;
      }
    }
  }
  console.log(result);
  return result;
};

threeSum([0, 1, 1]);
threeSum([0, 0, 0]);
threeSum([1, 2, -2, -1]);
threeSum([-2, 0, 1, 1, 2]);
threeSum([-1, 0, 1, 2, -1, -4]);

// function threeSum(nums) {
//   const results = [];

//   // obviously irrelevant if we don't have at least 3 numbers to play with!
//   if (nums.length < 3) return results;

//   // having the numbers in ascending order will make this problem much easier.
//   // also, knowing the overall problem  will take at least O(N^2) time, we can
//   // afford the O(NlogN) sort operation
//   nums = nums.sort((a, b) => a - b);

//   // if the question asks us for a custom target, we can control it here
//   let target = 0;

//   for (let i = 0; i < nums.length - 2; i++) {
//     // `i` represents the "left" most number in our sorted set.
//     // once this number hits 0, there's no need to go further since
//     // positive numbers cannot sum to a negative number
//     if (nums[i] > target) break;

//     // we don't want repeats, so skip numbers we've already seen
//     if (i > 0 && nums[i] === nums[i - 1]) continue;

//     // `j` represents the "middle" element between `i` and `k`.
//     // we will increment this up through the array while `i` and `k`
//     // are anchored to their positions. we will decrement `k` for
//     // for each pass through the array, and finally increment `i`
//     // once `j` and `k` meet.
//     let j = i + 1;

//     // `k` represents the "right" most element
//     let k = nums.length - 1;

//     // to summarize our setup, we have `i` that starts at the beginning,
//     // `k` that starts at the end, and `j` that races in between the two.
//     //
//     // note that `i` is controlled by our outer for-loop and will move the slowest.
//     // in the meantime, `j` and `k` will take turns inching towards each other depending
//     // on some logic we'll set up below. once they collide, `i` will be incremented up
//     // and we'll repeat the process.

//     while (j < k) {
//       let sum = nums[i] + nums[j] + nums[k];

//       // if we find the target sum, increment `j` and decrement `k` for
//       // other potential combos where `i` is the anchor
//       if (sum === target) {
//         // store the valid threesum
//         results.push([nums[i], nums[j], nums[k]]);

//         // this is important! we need to continue to increment `j` and decrement `k`
//         // as long as those values are duplicated. in other words, we wanna skip values
//         // we've already seen. otherwise, an input array of [-2,0,0,2,2] would result in
//         // [[-2,0,2], [-2,0,2]].

//         // (i'm not a fan of this part because we're doing a while loop as we're
//         // already inside of another while loop...)
//         while (nums[j] === nums[j + 1]) j++;
//         while (nums[k] === nums[k - 1]) k--;

//         // finally, we need to actually move `j` forward and `k` backward to the
//         // next unique elements. the previous while loops will not handle this.
//         j++;
//         k--;

//         // if the sum is too small, increment `j` to get closer to the target
//       } else if (sum < target) {
//         j++;

//         // if the sum is too large, decrement `k` to get closer to the target
//       } else {
//         // (sum > target)
//         k--;
//       }
//     }
//   }

//   return results;
// }
