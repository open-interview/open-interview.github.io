import{c as U,as as be,g as we,r as p,u as le,k as ue,j as e,A as J,m as F,X as R,S as C,Z as Q,ah as ve}from"./index-Bb5bc9Dq.js";import{u as de,T as H}from"./use-unified-toast-BEJqNzYt.js";import{u as te,T as se,C as ne,a as re,G as ie,F as pe,L as K}from"./use-focus-trap-B3UEM0WV.js";/**
 * @license lucide-react v0.545.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const je=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]],X=U("arrow-right",je);/**
 * @license lucide-react v0.545.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ne=[["path",{d:"M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z",key:"sc7q7i"}]],me=U("funnel",Ne);/**
 * @license lucide-react v0.545.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ke=[["path",{d:"M12 19v3",key:"npa21l"}],["path",{d:"M19 10v2a7 7 0 0 1-14 0v-2",key:"1vc78b"}],["rect",{x:"9",y:"2",width:"6",height:"13",rx:"3",key:"s6n7sd"}]],Me=U("mic",ke);/**
 * @license lucide-react v0.545.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Se=[["path",{d:"m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5",key:"ftymec"}],["rect",{x:"2",y:"6",width:"14",height:"12",rx:"2",key:"158x01"}]],ae=U("video",Se),he=[{title:"Reverse a String",description:"Write a function that reverses a string. The input string is given as an array of characters.",difficulty:"easy",category:"strings",tags:["string","two-pointers","recursion"],starterCode:{javascript:`function reverseString(s) {
  // Your code here
  
}`,python:`def reverse_string(s):
    # Your code here
    pass`},testCases:[{id:"1",input:'"hello"',expectedOutput:'"olleh"',description:"Basic string"},{id:"2",input:'"world"',expectedOutput:'"dlrow"',description:"Another basic string"},{id:"3",input:'""',expectedOutput:'""',description:"Empty string"},{id:"4",input:'"a"',expectedOutput:'"a"',description:"Single character"}],hints:["Think about using two pointers","You can also use built-in methods like split, reverse, join","Consider the time complexity of your approach"],sampleSolution:{javascript:`function reverseString(s) {
  return s.split('').reverse().join('');
}`,python:`def reverse_string(s):
    return s[::-1]`},complexity:{time:"O(n)",space:"O(n)",explanation:"We iterate through the string once and create a new string of the same length."},timeLimit:10},{title:"Two Sum",description:"Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target. You may assume that each input would have exactly one solution.",difficulty:"easy",category:"arrays",tags:["array","hash-map","two-pointers"],starterCode:{javascript:`function twoSum(nums, target) {
  // Your code here
  
}`,python:`def two_sum(nums, target):
    # Your code here
    pass`},testCases:[{id:"1",input:"[2,7,11,15], 9",expectedOutput:"[0,1]",description:"Basic case"},{id:"2",input:"[3,2,4], 6",expectedOutput:"[1,2]",description:"Non-adjacent elements"},{id:"3",input:"[3,3], 6",expectedOutput:"[0,1]",description:"Same numbers"}],hints:["A brute force approach would be O(n²)","Can you use a hash map to improve efficiency?","Store the complement of each number as you iterate"],sampleSolution:{javascript:`function twoSum(nums, target) {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (map.has(complement)) {
      return [map.get(complement), i];
    }
    map.set(nums[i], i);
  }
  return [];
}`,python:`def two_sum(nums, target):
    seen = {}
    for i, num in enumerate(nums):
        complement = target - num
        if complement in seen:
            return [seen[complement], i]
        seen[num] = i
    return []`},complexity:{time:"O(n)",space:"O(n)",explanation:"We iterate through the array once and use a hash map for O(1) lookups."},timeLimit:15},{title:"Palindrome Check",description:"Write a function that checks if a given string is a palindrome. Consider only alphanumeric characters and ignore cases.",difficulty:"easy",category:"strings",tags:["string","two-pointers","regex"],starterCode:{javascript:`function isPalindrome(s) {
  // Your code here
  
}`,python:`def is_palindrome(s):
    # Your code here
    pass`},testCases:[{id:"1",input:'"A man, a plan, a canal: Panama"',expectedOutput:"true",description:"Classic palindrome"},{id:"2",input:'"race a car"',expectedOutput:"false",description:"Not a palindrome"},{id:"3",input:'""',expectedOutput:"true",description:"Empty string"},{id:"4",input:'"a"',expectedOutput:"true",description:"Single character"}],hints:["First, clean the string by removing non-alphanumeric characters","Convert to lowercase for case-insensitive comparison","Compare characters from both ends moving inward"],sampleSolution:{javascript:`function isPalindrome(s) {
  const cleaned = s.toLowerCase().replace(/[^a-z0-9]/g, '');
  let left = 0, right = cleaned.length - 1;
  while (left < right) {
    if (cleaned[left] !== cleaned[right]) return false;
    left++;
    right--;
  }
  return true;
}`,python:`def is_palindrome(s):
    cleaned = ''.join(c.lower() for c in s if c.isalnum())
    return cleaned == cleaned[::-1]`},complexity:{time:"O(n)",space:"O(n)",explanation:"We process each character once. Space is O(n) for the cleaned string."},timeLimit:10},{title:"FizzBuzz",description:'Write a function that returns an array of strings from 1 to n. For multiples of 3, use "Fizz". For multiples of 5, use "Buzz". For multiples of both, use "FizzBuzz".',difficulty:"easy",tags:["math","simulation","string"],category:"basics",starterCode:{javascript:`function fizzBuzz(n) {
  // Your code here
  
}`,python:`def fizz_buzz(n):
    # Your code here
    pass`},testCases:[{id:"1",input:"3",expectedOutput:'["1","2","Fizz"]',description:"Up to 3"},{id:"2",input:"5",expectedOutput:'["1","2","Fizz","4","Buzz"]',description:"Up to 5"},{id:"3",input:"15",expectedOutput:'["1","2","Fizz","4","Buzz","Fizz","7","8","Fizz","Buzz","11","Fizz","13","14","FizzBuzz"]',description:"Up to 15"}],hints:["Check divisibility using the modulo operator %","Check for divisibility by 15 first (or both 3 and 5)","Build the result array as you iterate"],sampleSolution:{javascript:`function fizzBuzz(n) {
  const result = [];
  for (let i = 1; i <= n; i++) {
    if (i % 15 === 0) result.push("FizzBuzz");
    else if (i % 3 === 0) result.push("Fizz");
    else if (i % 5 === 0) result.push("Buzz");
    else result.push(String(i));
  }
  return result;
}`,python:`def fizz_buzz(n):
    result = []
    for i in range(1, n + 1):
        if i % 15 == 0:
            result.append("FizzBuzz")
        elif i % 3 == 0:
            result.append("Fizz")
        elif i % 5 == 0:
            result.append("Buzz")
        else:
            result.append(str(i))
    return result`},complexity:{time:"O(n)",space:"O(n)",explanation:"We iterate from 1 to n once and store n elements in the result array."},timeLimit:10},{title:"Valid Parentheses",description:"Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid. An input string is valid if brackets are closed in the correct order.",difficulty:"medium",tags:["stack","string","hash-map"],category:"stacks",starterCode:{javascript:`function isValid(s) {
  // Your code here
  
}`,python:`def is_valid(s):
    # Your code here
    pass`},testCases:[{id:"1",input:'"()"',expectedOutput:"true",description:"Simple parentheses"},{id:"2",input:'"()[]{}"',expectedOutput:"true",description:"Multiple types"},{id:"3",input:'"(]"',expectedOutput:"false",description:"Mismatched"},{id:"4",input:'"([)]"',expectedOutput:"false",description:"Wrong order"},{id:"5",input:'"{[]}"',expectedOutput:"true",description:"Nested"}],hints:["Use a stack data structure","Push opening brackets onto the stack","When you see a closing bracket, check if it matches the top of the stack"],sampleSolution:{javascript:`function isValid(s) {
  const stack = [];
  const map = { ')': '(', '}': '{', ']': '[' };
  for (const char of s) {
    if (char in map) {
      if (stack.pop() !== map[char]) return false;
    } else {
      stack.push(char);
    }
  }
  return stack.length === 0;
}`,python:`def is_valid(s):
    stack = []
    mapping = {')': '(', '}': '{', ']': '['}
    for char in s:
        if char in mapping:
            if not stack or stack.pop() != mapping[char]:
                return False
        else:
            stack.append(char)
    return len(stack) == 0`},complexity:{time:"O(n)",space:"O(n)",explanation:"We iterate through the string once. In the worst case, all characters are opening brackets."},timeLimit:15},{title:"Maximum Subarray",description:"Given an integer array nums, find the contiguous subarray which has the largest sum and return its sum.",difficulty:"medium",tags:["array","dynamic-programming","divide-conquer"],category:"arrays",starterCode:{javascript:`function maxSubArray(nums) {
  // Your code here
  
}`,python:`def max_sub_array(nums):
    # Your code here
    pass`},testCases:[{id:"1",input:"[-2,1,-3,4,-1,2,1,-5,4]",expectedOutput:"6",description:"Mixed array"},{id:"2",input:"[1]",expectedOutput:"1",description:"Single element"},{id:"3",input:"[5,4,-1,7,8]",expectedOutput:"23",description:"Mostly positive"},{id:"4",input:"[-1]",expectedOutput:"-1",description:"Single negative"}],hints:["This is a classic dynamic programming problem","Think about Kadane's algorithm","At each position, decide whether to extend the previous subarray or start fresh"],sampleSolution:{javascript:`function maxSubArray(nums) {
  let maxSum = nums[0];
  let currentSum = nums[0];
  for (let i = 1; i < nums.length; i++) {
    currentSum = Math.max(nums[i], currentSum + nums[i]);
    maxSum = Math.max(maxSum, currentSum);
  }
  return maxSum;
}`,python:`def max_sub_array(nums):
    max_sum = current_sum = nums[0]
    for num in nums[1:]:
        current_sum = max(num, current_sum + num)
        max_sum = max(max_sum, current_sum)
    return max_sum`},complexity:{time:"O(n)",space:"O(1)",explanation:"Kadane's algorithm processes each element once with constant extra space."},timeLimit:15},{title:"Merge Two Sorted Arrays",description:"Given two sorted integer arrays nums1 and nums2, merge nums2 into nums1 as one sorted array. Return the merged array.",difficulty:"easy",tags:["array","two-pointers","sorting"],category:"arrays",starterCode:{javascript:`function mergeSorted(nums1, nums2) {
  // Your code here
  
}`,python:`def merge_sorted(nums1, nums2):
    # Your code here
    pass`},testCases:[{id:"1",input:"[1,2,3], [2,5,6]",expectedOutput:"[1,2,2,3,5,6]",description:"Basic merge"},{id:"2",input:"[1], []",expectedOutput:"[1]",description:"Empty second array"},{id:"3",input:"[], [1]",expectedOutput:"[1]",description:"Empty first array"}],hints:["Use two pointers, one for each array","Compare elements and add the smaller one to the result","Don't forget to handle remaining elements"],sampleSolution:{javascript:`function mergeSorted(nums1, nums2) {
  const result = [];
  let i = 0, j = 0;
  while (i < nums1.length && j < nums2.length) {
    if (nums1[i] <= nums2[j]) {
      result.push(nums1[i++]);
    } else {
      result.push(nums2[j++]);
    }
  }
  while (i < nums1.length) result.push(nums1[i++]);
  while (j < nums2.length) result.push(nums2[j++]);
  return result;
}`,python:`def merge_sorted(nums1, nums2):
    result = []
    i = j = 0
    while i < len(nums1) and j < len(nums2):
        if nums1[i] <= nums2[j]:
            result.append(nums1[i])
            i += 1
        else:
            result.append(nums2[j])
            j += 1
    result.extend(nums1[i:])
    result.extend(nums2[j:])
    return result`},complexity:{time:"O(n + m)",space:"O(n + m)",explanation:"We process each element from both arrays once and create a new merged array."},timeLimit:10},{title:"Find First Duplicate",description:"Given an array of integers, find the first duplicate number for which the second occurrence has the minimal index.",difficulty:"medium",tags:["array","hash-set","in-place"],category:"arrays",starterCode:{javascript:`function firstDuplicate(nums) {
  // Your code here
  // Return -1 if no duplicate found
  
}`,python:`def first_duplicate(nums):
    # Your code here
    # Return -1 if no duplicate found
    pass`},testCases:[{id:"1",input:"[2,1,3,5,3,2]",expectedOutput:"3",description:"3 appears twice first"},{id:"2",input:"[2,2]",expectedOutput:"2",description:"Simple duplicate"},{id:"3",input:"[1,2,3]",expectedOutput:"-1",description:"No duplicates"},{id:"4",input:"[2,4,3,5,1]",expectedOutput:"-1",description:"No duplicates"}],hints:["Use a Set to track seen numbers","Return the first number you've seen before","Think about the order of checking"],sampleSolution:{javascript:`function firstDuplicate(nums) {
  const seen = new Set();
  for (const num of nums) {
    if (seen.has(num)) return num;
    seen.add(num);
  }
  return -1;
}`,python:`def first_duplicate(nums):
    seen = set()
    for num in nums:
        if num in seen:
            return num
        seen.add(num)
    return -1`},complexity:{time:"O(n)",space:"O(n)",explanation:"We iterate through the array once and use a Set for O(1) lookups."},timeLimit:10},{title:"Count Vowels",description:"Write a function that counts the number of vowels (a, e, i, o, u) in a given string. The function should be case-insensitive.",difficulty:"easy",tags:["string","hash-set","counting"],category:"strings",starterCode:{javascript:`function countVowels(s) {
  // Your code here
  
}`,python:`def count_vowels(s):
    # Your code here
    pass`},testCases:[{id:"1",input:'"hello"',expectedOutput:"2",description:"Basic word"},{id:"2",input:'"AEIOU"',expectedOutput:"5",description:"All vowels uppercase"},{id:"3",input:'"xyz"',expectedOutput:"0",description:"No vowels"},{id:"4",input:'""',expectedOutput:"0",description:"Empty string"}],hints:["Convert to lowercase first","Use a set of vowels for O(1) lookup","Iterate through each character"],sampleSolution:{javascript:`function countVowels(s) {
  const vowels = new Set(['a', 'e', 'i', 'o', 'u']);
  return [...s.toLowerCase()].filter(c => vowels.has(c)).length;
}`,python:`def count_vowels(s):
    vowels = set('aeiou')
    return sum(1 for c in s.lower() if c in vowels)`},complexity:{time:"O(n)",space:"O(1)",explanation:"We iterate through the string once. The vowel set is constant size."},timeLimit:5},{title:"Remove Duplicates",description:"Given a sorted array, remove the duplicates in-place such that each element appears only once and return the new length. Return the array with unique elements.",difficulty:"easy",category:"arrays",tags:["array","two-pointers","in-place"],starterCode:{javascript:`function removeDuplicates(nums) {
  // Your code here
  // Return array with unique elements
  
}`,python:`def remove_duplicates(nums):
    # Your code here
    # Return array with unique elements
    pass`},testCases:[{id:"1",input:"[1,1,2]",expectedOutput:"[1,2]",description:"Simple duplicates"},{id:"2",input:"[0,0,1,1,1,2,2,3,3,4]",expectedOutput:"[0,1,2,3,4]",description:"Multiple duplicates"},{id:"3",input:"[1]",expectedOutput:"[1]",description:"Single element"},{id:"4",input:"[]",expectedOutput:"[]",description:"Empty array"}],hints:["Since the array is sorted, duplicates will be adjacent","Use two pointers: one for iterating, one for placing unique elements","You can also use a Set for O(n) solution"],sampleSolution:{javascript:`function removeDuplicates(nums) {
  return [...new Set(nums)];
}`,python:`def remove_duplicates(nums):
    return list(dict.fromkeys(nums))`},complexity:{time:"O(n)",space:"O(n)",explanation:"Using a Set/dict to track unique elements requires O(n) space."},timeLimit:10},{title:"Binary Search",description:"Given a sorted array of integers and a target value, return the index if the target is found. If not, return -1.",difficulty:"easy",category:"searching",tags:["array","binary-search","divide-conquer"],starterCode:{javascript:`function binarySearch(nums, target) {
  // Your code here
  
}`,python:`def binary_search(nums, target):
    # Your code here
    pass`},testCases:[{id:"1",input:"[-1,0,3,5,9,12], 9",expectedOutput:"4",description:"Target exists"},{id:"2",input:"[-1,0,3,5,9,12], 2",expectedOutput:"-1",description:"Target not found"},{id:"3",input:"[5], 5",expectedOutput:"0",description:"Single element found"},{id:"4",input:"[1,2,3,4,5], 1",expectedOutput:"0",description:"First element"}],hints:["Binary search works by repeatedly dividing the search interval in half","Compare the target with the middle element","If target < middle, search left half; if target > middle, search right half"],sampleSolution:{javascript:`function binarySearch(nums, target) {
  let left = 0, right = nums.length - 1;
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (nums[mid] === target) return mid;
    if (nums[mid] < target) left = mid + 1;
    else right = mid - 1;
  }
  return -1;
}`,python:`def binary_search(nums, target):
    left, right = 0, len(nums) - 1
    while left <= right:
        mid = (left + right) // 2
        if nums[mid] == target:
            return mid
        elif nums[mid] < target:
            left = mid + 1
        else:
            right = mid - 1
    return -1`},complexity:{time:"O(log n)",space:"O(1)",explanation:"Binary search halves the search space each iteration, giving logarithmic time."},timeLimit:10},{title:"Rotate Array",description:"Given an array, rotate the array to the right by k steps, where k is non-negative. Return the rotated array.",difficulty:"medium",category:"arrays",tags:["array","math","two-pointers","reverse"],starterCode:{javascript:`function rotateArray(nums, k) {
  // Your code here
  // Return the rotated array
  
}`,python:`def rotate_array(nums, k):
    # Your code here
    # Return the rotated array
    pass`},testCases:[{id:"1",input:"[1,2,3,4,5,6,7], 3",expectedOutput:"[5,6,7,1,2,3,4]",description:"Rotate by 3"},{id:"2",input:"[-1,-100,3,99], 2",expectedOutput:"[3,99,-1,-100]",description:"Rotate by 2"},{id:"3",input:"[1,2], 3",expectedOutput:"[2,1]",description:"k > length"},{id:"4",input:"[1], 0",expectedOutput:"[1]",description:"No rotation"}],hints:["Handle the case where k is greater than array length using modulo","One approach: reverse the entire array, then reverse first k elements, then reverse the rest","Another approach: use slice and concatenation"],sampleSolution:{javascript:`function rotateArray(nums, k) {
  k = k % nums.length;
  return [...nums.slice(-k), ...nums.slice(0, -k || nums.length)];
}`,python:`def rotate_array(nums, k):
    k = k % len(nums) if nums else 0
    return nums[-k:] + nums[:-k] if k else nums[:]`},complexity:{time:"O(n)",space:"O(n)",explanation:"We create a new array with sliced portions. In-place solution possible with O(1) space."},timeLimit:15},{title:"Longest Common Prefix",description:"Write a function to find the longest common prefix string amongst an array of strings. If there is no common prefix, return an empty string.",difficulty:"easy",category:"strings",tags:["string","trie","binary-search"],starterCode:{javascript:`function longestCommonPrefix(strs) {
  // Your code here
  
}`,python:`def longest_common_prefix(strs):
    # Your code here
    pass`},testCases:[{id:"1",input:'["flower","flow","flight"]',expectedOutput:'"fl"',description:"Common prefix fl"},{id:"2",input:'["dog","racecar","car"]',expectedOutput:'""',description:"No common prefix"},{id:"3",input:'["a"]',expectedOutput:'"a"',description:"Single string"},{id:"4",input:'["","b"]',expectedOutput:'""',description:"Empty string in array"}],hints:["Start with the first string as the prefix","Compare character by character with each subsequent string","Shorten the prefix whenever a mismatch is found"],sampleSolution:{javascript:`function longestCommonPrefix(strs) {
  if (!strs.length) return "";
  let prefix = strs[0];
  for (let i = 1; i < strs.length; i++) {
    while (strs[i].indexOf(prefix) !== 0) {
      prefix = prefix.slice(0, -1);
      if (!prefix) return "";
    }
  }
  return prefix;
}`,python:`def longest_common_prefix(strs):
    if not strs:
        return ""
    prefix = strs[0]
    for s in strs[1:]:
        while not s.startswith(prefix):
            prefix = prefix[:-1]
            if not prefix:
                return ""
    return prefix`},complexity:{time:"O(S)",space:"O(1)",explanation:"S is the sum of all characters in all strings. We compare each character at most once."},timeLimit:10},{title:"Climbing Stairs",description:"You are climbing a staircase. It takes n steps to reach the top. Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?",difficulty:"easy",category:"dynamic-programming",tags:["dynamic-programming","math","memoization","fibonacci"],starterCode:{javascript:`function climbStairs(n) {
  // Your code here
  
}`,python:`def climb_stairs(n):
    # Your code here
    pass`},testCases:[{id:"1",input:"2",expectedOutput:"2",description:"1+1 or 2"},{id:"2",input:"3",expectedOutput:"3",description:"1+1+1, 1+2, 2+1"},{id:"3",input:"4",expectedOutput:"5",description:"Five ways"},{id:"4",input:"1",expectedOutput:"1",description:"Single step"}],hints:["This is similar to the Fibonacci sequence","To reach step n, you can come from step n-1 or step n-2","ways(n) = ways(n-1) + ways(n-2)"],sampleSolution:{javascript:`function climbStairs(n) {
  if (n <= 2) return n;
  let prev = 1, curr = 2;
  for (let i = 3; i <= n; i++) {
    [prev, curr] = [curr, prev + curr];
  }
  return curr;
}`,python:`def climb_stairs(n):
    if n <= 2:
        return n
    prev, curr = 1, 2
    for _ in range(3, n + 1):
        prev, curr = curr, prev + curr
    return curr`},complexity:{time:"O(n)",space:"O(1)",explanation:"We iterate from 3 to n once, using only two variables for state."},timeLimit:10}],Z="coding-challenge-progress";let q=null,B=null;async function fe(){return q||B||(B=(async()=>{try{const s=await fetch("/data/coding-challenges.json");if(!s.ok)throw new Error("Failed to load challenges");const o=(await s.json()).map(r=>({id:r.id,title:r.title,description:r.description,difficulty:r.difficulty,category:r.category,tags:r.tags||[],starterCode:r.starterCode||{javascript:"",python:""},testCases:(r.testCases||[]).map(a=>({id:a.id||String(Math.random()),input:a.input,expectedOutput:a.expectedOutput,isHidden:a.isHidden,description:a.description})),hints:r.hints||[],sampleSolution:r.solution||r.sampleSolution||{javascript:"",python:""},complexity:r.complexity||{time:"O(n)",space:"O(1)",explanation:""},timeLimit:r.timeLimit||15}));return q=o,o}catch(s){console.warn("Failed to load challenges from JSON, using fallback templates:",s);const i=he.map((o,r)=>({...o,id:`challenge-${r}`}));return q=i,i}})(),B)}function ee(){return q||he.map((s,i)=>({...s,id:`challenge-${i}`}))}fe();function Pe(s){const i=ee();let o=i;return s&&(o=i.filter(r=>r.difficulty===s)),o[Math.floor(Math.random()*o.length)]}function Ce(){return ee()}async function $e(){return fe()}function Ye(s){return ee().find(o=>o.id===s)||null}function Oe(s,i,o){return o==="python"?i.testCases.map(r=>({testCaseId:r.id,passed:!1,error:"Use runTestsAsync for Python execution"})):i.testCases.map(r=>{try{return ze(s,r,i)}catch(a){return{testCaseId:r.id,passed:!1,error:a instanceof Error?a.message:"Execution error"}}})}function oe(s){try{return JSON.stringify(JSON.parse(s))}catch{return s}}async function De(s,i,o){if(o==="javascript")return Oe(s,i,o);const{executePython:r,extractPythonFunctionName:a}=await be(async()=>{const{executePython:u,extractPythonFunctionName:d}=await import("./pyodide-runner-BcYiMYai.js");return{executePython:u,extractPythonFunctionName:d}},[]),c=a(i.starterCode.python);if(!c)return i.testCases.map(u=>({testCaseId:u.id,passed:!1,error:"Could not find function definition in code"}));const l=[];for(const u of i.testCases){const d=await r(s,c,u.input);if(d.success&&d.output){const h=d.output,m=oe(h),f=oe(u.expectedOutput),x=m===f;l.push({testCaseId:u.id,passed:x,actualOutput:h,executionTime:d.executionTime})}else l.push({testCaseId:u.id,passed:!1,error:d.error||"Execution failed",executionTime:d.executionTime})}return l}function ze(s,i,o){const r=performance.now();try{const a=o.starterCode.javascript.match(/function\s+(\w+)/),c=a?a[1]:"solution",l=`
      ${s}
      return ${c}(${i.input});
    `,d=new Function(l)(),h=performance.now()-r,m=JSON.stringify(d),f=i.expectedOutput,x=m===f;return{testCaseId:i.id,passed:x,actualOutput:m,executionTime:h}}catch(a){return{testCaseId:i.id,passed:!1,error:a instanceof Error?a.message:"Unknown error",executionTime:performance.now()-r}}}function Be(s){try{const i=localStorage.getItem(Z),o=i?JSON.parse(i):{attempts:[]};o.attempts.push(s),localStorage.setItem(Z,JSON.stringify(o))}catch{}}function xe(){try{const s=localStorage.getItem(Z);return(s?JSON.parse(s):{attempts:[]}).attempts}catch{return[]}}function We(){const s=xe();return new Set(s.filter(i=>i.passed).map(i=>i.challengeId))}function Ue(){const s=xe(),i=s.filter(a=>a.passed),o=s.length>0?Math.round(s.reduce((a,c)=>a+c.timeSpent,0)/s.length):0,r={easy:{attempted:0,passed:0},medium:{attempted:0,passed:0}};return{totalAttempts:s.length,passedChallenges:i.length,averageTime:o,byDifficulty:r}}function Ve(s){const i=/for[\s\S]*for|while[\s\S]*while|for[\s\S]*while|while[\s\S]*for/.test(s),o=/function\s+(\w+)[\s\S]*\1\s*\(/.test(s),r=/Map|Set|Object|{}|\[\]/i.test(s),a=(s.match(/for|while/g)||[]).length;let c="O(1)",l="O(1)",u="Constant time and space operations.";return i?(c="O(n²)",u="Nested loops suggest quadratic time complexity."):a>0&&(c="O(n)",u="Single loop iteration through the input."),o&&(c=i?"O(2^n)":"O(n)",l="O(n)",u="Recursive calls add to the call stack."),r&&(l="O(n)",!i&&!o&&(u="Uses additional data structure for efficient lookups.")),{time:c,space:l,explanation:u}}function N(s,i){const o=s.toLowerCase(),r=i.toLowerCase();if(r===o)return 1e3;if(r.includes(o))return 500+(100-i.length);const a=o.split(/\s+/).filter(d=>d.length>1),c=r.split(/\s+/);let l=0,u=0;for(const d of a){let h=!1;for(const m of c){if(m===d){l+=50,h=!0;break}if(m.startsWith(d)){l+=30,h=!0;break}if(m.includes(d)){l+=15,h=!0;break}}h?(u++,l+=u*5):u=0}if(l===0&&o.length>=3){let d=0,h=-1;for(const m of o){const f=r.indexOf(m,h+1);f>-1&&(d+=1,f===h+1&&(d+=.5),h=f)}d>=o.length*.6&&(l=d)}return l}function _e(s,i=20){if(!s||s.trim().length<2)return[];const o=we(),r=new Map,a=s.match(/^(?:tag:|#)(.+)$/i),c=!!a,l=c?a[1].trim():s;for(const d of o){const h=r.get(d.id),m=[];let f=0;if(c){const x=d.tags?.join(" ")||"",g=N(l,x);g>0&&(f+=g*10,m.push("tags"))}else{const x=N(l,d.question);x>0&&(f+=x*3,m.push("question"));const g=N(l,d.answer);g>0&&(f+=g*1.5,m.push("answer"));const v=d.tags?.join(" ")||"",k=N(l,v);k>0&&(f+=k*4,m.push("tags"));const b=`${d.channel} ${d.subChannel}`.replace(/-/g," "),j=N(l,b);j>0&&(f+=j*1.5,m.push("channel"))}f>0&&(!h||f>h.score)&&r.set(d.id,{question:d,score:f,matchedIn:m,type:"question"})}const u=Array.from(r.values());return u.sort((d,h)=>h.score-d.score),u.slice(0,i)}function Te(s,i=10){if(!s||s.trim().length<2)return[];const o=Ce(),r=[];for(const a of o){const c=[];let l=0;const u=N(s,a.title);u>0&&(l+=u*3,c.push("title"));const d=N(s,a.description);d>0&&(l+=d*1.5,c.push("description"));const h=a.tags?.join(" ")||"",m=N(s,h);m>0&&(l+=m*2,c.push("tags"));const f=N(s,a.category.replace(/-/g," "));f>0&&(l+=f*1.5,c.push("category")),l>0&&r.push({challenge:a,score:l,matchedIn:c,type:"coding"})}return r.sort((a,c)=>c.score-a.score),r.slice(0,i)}function qe(s,i=20){const o=_e(s,i),r=Te(s,Math.floor(i/2)),a=[...o,...r];return a.sort((c,l)=>l.score-c.score),a.slice(0,i)}function ge(s,i){const[o,r]=p.useState(s);return p.useEffect(()=>{const a=setTimeout(()=>{r(s)},i);return()=>{clearTimeout(a)}},[s,i]),o}function S(s){return s.type==="question"}function W(s){return s.type==="coding"}function Fe({isOpen:s,onClose:i,initialQuery:o}){const[r,a]=p.useState(""),[c,l]=p.useState([]),[u,d]=p.useState([]),[h,m]=p.useState(0),[f,x]=p.useState(!1),[g,v]=p.useState("all"),k=p.useRef(null),b=p.useRef(null),j=p.useRef(null),_=p.useRef(null),[,$]=le(),{isSubscribed:Y,subscribeChannel:E}=ue();de();const A=ge(r,150);te(j,{enabled:s,initialFocus:b,returnFocus:!0}),te(_,{enabled:s,initialFocus:k,returnFocus:!0}),p.useEffect(()=>{s&&o&&a(o)},[s,o]);const V=[{id:"all",label:"All",icon:e.jsx(me,{className:"w-3 h-3"})},{id:"tags",label:"Tags",icon:e.jsx(se,{className:"w-3 h-3"})},{id:"coding",label:"Coding",icon:e.jsx(ne,{className:"w-3 h-3"})},{id:"company",label:"Company",icon:e.jsx(re,{className:"w-3 h-3"})},{id:"video",label:"Video",icon:e.jsx(ae,{className:"w-3 h-3"})},{id:"diagram",label:"Diagram",icon:e.jsx(ie,{className:"w-3 h-3"})}];p.useEffect(()=>{s&&(setTimeout(()=>{k.current?.focus(),b.current?.focus()},100),a(""),l([]),d([]),m(0),v("all"))},[s]),p.useEffect(()=>{if(A.length>=2){x(!0);const t=qe(A,50);l(t),m(0),x(!1)}else l([])},[A]),p.useEffect(()=>{let t=c;switch(g){case"tags":t=c.filter(n=>S(n)&&n.matchedIn.includes("tags"));break;case"coding":t=c.filter(n=>W(n));break;case"company":t=c.filter(n=>S(n)&&n.question.companies&&n.question.companies.length>0);break;case"video":t=c.filter(n=>S(n)&&(n.question.videos?.shortVideo||n.question.videos?.longVideo));break;case"diagram":t=c.filter(n=>S(n)&&(n.question.diagram?.length??0)>20);break;default:t=c}d(t.slice(0,15)),m(0)},[c,g]);const G=p.useCallback(t=>{t.key==="ArrowDown"?(t.preventDefault(),m(n=>Math.min(n+1,u.length-1))):t.key==="ArrowUp"?(t.preventDefault(),m(n=>Math.max(n-1,0))):t.key==="Enter"&&u[h]?(t.preventDefault(),O(u[h])):t.key==="Escape"&&i()},[u,h,i]),O=t=>{if(W(t)){$(`/coding/${t.challenge.id}`),i();return}const{question:n}=t;$(`/channel/${n.channel}/${n.id}`),i()},D=t=>{switch(t){case"beginner":return e.jsx(Q,{className:"w-3 h-3 text-green-400"});case"intermediate":return e.jsx(H,{className:"w-3 h-3 text-yellow-400"});case"advanced":return e.jsx(pe,{className:"w-3 h-3 text-red-400"});default:return null}},I=t=>t==="all"?c.length:t==="tags"?c.filter(n=>S(n)&&n.matchedIn.includes("tags")).length:t==="coding"?c.filter(n=>W(n)).length:t==="company"?c.filter(n=>S(n)&&n.question.companies?.length).length:t==="video"?c.filter(n=>S(n)&&(n.question.videos?.shortVideo||n.question.videos?.longVideo)).length:t==="diagram"?c.filter(n=>S(n)&&(n.question.diagram?.length??0)>20).length:0,L=(t,n)=>{if(W(t))return e.jsxs("button",{onClick:()=>O(t),className:`w-full px-4 py-4 text-left flex items-start gap-3 transition-colors active:bg-primary/10 ${n===h?"bg-primary/20":"hover:bg-muted/50"}`,children:[e.jsxs("div",{className:"flex-1 min-w-0",children:[e.jsxs("div",{className:"flex items-center gap-2 mb-1",children:[t.challenge.difficulty==="easy"?e.jsx(Q,{className:"w-3 h-3 text-green-400"}):e.jsx(H,{className:"w-3 h-3 text-yellow-400"}),e.jsxs("span",{className:"text-[10px] text-muted-foreground uppercase tracking-wider",children:["coding/",t.challenge.category]}),e.jsxs("span",{className:"flex items-center gap-0.5 text-[9px] text-purple-600 dark:text-purple-400 bg-purple-400/10 px-1.5 py-0.5 rounded ml-auto",children:[e.jsx(ne,{className:"w-2.5 h-2.5"})," Challenge"]})]}),e.jsx("p",{className:"text-sm text-foreground line-clamp-2",children:t.challenge.title}),e.jsx("p",{className:"text-xs text-muted-foreground line-clamp-1 mt-1",children:t.challenge.description})]}),e.jsx(X,{className:`w-4 h-4 shrink-0 mt-1 ${n===h?"text-primary":"text-muted-foreground/30"}`})]},`coding-${t.challenge.id}-${n}`);const w=(t.question.companies?.length??0)>0,z=t.question.videos?.shortVideo||t.question.videos?.longVideo,T=(t.question.diagram?.length??0)>20;return e.jsxs("button",{onClick:()=>O(t),className:`w-full px-4 py-4 text-left flex items-start gap-3 transition-colors active:bg-primary/10 ${n===h?"bg-primary/20":"hover:bg-muted/50"}`,children:[e.jsxs("div",{className:"flex-1 min-w-0",children:[e.jsxs("div",{className:"flex items-center gap-2 mb-1",children:[D(t.question.difficulty),e.jsxs("span",{className:"text-[10px] text-muted-foreground uppercase tracking-wider",children:[t.question.channel,"/",t.question.subChannel]}),e.jsxs("div",{className:"flex items-center gap-1 ml-auto",children:[w&&e.jsxs("span",{className:"flex items-center gap-0.5 text-[9px] text-blue-600 dark:text-blue-400 bg-blue-400/10 px-1.5 py-0.5 rounded",children:[e.jsx(re,{className:"w-2.5 h-2.5"}),t.question.companies.length]}),z&&e.jsx("span",{className:"flex items-center text-[9px] text-red-600 dark:text-red-400 bg-red-400/10 px-1.5 py-0.5 rounded",children:e.jsx(ae,{className:"w-2.5 h-2.5"})}),T&&e.jsx("span",{className:"flex items-center text-[9px] text-green-600 dark:text-green-400 bg-green-400/10 px-1.5 py-0.5 rounded",children:e.jsx(ie,{className:"w-2.5 h-2.5"})})]})]}),e.jsx("p",{className:"text-sm text-foreground line-clamp-2",children:t.question.question}),e.jsx("p",{className:"text-xs text-muted-foreground line-clamp-1 mt-1",children:t.question.answer}),t.question.tags?.length>0&&e.jsxs("div",{className:"flex items-center gap-1 mt-2 flex-wrap",children:[e.jsx(se,{className:"w-3 h-3 text-muted-foreground/50 shrink-0"}),t.question.tags.slice(0,5).map((y,ye)=>e.jsx("span",{className:`text-[10px] px-1.5 py-0.5 rounded ${t.matchedIn.includes("tags")?"bg-primary/20 text-primary font-semibold border border-primary/30":"text-muted-foreground/70 bg-muted/50"}`,children:ve(y)},ye)),t.question.tags.length>5&&e.jsxs("span",{className:"text-[10px] text-muted-foreground/50",children:["+",t.question.tags.length-5]})]})]}),e.jsx(X,{className:`w-4 h-4 shrink-0 mt-1 ${n===h?"text-primary":"text-muted-foreground/30"}`})]},`question-${t.question.id}-${n}`)},M=()=>e.jsxs("div",{className:"p-8 text-center text-muted-foreground",children:[e.jsx(C,{className:"w-12 h-12 mx-auto mb-4 opacity-30"}),e.jsx("p",{className:"text-base mb-1",children:"Type to search"}),e.jsx("p",{className:"text-sm opacity-70 mb-2",children:"Search questions, topics, or tags"}),e.jsxs("div",{className:"flex items-center justify-center gap-2 mb-6 text-xs",children:[e.jsx("span",{className:"px-2 py-1 bg-primary/10 text-primary rounded font-mono",children:"tag:react"}),e.jsx("span",{className:"text-muted-foreground/50",children:"or"}),e.jsx("span",{className:"px-2 py-1 bg-primary/10 text-primary rounded font-mono",children:"#kubernetes"})]}),e.jsx("div",{className:"flex flex-wrap justify-center gap-2",children:["react hooks","tag:system-design","#sql","kubernetes"].map(t=>e.jsx("button",{onClick:()=>a(t),className:"px-4 py-2 text-sm text-foreground bg-muted hover:bg-muted/80 border border-border rounded-full transition-colors active:scale-95",children:t},t))})]}),P=()=>e.jsxs("div",{className:"p-8 text-center text-muted-foreground",children:[e.jsx(C,{className:"w-12 h-12 mx-auto mb-3 opacity-30"}),e.jsxs("p",{className:"text-base",children:['No results for "',r,'"']}),e.jsx("p",{className:"text-sm mt-2 opacity-70",children:"Try different keywords"})]});return s?e.jsx(J,{children:s&&e.jsxs(e.Fragment,{children:[e.jsxs(F.div,{ref:j,initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},className:"lg:hidden fixed inset-0 z-[200] bg-background/95 backdrop-blur-xl flex flex-col",style:{top:0,left:0,right:0,bottom:0,position:"fixed"},"data-testid":"search-modal-mobile",role:"dialog","aria-modal":"true","aria-label":"Search modal",children:[e.jsxs("div",{className:"flex items-center justify-between px-4 h-14 border-b border-border flex-shrink-0",children:[e.jsx("h2",{className:"font-semibold text-lg text-foreground",children:"Search"}),e.jsx("button",{onClick:i,className:"p-2 -mr-2 hover:bg-muted rounded-xl transition-colors","data-testid":"search-close-btn",children:e.jsx(R,{className:"w-5 h-5 text-muted-foreground"})})]}),e.jsx("div",{className:"px-4 py-3 flex-shrink-0",children:e.jsxs("div",{className:"flex items-center gap-3 px-4 py-3 bg-muted border border-border rounded-2xl",children:[e.jsx(C,{className:"w-5 h-5 text-muted-foreground flex-shrink-0"}),e.jsx("input",{ref:b,type:"text",value:r,onChange:t=>a(t.target.value),onKeyDown:G,placeholder:"Search questions...",className:"flex-1 bg-transparent text-foreground text-base outline-none placeholder:text-muted-foreground",autoComplete:"off",spellCheck:!1,"data-testid":"search-input-mobile"}),r&&e.jsx("button",{onClick:()=>a(""),className:"p-1.5 hover:bg-muted/80 rounded-full flex-shrink-0",children:e.jsx(R,{className:"w-4 h-4 text-muted-foreground"})})]})}),c.length>0&&e.jsx("div",{className:"flex items-center gap-2 px-4 py-2 overflow-x-auto no-scrollbar flex-shrink-0",children:V.map(t=>{const n=I(t.id);return e.jsxs("button",{onClick:()=>v(t.id),disabled:n===0&&t.id!=="all",className:`flex items-center gap-1.5 px-3 py-1.5 text-xs rounded-full transition-all flex-shrink-0 ${g===t.id?"bg-primary text-primary-foreground font-semibold":n>0?"bg-muted text-foreground":"bg-muted/50 text-muted-foreground/50"}`,children:[t.icon," ",t.label," (",n,")"]},t.id)})}),e.jsxs("div",{className:"flex-1 overflow-y-auto",children:[f&&e.jsx("div",{className:"p-8 text-center",children:e.jsx("div",{className:"w-6 h-6 border-2 border-primary/30 border-t-primary rounded-full animate-spin mx-auto"})}),!f&&r.length>=2&&u.length===0&&P(),!f&&u.length>0&&e.jsx("div",{className:"py-2",children:u.map((t,n)=>L(t,n))}),!f&&r.length<2&&M()]}),e.jsx("div",{className:"px-4 py-3 border-t border-border flex-shrink-0",style:{paddingBottom:"max(env(safe-area-inset-bottom), 12px)"},children:e.jsx("p",{className:"text-sm text-muted-foreground text-center",children:u.length>0?`${u.length} results`:"Tap to search"})})]}),e.jsx(F.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},className:"hidden lg:flex fixed inset-0 z-[200] bg-background/80 backdrop-blur-sm items-start justify-center pt-[10vh] px-4",onClick:i,"data-testid":"search-modal-desktop",children:e.jsxs(F.div,{ref:_,initial:{opacity:0,y:-20,scale:.95},animate:{opacity:1,y:0,scale:1},exit:{opacity:0,y:-20,scale:.95},className:"w-full max-w-2xl bg-card border border-border rounded-xl shadow-2xl overflow-hidden flex flex-col max-h-[80vh]",onClick:t=>t.stopPropagation(),role:"dialog","aria-modal":"true","aria-label":"Search modal",children:[e.jsxs("div",{className:"flex items-center gap-3 p-4 border-b border-border",children:[e.jsx(C,{className:"w-5 h-5 text-muted-foreground"}),e.jsx("input",{ref:k,type:"text",value:r,onChange:t=>a(t.target.value),onKeyDown:G,placeholder:"Search questions, topics, tags...",className:"flex-1 bg-transparent text-foreground text-lg outline-none placeholder:text-muted-foreground/50",autoComplete:"off",spellCheck:!1,"data-testid":"search-input-desktop"}),r&&e.jsx("button",{onClick:()=>a(""),className:"p-1.5 hover:bg-muted rounded-full",children:e.jsx(R,{className:"w-4 h-4 text-muted-foreground"})}),e.jsx("kbd",{className:"px-2 py-1 text-[10px] text-muted-foreground bg-muted border border-border rounded",children:"ESC"})]}),c.length>0&&e.jsxs("div",{className:"flex items-center gap-2 px-4 py-2 border-b border-border bg-muted/30 flex-wrap",children:[e.jsx("span",{className:"text-[10px] text-muted-foreground uppercase tracking-wider mr-1",children:"Filter:"}),V.map(t=>{const n=I(t.id);return e.jsxs("button",{onClick:()=>v(t.id),disabled:n===0&&t.id!=="all",className:`flex items-center gap-1.5 px-2.5 py-1 text-[11px] rounded-full transition-all ${g===t.id?"bg-primary text-primary-foreground font-bold":n>0?"bg-muted text-muted-foreground hover:bg-muted/80":"bg-muted/50 text-muted-foreground/50 cursor-not-allowed"}`,children:[t.icon," ",t.label," ",e.jsxs("span",{className:"text-[9px] opacity-70",children:["(",n,")"]})]},t.id)})]}),e.jsxs("div",{className:"flex-1 overflow-y-auto",children:[f&&e.jsx("div",{className:"p-8 text-center",children:e.jsx("div",{className:"w-6 h-6 border-2 border-primary/30 border-t-primary rounded-full animate-spin mx-auto"})}),!f&&r.length>=2&&u.length===0&&P(),!f&&u.length>0&&e.jsx("div",{className:"py-2",children:u.map((t,n)=>L(t,n))}),!f&&r.length<2&&M()]}),e.jsxs("div",{className:"px-4 py-3 border-t border-border flex items-center justify-between text-xs text-muted-foreground",children:[e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsxs("span",{children:[e.jsx("kbd",{className:"px-1.5 py-0.5 bg-muted rounded text-[10px]",children:"↑↓"})," Navigate"]}),e.jsxs("span",{children:[e.jsx("kbd",{className:"px-1.5 py-0.5 bg-muted rounded text-[10px]",children:"↵"})," Select"]}),e.jsxs("span",{children:[e.jsx("kbd",{className:"px-1.5 py-0.5 bg-muted rounded text-[10px]",children:"ESC"})," Close"]})]}),u.length>0&&e.jsxs("span",{children:[u.length," results"]})]})]})})]})}):null}function Re({isOpen:s,onClose:i}){const[o,r]=p.useState(""),[a,c]=p.useState([]),[l,u]=p.useState(0),[d,h]=p.useState(!1),[m,f]=p.useState(!0),[x,g]=p.useState(null),[v,k]=p.useState({}),[b,j]=p.useState(null),[_,$]=p.useState(!1),Y=p.useRef(null),E=p.useRef(null),[,A]=le(),{isSubscribed:V,subscribeChannel:G}=ue();de();const O=ge(o,200);p.useEffect(()=>{const t=()=>$(window.innerWidth<1024);return t(),window.addEventListener("resize",t),()=>window.removeEventListener("resize",t)},[]),p.useEffect(()=>{async function t(){try{if(!document.querySelector('link[href*="pagefind"]')){const w=document.createElement("link");w.rel="stylesheet",w.href="/pagefind/pagefind-ui.css",document.head.appendChild(w)}if(!window.pagefind){await new Promise((z,T)=>{const y=document.createElement("script");y.src="/pagefind/pagefind.js",y.type="module",y.onload=()=>z(),y.onerror=()=>T(new Error("Failed to load Pagefind script")),document.head.appendChild(y)});let w=0;for(;!window.pagefind&&w<50;)await new Promise(z=>setTimeout(z,100)),w++}if(!window.pagefind)throw new Error("Pagefind not available");await window.pagefind.init(),E.current=window.pagefind;const n=await window.pagefind.filters();k(n),f(!1),g(null)}catch(n){console.error("Failed to load Pagefind:",n),g("Search index not available. Using fallback search."),f(!1)}}s&&!E.current&&t()},[s]),p.useEffect(()=>{s&&(setTimeout(()=>Y.current?.focus(),100),r(""),c([]),u(0),j(null))},[s]),p.useEffect(()=>{async function t(){if(!E.current||O.length<2){c([]);return}h(!0);try{const n={};b&&(n.filters={difficulty:b});const w=await E.current.search(O,n),z=await Promise.all(w.results.slice(0,15).map(async T=>{const y=await T.data();return{id:y.meta.id||T.id,title:y.meta.title,excerpt:y.excerpt,channel:y.meta.channel||"",difficulty:y.meta.difficulty||"intermediate"}}));c(z),u(0)}catch(n){console.error("Search error:",n)}finally{h(!1)}}t()},[O,b]);const D=p.useCallback(t=>{t.key==="ArrowDown"?(t.preventDefault(),u(n=>Math.min(n+1,a.length-1))):t.key==="ArrowUp"?(t.preventDefault(),u(n=>Math.max(n-1,0))):t.key==="Enter"&&a[l]?(t.preventDefault(),I(a[l])):t.key==="Escape"&&i()},[a,l,i]),I=t=>{const n=t.channel;n&&A(`/channel/${n}/${t.id}`),i()},L=t=>{switch(t){case"beginner":return e.jsx(Q,{className:"w-3 h-3 text-green-400"});case"intermediate":return e.jsx(H,{className:"w-3 h-3 text-yellow-400"});case"advanced":return e.jsx(pe,{className:"w-3 h-3 text-red-400"});default:return null}},M=()=>!v.difficulty||Object.keys(v.difficulty).length===0?null:e.jsxs("div",{className:`flex items-center gap-2 px-4 py-2 border-b border-border bg-muted/30 overflow-x-auto no-scrollbar flex-shrink-0 ${_?"":"flex-wrap"}`,children:[!_&&e.jsx("span",{className:"text-[10px] text-muted-foreground uppercase tracking-wider mr-1",children:"Difficulty:"}),e.jsxs("button",{onClick:()=>j(null),className:`flex items-center gap-1.5 px-3 py-1.5 text-xs rounded-full transition-all flex-shrink-0 ${b?"bg-muted text-muted-foreground hover:bg-muted/80":"bg-primary text-primary-foreground font-semibold"}`,children:[e.jsx(me,{className:"w-3 h-3"})," All"]}),Object.entries(v.difficulty).map(([t,n])=>e.jsxs("button",{onClick:()=>j(b===t?null:t),className:`flex items-center gap-1.5 px-3 py-1.5 text-xs rounded-full transition-all flex-shrink-0 ${b===t?"bg-primary text-primary-foreground font-semibold":"bg-muted text-muted-foreground hover:bg-muted/80"}`,children:[L(t)," ",t," (",n,")"]},t))]}),P=()=>e.jsxs("div",{className:"flex-1 overflow-y-auto",children:[d&&e.jsx("div",{className:"p-8 text-center",children:e.jsx(K,{className:"w-6 h-6 animate-spin mx-auto text-muted-foreground"})}),!d&&o.length>=2&&a.length===0&&e.jsxs("div",{className:"p-8 text-center text-muted-foreground",children:[e.jsx(C,{className:"w-12 h-12 mx-auto mb-3 opacity-30"}),e.jsxs("p",{className:"text-base",children:['No questions found for "',o,'"']}),e.jsx("p",{className:"text-sm mt-2 opacity-70",children:"Try different keywords"})]}),!d&&a.length>0&&e.jsx("div",{className:"py-2",children:a.map((t,n)=>e.jsxs("button",{onClick:()=>I(t),className:`w-full px-4 py-4 text-left flex items-start gap-3 transition-colors active:bg-primary/10 ${n===l?"bg-primary/20":"hover:bg-muted/50"}`,children:[e.jsxs("div",{className:"flex-1 min-w-0",children:[e.jsxs("div",{className:"flex items-center gap-2 mb-1",children:[L(t.difficulty),e.jsx("span",{className:"text-[10px] text-muted-foreground uppercase tracking-wider",children:t.channel})]}),e.jsx("p",{className:"text-sm text-foreground line-clamp-2",children:t.title}),e.jsx("p",{className:"text-xs text-muted-foreground line-clamp-2 mt-1",dangerouslySetInnerHTML:{__html:t.excerpt}})]}),e.jsx(X,{className:`w-4 h-4 shrink-0 mt-1 ${n===l?"text-primary":"text-muted-foreground/30"}`})]},t.id))}),!d&&o.length<2&&!m&&e.jsxs("div",{className:"p-8 text-center text-muted-foreground",children:[e.jsx(C,{className:"w-12 h-12 mx-auto mb-4 opacity-30"}),e.jsx("p",{className:"text-base mb-1",children:"Type at least 2 characters"}),e.jsx("p",{className:"text-sm opacity-70 mb-6",children:"Search questions, topics, or tags"}),e.jsx("div",{className:"flex flex-wrap justify-center gap-2",children:["react hooks","system design","sql joins","kubernetes"].map(t=>e.jsx("button",{onClick:()=>r(t),className:"px-4 py-2 text-sm bg-muted hover:bg-muted/80 border border-border rounded-full transition-colors active:scale-95",children:t},t))})]})]});return s?_?e.jsx(J,{children:e.jsxs(F.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},className:"fixed inset-0 z-[200] bg-background flex flex-col","data-testid":"pagefind-search-mobile",children:[e.jsxs("div",{className:"flex items-center justify-between px-4 h-14 border-b border-border bg-card flex-shrink-0 pt-safe",children:[e.jsx("h2",{className:"font-semibold text-lg",children:"Search"}),e.jsx("button",{onClick:i,className:"p-2 -mr-2 hover:bg-muted rounded-full","data-testid":"search-close-btn",children:e.jsx(R,{className:"w-5 h-5"})})]}),e.jsxs("div",{className:"flex items-center gap-3 px-4 py-3 border-b border-border bg-card flex-shrink-0",children:[m?e.jsx(K,{className:"w-5 h-5 text-muted-foreground animate-spin flex-shrink-0"}):e.jsx(C,{className:"w-5 h-5 text-muted-foreground flex-shrink-0"}),e.jsx("input",{ref:Y,type:"text",value:o,onChange:t=>r(t.target.value),onKeyDown:D,placeholder:m?"Loading search...":"Search questions...",className:"flex-1 bg-transparent text-foreground text-base outline-none placeholder:text-muted-foreground/50",autoComplete:"off",spellCheck:!1,disabled:m,"data-testid":"search-input"}),o&&e.jsx("button",{onClick:()=>r(""),className:"p-1.5 hover:bg-muted rounded-full flex-shrink-0",children:e.jsx(R,{className:"w-4 h-4 text-muted-foreground"})})]}),x&&e.jsx("div",{className:"px-4 py-2 bg-yellow-500/10 border-b border-yellow-500/20 text-yellow-600 dark:text-yellow-400 text-xs flex-shrink-0",children:x}),M(),P(),e.jsx("div",{className:"px-4 py-3 border-t border-border bg-card flex-shrink-0",style:{paddingBottom:"max(env(safe-area-inset-bottom), 12px)"},children:e.jsx("p",{className:"text-sm text-muted-foreground text-center",children:a.length>0?`${a.length} result${a.length!==1?"s":""}`:"Tap to search"})})]})}):e.jsx(J,{children:e.jsx(F.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},className:"fixed inset-0 z-[200] bg-background/80 backdrop-blur-sm flex items-start justify-center pt-[10vh] px-4",onClick:i,"data-testid":"pagefind-search-desktop",children:e.jsxs(F.div,{initial:{opacity:0,y:-20,scale:.95},animate:{opacity:1,y:0,scale:1},exit:{opacity:0,y:-20,scale:.95},className:"w-full max-w-2xl bg-card border border-border rounded-xl shadow-2xl overflow-hidden flex flex-col max-h-[80vh]",onClick:t=>t.stopPropagation(),children:[e.jsxs("div",{className:"flex items-center gap-3 p-4 border-b border-border",children:[m?e.jsx(K,{className:"w-5 h-5 text-muted-foreground animate-spin"}):e.jsx(C,{className:"w-5 h-5 text-muted-foreground"}),e.jsx("input",{ref:Y,type:"text",value:o,onChange:t=>r(t.target.value),onKeyDown:D,placeholder:m?"Loading search...":"Search questions, topics, tags...",className:"flex-1 bg-transparent text-foreground text-lg outline-none placeholder:text-muted-foreground/50",autoComplete:"off",spellCheck:!1,disabled:m,"data-testid":"search-input"}),o&&e.jsx("button",{onClick:()=>r(""),className:"p-1.5 hover:bg-muted rounded-full",children:e.jsx(R,{className:"w-4 h-4 text-muted-foreground"})}),e.jsx("kbd",{className:"px-2 py-1 text-[10px] text-muted-foreground bg-muted border border-border rounded",children:"ESC"})]}),x&&e.jsx("div",{className:"px-4 py-2 bg-yellow-500/10 border-b border-yellow-500/20 text-yellow-600 dark:text-yellow-400 text-xs",children:x}),M(),P(),e.jsxs("div",{className:"px-4 py-3 border-t border-border flex items-center justify-between text-xs text-muted-foreground",children:[e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsxs("span",{children:[e.jsx("kbd",{className:"px-1.5 py-0.5 bg-muted rounded text-[10px]",children:"↑↓"})," Navigate"]}),e.jsxs("span",{children:[e.jsx("kbd",{className:"px-1.5 py-0.5 bg-muted rounded text-[10px]",children:"↵"})," Select"]}),e.jsxs("span",{children:[e.jsx("kbd",{className:"px-1.5 py-0.5 bg-muted rounded text-[10px]",children:"ESC"})," Close"]})]}),a.length>0&&e.jsxs("span",{children:[a.length," result",a.length!==1?"s":""]})]})]})})}):null}const ce="search-provider";function Ee(){const[s,i]=p.useState(()=>typeof window>"u"?"fuzzy":localStorage.getItem(ce)||"fuzzy"),[o,r]=p.useState(!1);return p.useEffect(()=>{async function l(){try{const u=await fetch("/pagefind/pagefind.js",{method:"HEAD"});r(u.ok)}catch{r(!1)}}l()},[]),{provider:s==="pagefind"&&!o?"fuzzy":s,setProvider:l=>{i(l),localStorage.setItem(ce,l)},pagefindAvailable:o}}function Ge({isOpen:s,onClose:i,initialQuery:o}){const{provider:r}=Ee();return r==="pagefind"?e.jsx(Re,{isOpen:s,onClose:i}):e.jsx(Fe,{isOpen:s,onClose:i,initialQuery:o})}export{X as A,me as F,Me as M,Ge as U,Ue as a,Ye as b,Ve as c,Pe as d,$e as e,We as g,De as r,Be as s};
