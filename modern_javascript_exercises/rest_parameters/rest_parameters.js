// Instructions can be found in rest_parameters.md

// Add rest parameters here!
export function add(...nums) {
  // Add a loop here
  return nums.reduce((sum, num) => sum + num);
}

add(1, 2, 3, 4, 5);
