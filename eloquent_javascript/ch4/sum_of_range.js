function sumRange(start, end) {
  if (start === end) return start;
  return end + sumRange(end - 1);
}

function sum(nums) {
  if (nums.length === 0) return 0;
  return nums[0] + sum(nums.slice(1));
}
