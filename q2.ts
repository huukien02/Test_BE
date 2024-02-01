/*
Cho một mảng đã được sắp xếp có các số không lặp lại và một giá trị mục tiêu, trả về index nếu giá trị mục tiêu được tìm thấy. Nếu không, trả về index mà nó có thể được chèn vào mảng để duy trì thứ tự.

Ví dụ 1:
Input: nums = [1,3,5,6], target = 5
Output: 2

Ví dụ 2:
Input: nums = [1,3,5,6], target = 2
Output: 1

Ví dụ 3:
Input: nums = [1,3,5,6], target = 7
Output: 4
*/

function searchInsert({ nums, target }: any) {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (nums[mid] === target) {
      return mid;
    } else if (nums[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return left;
}

console.log(searchInsert([1, 3, 5, 6], 2));
