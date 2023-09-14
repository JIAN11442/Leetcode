const nextPermutation = (nums, result) => {
  let dec_Index = -1;
  let swap = (nums, head, tail) => {
    [nums[head], nums[tail]] = [nums[tail], nums[head]];
  };

  // get turning index
  for (let i = nums.length - 2; i >= 0; i--) {
    if (nums[i] < nums[i + 1]) {
      dec_Index = i;
      break;
    }
  }

  // swap
  if (dec_Index >= 0) {
    for (let j = nums.length - 1; j >= dec_Index; j--) {
      if (nums[j] > nums[dec_Index]) {
        swap(nums, dec_Index, j);
        break;
      }
    }
  }

  // reverse
  let k = dec_Index + 1;
  let h = nums.length - 1;

  while (k < h) {
    swap(nums, k, h);
    k++;
    h--;
  }

  console.log(nums);
  return nums;
};

nextPermutation([1, 2], [2, 1]); // [1, 2]
nextPermutation([1, 2, 7, 4, 3], [1, 3, 2, 4, 7]); // [1, 3, 2, 4, 7]
nextPermutation([7, 6, 5, 4, 3], [3, 4, 5, 6, 7]); // [3, 4, 5, 6, 7]
nextPermutation([1, 2, 3], [1, 3, 2]); // [1, 3, 2]
nextPermutation([1, 2, 3, 4], [1, 2, 4, 3]); // [1, 2, 4, 3]
nextPermutation([1, 3, 2], [2, 1, 3]); // [2, 1, 3]
nextPermutation([3, 2, 1], [1, 2, 3]); // [1, 2, 3]
nextPermutation([1, 1, 5], [1, 5, 1]); // [1, 5, 1]
