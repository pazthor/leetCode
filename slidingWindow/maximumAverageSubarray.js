
/**
 * problem: https://leetcode.com/problems/maximum-average-subarray-i/submissions/f
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function(nums, k) {
    const results  = []
    let windowSum = 0
    let windowStart = 0
    
    for (let windowEnd = 0; windowEnd < nums.length; windowEnd++){
        windowSum += nums[windowEnd]
        
       if(windowEnd >= k - 1){
           results.push(windowSum/k)
           windowSum -= nums[windowStart]
           windowStart++
       }
    }
    return Math.max(...results);

    
};
