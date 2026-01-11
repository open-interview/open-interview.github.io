import{c as ee,ax as we,a6 as ve,r as h,u as le,o as ue,e as de,j as e,d as J,m as F,X as R,Z as Q,au as je}from"./index-B4uMxRHM.js";import{u as pe}from"./use-unified-toast-XZBBX5Ux.js";import{C as ne,a as re,G as ie,T as Ne,F as me}from"./tag-DMFN-rhc.js";import{T as H}from"./target-BORbcrdy.js";import{A as X}from"./mic-4I04aTj8.js";import{L as K}from"./user-CMJ1BdbH.js";/**
 * @license lucide-react v0.545.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ke=[["path",{d:"M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z",key:"sc7q7i"}]],he=ee("funnel",ke);/**
 * @license lucide-react v0.545.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Se=[["path",{d:"m21 21-4.34-4.34",key:"14j7rj"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}]],k=ee("search",Se);/**
 * @license lucide-react v0.545.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ce=[["path",{d:"m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5",key:"ftymec"}],["rect",{x:"2",y:"6",width:"14",height:"12",rx:"2",key:"158x01"}]],ae=ee("video",Ce),fe=[{title:"Reverse a String",description:"Write a function that reverses a string. The input string is given as an array of characters.",difficulty:"easy",category:"strings",tags:["string","two-pointers","recursion"],starterCode:{javascript:`function reverseString(s) {
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
    return curr`},complexity:{time:"O(n)",space:"O(1)",explanation:"We iterate from 3 to n once, using only two variables for state."},timeLimit:10}],Z="coding-challenge-progress";let q=null,W=null;async function xe(){return q||W||(W=(async()=>{try{const t=await fetch("/data/coding-challenges.json");if(!t.ok)throw new Error("Failed to load challenges");const i=(await t.json()).map(a=>({id:a.id,title:a.title,description:a.description,difficulty:a.difficulty,category:a.category,tags:a.tags||[],starterCode:a.starterCode||{javascript:"",python:""},testCases:(a.testCases||[]).map(n=>({id:n.id||String(Math.random()),input:n.input,expectedOutput:n.expectedOutput,isHidden:n.isHidden,description:n.description})),hints:a.hints||[],sampleSolution:a.solution||a.sampleSolution||{javascript:"",python:""},complexity:a.complexity||{time:"O(n)",space:"O(1)",explanation:""},timeLimit:a.timeLimit||15}));return q=i,i}catch(t){console.warn("Failed to load challenges from JSON, using fallback templates:",t);const r=fe.map((i,a)=>({...i,id:`challenge-${a}`}));return q=r,r}})(),W)}function te(){return q||fe.map((t,r)=>({...t,id:`challenge-${r}`}))}xe();function Oe(t){const r=te();let i=r;return t&&(i=r.filter(a=>a.difficulty===t)),i[Math.floor(Math.random()*i.length)]}function ge(){return te()}async function ze(){return xe()}function _e(t){return te().find(i=>i.id===t)||null}function ye(t,r,i){return i==="python"?r.testCases.map(a=>({testCaseId:a.id,passed:!1,error:"Use runTestsAsync for Python execution"})):r.testCases.map(a=>{try{return Ee(t,a,r)}catch(n){return{testCaseId:a.id,passed:!1,error:n instanceof Error?n.message:"Execution error"}}})}function oe(t){try{return JSON.stringify(JSON.parse(t))}catch{return t}}async function Te(t,r,i){if(i==="javascript")return ye(t,r,i);const{executePython:a,extractPythonFunctionName:n}=await we(async()=>{const{executePython:p,extractPythonFunctionName:u}=await import("./pyodide-runner-BcYiMYai.js");return{executePython:p,extractPythonFunctionName:u}},[]),d=n(r.starterCode.python);if(!d)return r.testCases.map(p=>({testCaseId:p.id,passed:!1,error:"Could not find function definition in code"}));const o=[];for(const p of r.testCases){const u=await a(t,d,p.input);if(u.success&&u.output){const f=u.output,m=oe(f),g=oe(p.expectedOutput),y=m===g;o.push({testCaseId:p.id,passed:y,actualOutput:f,executionTime:u.executionTime})}else o.push({testCaseId:p.id,passed:!1,error:u.error||"Execution failed",executionTime:u.executionTime})}return o}function Ee(t,r,i){const a=performance.now();try{const n=i.starterCode.javascript.match(/function\s+(\w+)/),d=n?n[1]:"solution",o=`
      ${t}
      return ${d}(${r.input});
    `,u=new Function(o)(),f=performance.now()-a,m=JSON.stringify(u),g=r.expectedOutput,y=m===g;return{testCaseId:r.id,passed:y,actualOutput:m,executionTime:f}}catch(n){return{testCaseId:r.id,passed:!1,error:n instanceof Error?n.message:"Unknown error",executionTime:performance.now()-a}}}function qe(t){try{const r=localStorage.getItem(Z),i=r?JSON.parse(r):{attempts:[]};i.attempts.push(t),localStorage.setItem(Z,JSON.stringify(i))}catch{}}function se(){try{const t=localStorage.getItem(Z);return(t?JSON.parse(t):{attempts:[]}).attempts}catch{return[]}}function Fe(){const t=se();return new Set(t.filter(r=>r.passed).map(r=>r.challengeId))}function Re(){const t=se(),r=t.filter(n=>n.passed),i=t.length>0?Math.round(t.reduce((n,d)=>n+d.timeSpent,0)/t.length):0,a={easy:{attempted:0,passed:0},medium:{attempted:0,passed:0}};return{totalAttempts:t.length,passedChallenges:r.length,averageTime:i,byDifficulty:a}}function Ae(t){const r=/for[\s\S]*for|while[\s\S]*while|for[\s\S]*while|while[\s\S]*for/.test(t),i=/function\s+(\w+)[\s\S]*\1\s*\(/.test(t),a=/Map|Set|Object|{}|\[\]/i.test(t),n=(t.match(/for|while/g)||[]).length;let d="O(1)",o="O(1)",p="Constant time and space operations.";return r?(d="O(n²)",p="Nested loops suggest quadratic time complexity."):n>0&&(d="O(n)",p="Single loop iteration through the input."),i&&(d=r?"O(2^n)":"O(n)",o="O(n)",p="Recursive calls add to the call stack."),a&&(o="O(n)",!r&&!i&&(p="Uses additional data structure for efficient lookups.")),{time:d,space:o,explanation:p}}const Ke=Object.freeze(Object.defineProperty({__proto__:null,analyzeCodeComplexity:Ae,getAllChallenges:ge,getAllChallengesAsync:ze,getChallengeAttempts:se,getChallengeById:_e,getCodingStats:Re,getRandomChallenge:Oe,getSolvedChallengeIds:Fe,runTests:ye,runTestsAsync:Te,saveChallengeAttempt:qe},Symbol.toStringTag,{value:"Module"}));function S(t,r){const i=t.toLowerCase(),a=r.toLowerCase();if(a===i)return 1e3;if(a.includes(i))return 500+(100-r.length);const n=i.split(/\s+/).filter(u=>u.length>1),d=a.split(/\s+/);let o=0,p=0;for(const u of n){let f=!1;for(const m of d){if(m===u){o+=50,f=!0;break}if(m.startsWith(u)){o+=30,f=!0;break}if(m.includes(u)){o+=15,f=!0;break}}f?(p++,o+=p*5):p=0}if(o===0&&i.length>=3){let u=0,f=-1;for(const m of i){const g=a.indexOf(m,f+1);g>-1&&(u+=1,g===f+1&&(u+=.5),f=g)}u>=i.length*.6&&(o=u)}return o}function Le(t,r=20){if(!t||t.trim().length<2)return[];const i=ve(),a=new Map;for(const d of i){const o=a.get(d.id),p=[];let u=0;const f=S(t,d.question);f>0&&(u+=f*3,p.push("question"));const m=S(t,d.answer);m>0&&(u+=m*1.5,p.push("answer"));const g=d.tags?.join(" ")||"",y=S(t,g);y>0&&(u+=y*2,p.push("tags"));const N=`${d.channel} ${d.subChannel}`.replace(/-/g," "),v=S(t,N);v>0&&(u+=v*1.5,p.push("channel")),u>0&&(!o||u>o.score)&&a.set(d.id,{question:d,score:u,matchedIn:p,type:"question"})}const n=Array.from(a.values());return n.sort((d,o)=>o.score-d.score),n.slice(0,r)}function Ie(t,r=10){if(!t||t.trim().length<2)return[];const i=ge(),a=[];for(const n of i){const d=[];let o=0;const p=S(t,n.title);p>0&&(o+=p*3,d.push("title"));const u=S(t,n.description);u>0&&(o+=u*1.5,d.push("description"));const f=n.tags?.join(" ")||"",m=S(t,f);m>0&&(o+=m*2,d.push("tags"));const g=S(t,n.category.replace(/-/g," "));g>0&&(o+=g*1.5,d.push("category")),o>0&&a.push({challenge:n,score:o,matchedIn:d,type:"coding"})}return a.sort((n,d)=>d.score-n.score),a.slice(0,r)}function Pe(t,r=20){const i=Le(t,r),a=Ie(t,Math.floor(r/2)),n=[...i,...a];return n.sort((d,o)=>o.score-d.score),n.slice(0,r)}function be(t,r){const[i,a]=h.useState(t);return h.useEffect(()=>{const n=setTimeout(()=>{a(t)},r);return()=>{clearTimeout(n)}},[t,r]),i}function E(t){return t.type==="question"}function U(t){return t.type==="coding"}function Ye({isOpen:t,onClose:r}){const[i,a]=h.useState(""),[n,d]=h.useState([]),[o,p]=h.useState([]),[u,f]=h.useState(0),[m,g]=h.useState(!1),[y,N]=h.useState("all"),v=h.useRef(null),M=h.useRef(null),[,j]=le(),{isSubscribed:A,subscribeChannel:L}=ue(),{toast:V}=pe(),C=be(i,150),O=[{id:"all",label:"All",icon:e.jsx(he,{className:"w-3 h-3"})},{id:"coding",label:"Coding",icon:e.jsx(ne,{className:"w-3 h-3"})},{id:"company",label:"Company",icon:e.jsx(re,{className:"w-3 h-3"})},{id:"video",label:"Video",icon:e.jsx(ae,{className:"w-3 h-3"})},{id:"diagram",label:"Diagram",icon:e.jsx(ie,{className:"w-3 h-3"})}];h.useEffect(()=>{t&&(setTimeout(()=>{v.current?.focus(),M.current?.focus()},100),a(""),d([]),p([]),f(0),N("all"))},[t]),h.useEffect(()=>{if(C.length>=2){g(!0);const s=Pe(C,50);d(s),f(0),g(!1)}else d([])},[C]),h.useEffect(()=>{let s=n;switch(y){case"coding":s=n.filter(c=>U(c));break;case"company":s=n.filter(c=>E(c)&&c.question.companies&&c.question.companies.length>0);break;case"video":s=n.filter(c=>E(c)&&(c.question.videos?.shortVideo||c.question.videos?.longVideo));break;case"diagram":s=n.filter(c=>E(c)&&(c.question.diagram?.length??0)>20);break;default:s=n}p(s.slice(0,15)),f(0)},[n,y]);const $=h.useCallback(s=>{s.key==="ArrowDown"?(s.preventDefault(),f(c=>Math.min(c+1,o.length-1))):s.key==="ArrowUp"?(s.preventDefault(),f(c=>Math.max(c-1,0))):s.key==="Enter"&&o[u]?(s.preventDefault(),I(o[u])):s.key==="Escape"&&r()},[o,u,r]),I=s=>{if(U(s)){j(`/coding/${s.challenge.id}`),r();return}const{question:c}=s;if(!A(c.channel)){L(c.channel);const T=de.find(l=>l.id===c.channel);V({title:"Channel Subscribed",description:`You've been subscribed to ${T?.name||c.channel}`})}j(`/channel/${c.channel}/${c.id}`),r()},G=s=>{switch(s){case"beginner":return e.jsx(Q,{className:"w-3 h-3 text-green-400"});case"intermediate":return e.jsx(H,{className:"w-3 h-3 text-yellow-400"});case"advanced":return e.jsx(me,{className:"w-3 h-3 text-red-400"});default:return null}},D=s=>s==="all"?n.length:s==="coding"?n.filter(c=>U(c)).length:s==="company"?n.filter(c=>E(c)&&c.question.companies?.length).length:s==="video"?n.filter(c=>E(c)&&(c.question.videos?.shortVideo||c.question.videos?.longVideo)).length:s==="diagram"?n.filter(c=>E(c)&&(c.question.diagram?.length??0)>20).length:0,_=(s,c)=>{if(U(s))return e.jsxs("button",{onClick:()=>I(s),className:`w-full px-4 py-4 text-left flex items-start gap-3 transition-colors active:bg-primary/10 ${c===u?"bg-primary/20":"hover:bg-muted/50"}`,children:[e.jsxs("div",{className:"flex-1 min-w-0",children:[e.jsxs("div",{className:"flex items-center gap-2 mb-1",children:[s.challenge.difficulty==="easy"?e.jsx(Q,{className:"w-3 h-3 text-green-400"}):e.jsx(H,{className:"w-3 h-3 text-yellow-400"}),e.jsxs("span",{className:"text-[10px] text-muted-foreground uppercase tracking-wider",children:["coding/",s.challenge.category]}),e.jsxs("span",{className:"flex items-center gap-0.5 text-[9px] text-purple-600 dark:text-purple-400 bg-purple-400/10 px-1.5 py-0.5 rounded ml-auto",children:[e.jsx(ne,{className:"w-2.5 h-2.5"})," Challenge"]})]}),e.jsx("p",{className:"text-sm text-foreground line-clamp-2",children:s.challenge.title}),e.jsx("p",{className:"text-xs text-muted-foreground line-clamp-1 mt-1",children:s.challenge.description})]}),e.jsx(X,{className:`w-4 h-4 shrink-0 mt-1 ${c===u?"text-primary":"text-muted-foreground/30"}`})]},`coding-${s.challenge.id}-${c}`);const T=(s.question.companies?.length??0)>0,l=s.question.videos?.shortVideo||s.question.videos?.longVideo,x=(s.question.diagram?.length??0)>20;return e.jsxs("button",{onClick:()=>I(s),className:`w-full px-4 py-4 text-left flex items-start gap-3 transition-colors active:bg-primary/10 ${c===u?"bg-primary/20":"hover:bg-muted/50"}`,children:[e.jsxs("div",{className:"flex-1 min-w-0",children:[e.jsxs("div",{className:"flex items-center gap-2 mb-1",children:[G(s.question.difficulty),e.jsxs("span",{className:"text-[10px] text-muted-foreground uppercase tracking-wider",children:[s.question.channel,"/",s.question.subChannel]}),e.jsxs("div",{className:"flex items-center gap-1 ml-auto",children:[T&&e.jsxs("span",{className:"flex items-center gap-0.5 text-[9px] text-blue-600 dark:text-blue-400 bg-blue-400/10 px-1.5 py-0.5 rounded",children:[e.jsx(re,{className:"w-2.5 h-2.5"}),s.question.companies.length]}),l&&e.jsx("span",{className:"flex items-center text-[9px] text-red-600 dark:text-red-400 bg-red-400/10 px-1.5 py-0.5 rounded",children:e.jsx(ae,{className:"w-2.5 h-2.5"})}),x&&e.jsx("span",{className:"flex items-center text-[9px] text-green-600 dark:text-green-400 bg-green-400/10 px-1.5 py-0.5 rounded",children:e.jsx(ie,{className:"w-2.5 h-2.5"})})]})]}),e.jsx("p",{className:"text-sm text-foreground line-clamp-2",children:s.question.question}),e.jsx("p",{className:"text-xs text-muted-foreground line-clamp-1 mt-1",children:s.question.answer}),s.question.tags?.length>0&&e.jsxs("div",{className:"flex items-center gap-1 mt-2",children:[e.jsx(Ne,{className:"w-3 h-3 text-muted-foreground/50"}),e.jsx("span",{className:"text-[10px] text-muted-foreground/50",children:s.question.tags.slice(0,3).map(je).join(", ")})]})]}),e.jsx(X,{className:`w-4 h-4 shrink-0 mt-1 ${c===u?"text-primary":"text-muted-foreground/30"}`})]},`question-${s.question.id}-${c}`)},P=()=>e.jsxs("div",{className:"p-8 text-center text-muted-foreground",children:[e.jsx(k,{className:"w-12 h-12 mx-auto mb-4 opacity-30"}),e.jsx("p",{className:"text-base mb-1",children:"Type to search"}),e.jsx("p",{className:"text-sm opacity-70 mb-6",children:"Search questions, topics, or tags"}),e.jsx("div",{className:"flex flex-wrap justify-center gap-2",children:["react hooks","system design","sql joins","kubernetes"].map(s=>e.jsx("button",{onClick:()=>a(s),className:"px-4 py-2 text-sm bg-muted hover:bg-muted/80 border border-border rounded-full transition-colors active:scale-95",children:s},s))})]}),Y=()=>e.jsxs("div",{className:"p-8 text-center text-muted-foreground",children:[e.jsx(k,{className:"w-12 h-12 mx-auto mb-3 opacity-30"}),e.jsxs("p",{className:"text-base",children:['No results for "',i,'"']}),e.jsx("p",{className:"text-sm mt-2 opacity-70",children:"Try different keywords"})]});return t?e.jsx(J,{children:t&&e.jsxs(e.Fragment,{children:[e.jsxs(F.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},className:"lg:hidden fixed inset-0 z-[200] bg-black/95 backdrop-blur-xl flex flex-col",style:{top:0,left:0,right:0,bottom:0,position:"fixed"},"data-testid":"search-modal-mobile",children:[e.jsxs("div",{className:"flex items-center justify-between px-4 h-14 border-b border-white/10 flex-shrink-0",children:[e.jsx("h2",{className:"font-semibold text-lg text-white",children:"Search"}),e.jsx("button",{onClick:r,className:"p-2 -mr-2 hover:bg-white/10 rounded-xl transition-colors","data-testid":"search-close-btn",children:e.jsx(R,{className:"w-5 h-5 text-white/70"})})]}),e.jsx("div",{className:"px-4 py-3 flex-shrink-0",children:e.jsxs("div",{className:"flex items-center gap-3 px-4 py-3 bg-white/5 border border-white/10 rounded-2xl",children:[e.jsx(k,{className:"w-5 h-5 text-white/50 flex-shrink-0"}),e.jsx("input",{ref:M,type:"text",value:i,onChange:s=>a(s.target.value),onKeyDown:$,placeholder:"Search questions...",className:"flex-1 bg-transparent text-white text-base outline-none placeholder:text-white/30",autoComplete:"off",spellCheck:!1,"data-testid":"search-input-mobile"}),i&&e.jsx("button",{onClick:()=>a(""),className:"p-1.5 hover:bg-white/10 rounded-full flex-shrink-0",children:e.jsx(R,{className:"w-4 h-4 text-white/50"})})]})}),n.length>0&&e.jsx("div",{className:"flex items-center gap-2 px-4 py-2 overflow-x-auto no-scrollbar flex-shrink-0",children:O.map(s=>{const c=D(s.id);return e.jsxs("button",{onClick:()=>N(s.id),disabled:c===0&&s.id!=="all",className:`flex items-center gap-1.5 px-3 py-1.5 text-xs rounded-full transition-all flex-shrink-0 ${y===s.id?"bg-primary text-white font-semibold":c>0?"bg-white/10 text-white/70":"bg-white/5 text-white/30"}`,children:[s.icon," ",s.label," (",c,")"]},s.id)})}),e.jsxs("div",{className:"flex-1 overflow-y-auto",children:[m&&e.jsx("div",{className:"p-8 text-center",children:e.jsx("div",{className:"w-6 h-6 border-2 border-primary/30 border-t-primary rounded-full animate-spin mx-auto"})}),!m&&i.length>=2&&o.length===0&&Y(),!m&&o.length>0&&e.jsx("div",{className:"py-2",children:o.map((s,c)=>_(s,c))}),!m&&i.length<2&&P()]}),e.jsx("div",{className:"px-4 py-3 border-t border-white/10 flex-shrink-0",style:{paddingBottom:"max(env(safe-area-inset-bottom), 12px)"},children:e.jsx("p",{className:"text-sm text-white/40 text-center",children:o.length>0?`${o.length} results`:"Tap to search"})})]}),e.jsx(F.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},className:"hidden lg:flex fixed inset-0 z-[200] bg-black/60 backdrop-blur-sm items-start justify-center pt-[10vh] px-4",onClick:r,"data-testid":"search-modal-desktop",children:e.jsxs(F.div,{initial:{opacity:0,y:-20,scale:.95},animate:{opacity:1,y:0,scale:1},exit:{opacity:0,y:-20,scale:.95},className:"w-full max-w-2xl bg-card border border-border rounded-xl shadow-2xl overflow-hidden flex flex-col max-h-[80vh]",onClick:s=>s.stopPropagation(),children:[e.jsxs("div",{className:"flex items-center gap-3 p-4 border-b border-border",children:[e.jsx(k,{className:"w-5 h-5 text-muted-foreground"}),e.jsx("input",{ref:v,type:"text",value:i,onChange:s=>a(s.target.value),onKeyDown:$,placeholder:"Search questions, topics, tags...",className:"flex-1 bg-transparent text-foreground text-lg outline-none placeholder:text-muted-foreground/50",autoComplete:"off",spellCheck:!1,"data-testid":"search-input-desktop"}),i&&e.jsx("button",{onClick:()=>a(""),className:"p-1.5 hover:bg-muted rounded-full",children:e.jsx(R,{className:"w-4 h-4 text-muted-foreground"})}),e.jsx("kbd",{className:"px-2 py-1 text-[10px] text-muted-foreground bg-muted border border-border rounded",children:"ESC"})]}),n.length>0&&e.jsxs("div",{className:"flex items-center gap-2 px-4 py-2 border-b border-border bg-muted/30 flex-wrap",children:[e.jsx("span",{className:"text-[10px] text-muted-foreground uppercase tracking-wider mr-1",children:"Filter:"}),O.map(s=>{const c=D(s.id);return e.jsxs("button",{onClick:()=>N(s.id),disabled:c===0&&s.id!=="all",className:`flex items-center gap-1.5 px-2.5 py-1 text-[11px] rounded-full transition-all ${y===s.id?"bg-primary text-primary-foreground font-bold":c>0?"bg-muted text-muted-foreground hover:bg-muted/80":"bg-muted/50 text-muted-foreground/50 cursor-not-allowed"}`,children:[s.icon," ",s.label," ",e.jsxs("span",{className:"text-[9px] opacity-70",children:["(",c,")"]})]},s.id)})]}),e.jsxs("div",{className:"flex-1 overflow-y-auto",children:[m&&e.jsx("div",{className:"p-8 text-center",children:e.jsx("div",{className:"w-6 h-6 border-2 border-primary/30 border-t-primary rounded-full animate-spin mx-auto"})}),!m&&i.length>=2&&o.length===0&&Y(),!m&&o.length>0&&e.jsx("div",{className:"py-2",children:o.map((s,c)=>_(s,c))}),!m&&i.length<2&&P()]}),e.jsxs("div",{className:"px-4 py-3 border-t border-border flex items-center justify-between text-xs text-muted-foreground",children:[e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsxs("span",{children:[e.jsx("kbd",{className:"px-1.5 py-0.5 bg-muted rounded text-[10px]",children:"↑↓"})," Navigate"]}),e.jsxs("span",{children:[e.jsx("kbd",{className:"px-1.5 py-0.5 bg-muted rounded text-[10px]",children:"↵"})," Select"]}),e.jsxs("span",{children:[e.jsx("kbd",{className:"px-1.5 py-0.5 bg-muted rounded text-[10px]",children:"ESC"})," Close"]})]}),o.length>0&&e.jsxs("span",{children:[o.length," results"]})]})]})})]})}):null}function Me({isOpen:t,onClose:r}){const[i,a]=h.useState(""),[n,d]=h.useState([]),[o,p]=h.useState(0),[u,f]=h.useState(!1),[m,g]=h.useState(!0),[y,N]=h.useState(null),[v,M]=h.useState({}),[j,A]=h.useState(null),[L,V]=h.useState(!1),C=h.useRef(null),O=h.useRef(null),[,$]=le(),{isSubscribed:I,subscribeChannel:G}=ue(),{toast:D}=pe(),_=be(i,200);h.useEffect(()=>{const l=()=>V(window.innerWidth<1024);return l(),window.addEventListener("resize",l),()=>window.removeEventListener("resize",l)},[]),h.useEffect(()=>{async function l(){try{if(!document.querySelector('link[href*="pagefind"]')){const w=document.createElement("link");w.rel="stylesheet",w.href="/pagefind/pagefind-ui.css",document.head.appendChild(w)}if(!window.pagefind){await new Promise((z,B)=>{const b=document.createElement("script");b.src="/pagefind/pagefind.js",b.type="module",b.onload=()=>z(),b.onerror=()=>B(new Error("Failed to load Pagefind script")),document.head.appendChild(b)});let w=0;for(;!window.pagefind&&w<50;)await new Promise(z=>setTimeout(z,100)),w++}if(!window.pagefind)throw new Error("Pagefind not available");await window.pagefind.init(),O.current=window.pagefind;const x=await window.pagefind.filters();M(x),g(!1),N(null)}catch(x){console.error("Failed to load Pagefind:",x),N("Search index not available. Using fallback search."),g(!1)}}t&&!O.current&&l()},[t]),h.useEffect(()=>{t&&(setTimeout(()=>C.current?.focus(),100),a(""),d([]),p(0),A(null))},[t]),h.useEffect(()=>{async function l(){if(!O.current||_.length<2){d([]);return}f(!0);try{const x={};j&&(x.filters={difficulty:j});const w=await O.current.search(_,x),z=await Promise.all(w.results.slice(0,15).map(async B=>{const b=await B.data();return{id:b.meta.id||B.id,title:b.meta.title,excerpt:b.excerpt,channel:b.meta.channel||"",difficulty:b.meta.difficulty||"intermediate"}}));d(z),p(0)}catch(x){console.error("Search error:",x)}finally{f(!1)}}l()},[_,j]);const P=h.useCallback(l=>{l.key==="ArrowDown"?(l.preventDefault(),p(x=>Math.min(x+1,n.length-1))):l.key==="ArrowUp"?(l.preventDefault(),p(x=>Math.max(x-1,0))):l.key==="Enter"&&n[o]?(l.preventDefault(),Y(n[o])):l.key==="Escape"&&r()},[n,o,r]),Y=l=>{const x=l.channel;if(x&&!I(x)){G(x);const w=de.find(z=>z.id===x);D({title:"Channel Subscribed",description:`You've been subscribed to ${w?.name||x}`})}x&&$(`/channel/${x}/${l.id}`),r()},s=l=>{switch(l){case"beginner":return e.jsx(Q,{className:"w-3 h-3 text-green-400"});case"intermediate":return e.jsx(H,{className:"w-3 h-3 text-yellow-400"});case"advanced":return e.jsx(me,{className:"w-3 h-3 text-red-400"});default:return null}},c=()=>!v.difficulty||Object.keys(v.difficulty).length===0?null:e.jsxs("div",{className:`flex items-center gap-2 px-4 py-2 border-b border-border bg-muted/30 overflow-x-auto no-scrollbar flex-shrink-0 ${L?"":"flex-wrap"}`,children:[!L&&e.jsx("span",{className:"text-[10px] text-muted-foreground uppercase tracking-wider mr-1",children:"Difficulty:"}),e.jsxs("button",{onClick:()=>A(null),className:`flex items-center gap-1.5 px-3 py-1.5 text-xs rounded-full transition-all flex-shrink-0 ${j?"bg-muted text-muted-foreground hover:bg-muted/80":"bg-primary text-primary-foreground font-semibold"}`,children:[e.jsx(he,{className:"w-3 h-3"})," All"]}),Object.entries(v.difficulty).map(([l,x])=>e.jsxs("button",{onClick:()=>A(j===l?null:l),className:`flex items-center gap-1.5 px-3 py-1.5 text-xs rounded-full transition-all flex-shrink-0 ${j===l?"bg-primary text-primary-foreground font-semibold":"bg-muted text-muted-foreground hover:bg-muted/80"}`,children:[s(l)," ",l," (",x,")"]},l))]}),T=()=>e.jsxs("div",{className:"flex-1 overflow-y-auto",children:[u&&e.jsx("div",{className:"p-8 text-center",children:e.jsx(K,{className:"w-6 h-6 animate-spin mx-auto text-muted-foreground"})}),!u&&i.length>=2&&n.length===0&&e.jsxs("div",{className:"p-8 text-center text-muted-foreground",children:[e.jsx(k,{className:"w-12 h-12 mx-auto mb-3 opacity-30"}),e.jsxs("p",{className:"text-base",children:['No questions found for "',i,'"']}),e.jsx("p",{className:"text-sm mt-2 opacity-70",children:"Try different keywords"})]}),!u&&n.length>0&&e.jsx("div",{className:"py-2",children:n.map((l,x)=>e.jsxs("button",{onClick:()=>Y(l),className:`w-full px-4 py-4 text-left flex items-start gap-3 transition-colors active:bg-primary/10 ${x===o?"bg-primary/20":"hover:bg-muted/50"}`,children:[e.jsxs("div",{className:"flex-1 min-w-0",children:[e.jsxs("div",{className:"flex items-center gap-2 mb-1",children:[s(l.difficulty),e.jsx("span",{className:"text-[10px] text-muted-foreground uppercase tracking-wider",children:l.channel})]}),e.jsx("p",{className:"text-sm text-foreground line-clamp-2",children:l.title}),e.jsx("p",{className:"text-xs text-muted-foreground line-clamp-2 mt-1",dangerouslySetInnerHTML:{__html:l.excerpt}})]}),e.jsx(X,{className:`w-4 h-4 shrink-0 mt-1 ${x===o?"text-primary":"text-muted-foreground/30"}`})]},l.id))}),!u&&i.length<2&&!m&&e.jsxs("div",{className:"p-8 text-center text-muted-foreground",children:[e.jsx(k,{className:"w-12 h-12 mx-auto mb-4 opacity-30"}),e.jsx("p",{className:"text-base mb-1",children:"Type at least 2 characters"}),e.jsx("p",{className:"text-sm opacity-70 mb-6",children:"Search questions, topics, or tags"}),e.jsx("div",{className:"flex flex-wrap justify-center gap-2",children:["react hooks","system design","sql joins","kubernetes"].map(l=>e.jsx("button",{onClick:()=>a(l),className:"px-4 py-2 text-sm bg-muted hover:bg-muted/80 border border-border rounded-full transition-colors active:scale-95",children:l},l))})]})]});return t?L?e.jsx(J,{children:e.jsxs(F.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},className:"fixed inset-0 z-[200] bg-background flex flex-col","data-testid":"pagefind-search-mobile",children:[e.jsxs("div",{className:"flex items-center justify-between px-4 h-14 border-b border-border bg-card flex-shrink-0 pt-safe",children:[e.jsx("h2",{className:"font-semibold text-lg",children:"Search"}),e.jsx("button",{onClick:r,className:"p-2 -mr-2 hover:bg-muted rounded-full","data-testid":"search-close-btn",children:e.jsx(R,{className:"w-5 h-5"})})]}),e.jsxs("div",{className:"flex items-center gap-3 px-4 py-3 border-b border-border bg-card flex-shrink-0",children:[m?e.jsx(K,{className:"w-5 h-5 text-muted-foreground animate-spin flex-shrink-0"}):e.jsx(k,{className:"w-5 h-5 text-muted-foreground flex-shrink-0"}),e.jsx("input",{ref:C,type:"text",value:i,onChange:l=>a(l.target.value),onKeyDown:P,placeholder:m?"Loading search...":"Search questions...",className:"flex-1 bg-transparent text-foreground text-base outline-none placeholder:text-muted-foreground/50",autoComplete:"off",spellCheck:!1,disabled:m,"data-testid":"search-input"}),i&&e.jsx("button",{onClick:()=>a(""),className:"p-1.5 hover:bg-muted rounded-full flex-shrink-0",children:e.jsx(R,{className:"w-4 h-4 text-muted-foreground"})})]}),y&&e.jsx("div",{className:"px-4 py-2 bg-yellow-500/10 border-b border-yellow-500/20 text-yellow-600 dark:text-yellow-400 text-xs flex-shrink-0",children:y}),c(),T(),e.jsx("div",{className:"px-4 py-3 border-t border-border bg-card flex-shrink-0",style:{paddingBottom:"max(env(safe-area-inset-bottom), 12px)"},children:e.jsx("p",{className:"text-sm text-muted-foreground text-center",children:n.length>0?`${n.length} result${n.length!==1?"s":""}`:"Tap to search"})})]})}):e.jsx(J,{children:e.jsx(F.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},className:"fixed inset-0 z-[200] bg-background/80 backdrop-blur-sm flex items-start justify-center pt-[10vh] px-4",onClick:r,"data-testid":"pagefind-search-desktop",children:e.jsxs(F.div,{initial:{opacity:0,y:-20,scale:.95},animate:{opacity:1,y:0,scale:1},exit:{opacity:0,y:-20,scale:.95},className:"w-full max-w-2xl bg-card border border-border rounded-xl shadow-2xl overflow-hidden flex flex-col max-h-[80vh]",onClick:l=>l.stopPropagation(),children:[e.jsxs("div",{className:"flex items-center gap-3 p-4 border-b border-border",children:[m?e.jsx(K,{className:"w-5 h-5 text-muted-foreground animate-spin"}):e.jsx(k,{className:"w-5 h-5 text-muted-foreground"}),e.jsx("input",{ref:C,type:"text",value:i,onChange:l=>a(l.target.value),onKeyDown:P,placeholder:m?"Loading search...":"Search questions, topics, tags...",className:"flex-1 bg-transparent text-foreground text-lg outline-none placeholder:text-muted-foreground/50",autoComplete:"off",spellCheck:!1,disabled:m,"data-testid":"search-input"}),i&&e.jsx("button",{onClick:()=>a(""),className:"p-1.5 hover:bg-muted rounded-full",children:e.jsx(R,{className:"w-4 h-4 text-muted-foreground"})}),e.jsx("kbd",{className:"px-2 py-1 text-[10px] text-muted-foreground bg-muted border border-border rounded",children:"ESC"})]}),y&&e.jsx("div",{className:"px-4 py-2 bg-yellow-500/10 border-b border-yellow-500/20 text-yellow-600 dark:text-yellow-400 text-xs",children:y}),c(),T(),e.jsxs("div",{className:"px-4 py-3 border-t border-border flex items-center justify-between text-xs text-muted-foreground",children:[e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsxs("span",{children:[e.jsx("kbd",{className:"px-1.5 py-0.5 bg-muted rounded text-[10px]",children:"↑↓"})," Navigate"]}),e.jsxs("span",{children:[e.jsx("kbd",{className:"px-1.5 py-0.5 bg-muted rounded text-[10px]",children:"↵"})," Select"]}),e.jsxs("span",{children:[e.jsx("kbd",{className:"px-1.5 py-0.5 bg-muted rounded text-[10px]",children:"ESC"})," Close"]})]}),n.length>0&&e.jsxs("span",{children:[n.length," result",n.length!==1?"s":""]})]})]})})}):null}const ce="search-provider";function $e(){const[t,r]=h.useState(()=>typeof window>"u"?"fuzzy":localStorage.getItem(ce)||"fuzzy"),[i,a]=h.useState(!1);return h.useEffect(()=>{async function o(){try{const p=await fetch("/pagefind/pagefind.js",{method:"HEAD"});a(p.ok)}catch{a(!1)}}o()},[]),{provider:t==="pagefind"&&!i?"fuzzy":t,setProvider:o=>{r(o),localStorage.setItem(ce,o)},pagefindAvailable:i}}function Je({isOpen:t,onClose:r}){const{provider:i}=$e();return i==="pagefind"?e.jsx(Me,{isOpen:t,onClose:r}):e.jsx(Ye,{isOpen:t,onClose:r})}export{he as F,k as S,Je as U,ae as V,Re as a,_e as b,Ae as c,Oe as d,ge as e,Ke as f,Fe as g,Te as r,qe as s};
