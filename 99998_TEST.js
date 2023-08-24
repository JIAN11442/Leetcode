// const threeSum = (nums) => {

// };

function threeSum(nums) {
  const results = [];

  if (nums.length < 3) return results;

  nums = nums.sort((a, b) => a - b);

  // 看最後nums[i] + nums[j] + nums[k]要得到什麼target
  let target = 0;

  // i, j, k的初始值
  // i: 0 ~ nums.length - 2(減2的原因是有兩個位置是給j和k)
  // j: i + 1(沒什麼好說的,一定是從i後面開始)
  // k: nums.length - 1(應處於nums的最末端)
  for (let i = 0; i < nums.length - 2; i++) {
    // 因為我們是從小排到大，如果nums[i]一開始就大於target，
    // 那更不用說排在nums[i]後面的nums[j]和nums[k]了，這兩個一定比nums[i]大
    // 那最後的結果就是nums[i]、nums[j]、nums[k]都比target大，那三者加起來一定比target大
    // 沒有計算的意義，直接break，進行下一次迴圈
    if (nums[i] > target) break;

    if (i > 0 && nums[i] === nums[i - 1]) continue;

    let j = i + 1;
    let k = nums.length - 1;

    while (j < k) {
      let sum = nums[i] + nums[j] + nums[k];

      if (sum === target) {
        results.push([nums[i], nums[j], nums[k]]);

        while (nums[j] === nums[j + 1]) j++;
        while (nums[k] === nums[k - 1]) k--;

        j++;
        k--;
      } else if (sum < target) {
        j++;
      } else {
        k--;
      }
    }
  }

  return results;
}

threeSum([-1, 0, 1, 2, -1, -4]);
// threeSum([0, 1, 1]);
// threeSum([0, 0, 0]);
