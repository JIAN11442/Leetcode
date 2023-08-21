const maxArea = (height) => {
  let maxArea = 0;
  let i = 0;
  let j = height.length - 1;
  let prevHeight = 0;
  let prevWidth = 0;

  while (i < j) {
    let w = j - i;
    let h = Math.min(height[i], height[j]);
    if (h > prevHeight || w > prevWidth) {
      let area = h * w;
      maxArea = Math.max(maxArea, area);

      prevHeight = h;
      prevWidth = w;
    }

    height[i] <= height[j] ? i++ : j--;
  }
  console.log(maxArea);
  return maxArea;
};

maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]);

// console.log(
//     "[before]",
//     "\n",
//     "i:",
//     i,
//     "\n",
//     "j:",
//     j,
//     "\n",
//     "height[i]:",
//     height[i],
//     "\n",
//     "height[j]:",
//     height[j],
//     "\n",
//     "height:",
//     Math.min(height[i], height[j]),
//     "\n",
//     "width:",
//     j - 1,
//     "\n",
//     "area:",
//     area,
//     "\n",
//     "maxArea:",
//     ans,
//     "\n"
//   );

// console.log(
//     "[after]",
//     "\n",
//     "i:",
//     i,
//     "\n",
//     "j:",
//     j,
//     "\n",
//     "---------------"
//   );
