/*
Cho một mảng số nums và một số target, trả về index của hai số sao cho tổng của chúng bằng target.

Bạn không thể sử dụng cùng một phần tử hai lần.

Bạn có thể trả lời kết quả theo bất kỳ thứ tự nào.

Yêu cầu đầu vào:
  2 <= nums.length <= 104
  -109 <= nums[i] <= 109
  -109 <= target <= 109

Ví dụ 1:
Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Giải thích: Vì nums[0] + nums[1] == 9, nên chúng ta trả về [0, 1].

Ví dụ 2:
Input: nums = [3,2,4], target = 6
Output: [1,2]

Ví dụ 3:
Input: nums = [3,3], target = 6
Output: [0,1]
*/

function twoSum({ nums, target }: any) {
  const numMap = new Map();

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];

    if (numMap.has(complement)) {
      return [numMap.get(complement), i];
    }

    numMap.set(nums[i], i);
  }

  return [];
}

console.log(twoSum([2, 7, 11, 15], 17));
