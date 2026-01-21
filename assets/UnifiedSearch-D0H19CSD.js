import{d as U,a5 as ge,g as ye,r as h,u as ce,k as le,j as e,A as G,m as A,X as I,S as O,Z as K,s as be}from"./index-Bvf4w4sM.js";import{u as ue,T as J}from"./use-unified-toast-nK62QkqF.js";import{T as te,C as se,b as ne,G as re,F as de,L as V}from"./tag-BsHiKPeT.js";/**
 * @license lucide-react v0.545.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const we=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]],Q=U("arrow-right",we);/**
 * @license lucide-react v0.545.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ve=[["path",{d:"M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z",key:"sc7q7i"}]],pe=U("funnel",ve);/**
 * @license lucide-react v0.545.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const je=[["path",{d:"M12 19v3",key:"npa21l"}],["path",{d:"M19 10v2a7 7 0 0 1-14 0v-2",key:"1vc78b"}],["rect",{x:"9",y:"2",width:"6",height:"13",rx:"3",key:"s6n7sd"}]],Ie=U("mic",je);/**
 * @license lucide-react v0.545.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ne=[["path",{d:"m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5",key:"ftymec"}],["rect",{x:"2",y:"6",width:"14",height:"12",rx:"2",key:"158x01"}]],ie=U("video",Ne),me=[{title:"Reverse a String",description:"Write a function that reverses a string. The input string is given as an array of characters.",difficulty:"easy",category:"strings",tags:["string","two-pointers","recursion"],starterCode:{javascript:`function reverseString(s) {
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
    return curr`},complexity:{time:"O(n)",space:"O(1)",explanation:"We iterate from 3 to n once, using only two variables for state."},timeLimit:10}],H="coding-challenge-progress";let R=null,B=null;async function he(){return R||B||(B=(async()=>{try{const s=await fetch("/data/coding-challenges.json");if(!s.ok)throw new Error("Failed to load challenges");const o=(await s.json()).map(n=>({id:n.id,title:n.title,description:n.description,difficulty:n.difficulty,category:n.category,tags:n.tags||[],starterCode:n.starterCode||{javascript:"",python:""},testCases:(n.testCases||[]).map(i=>({id:i.id||String(Math.random()),input:i.input,expectedOutput:i.expectedOutput,isHidden:i.isHidden,description:i.description})),hints:n.hints||[],sampleSolution:n.solution||n.sampleSolution||{javascript:"",python:""},complexity:n.complexity||{time:"O(n)",space:"O(1)",explanation:""},timeLimit:n.timeLimit||15}));return R=o,o}catch(s){console.warn("Failed to load challenges from JSON, using fallback templates:",s);const r=me.map((o,n)=>({...o,id:`challenge-${n}`}));return R=r,r}})(),B)}function X(){return R||me.map((s,r)=>({...s,id:`challenge-${r}`}))}he();function Le(s){const r=X();let o=r;return s&&(o=r.filter(n=>n.difficulty===s)),o[Math.floor(Math.random()*o.length)]}function ke(){return X()}async function Me(){return he()}function Pe(s){return X().find(o=>o.id===s)||null}function Se(s,r,o){return o==="python"?r.testCases.map(n=>({testCaseId:n.id,passed:!1,error:"Use runTestsAsync for Python execution"})):r.testCases.map(n=>{try{return Ce(s,n,r)}catch(i){return{testCaseId:n.id,passed:!1,error:i instanceof Error?i.message:"Execution error"}}})}function ae(s){try{return JSON.stringify(JSON.parse(s))}catch{return s}}async function $e(s,r,o){if(o==="javascript")return Se(s,r,o);const{executePython:n,extractPythonFunctionName:i}=await ge(async()=>{const{executePython:u,extractPythonFunctionName:p}=await import("./pyodide-runner-BcYiMYai.js");return{executePython:u,extractPythonFunctionName:p}},[]),c=i(r.starterCode.python);if(!c)return r.testCases.map(u=>({testCaseId:u.id,passed:!1,error:"Could not find function definition in code"}));const l=[];for(const u of r.testCases){const p=await n(s,c,u.input);if(p.success&&p.output){const f=p.output,m=ae(f),x=ae(u.expectedOutput),y=m===x;l.push({testCaseId:u.id,passed:y,actualOutput:f,executionTime:p.executionTime})}else l.push({testCaseId:u.id,passed:!1,error:p.error||"Execution failed",executionTime:p.executionTime})}return l}function Ce(s,r,o){const n=performance.now();try{const i=o.starterCode.javascript.match(/function\s+(\w+)/),c=i?i[1]:"solution",l=`
      ${s}
      return ${c}(${r.input});
    `,p=new Function(l)(),f=performance.now()-n,m=JSON.stringify(p),x=r.expectedOutput,y=m===x;return{testCaseId:r.id,passed:y,actualOutput:m,executionTime:f}}catch(i){return{testCaseId:r.id,passed:!1,error:i instanceof Error?i.message:"Unknown error",executionTime:performance.now()-n}}}function Ye(s){try{const r=localStorage.getItem(H),o=r?JSON.parse(r):{attempts:[]};o.attempts.push(s),localStorage.setItem(H,JSON.stringify(o))}catch{}}function fe(){try{const s=localStorage.getItem(H);return(s?JSON.parse(s):{attempts:[]}).attempts}catch{return[]}}function De(){const s=fe();return new Set(s.filter(r=>r.passed).map(r=>r.challengeId))}function Be(){const s=fe(),r=s.filter(i=>i.passed),o=s.length>0?Math.round(s.reduce((i,c)=>i+c.timeSpent,0)/s.length):0,n={easy:{attempted:0,passed:0},medium:{attempted:0,passed:0}};return{totalAttempts:s.length,passedChallenges:r.length,averageTime:o,byDifficulty:n}}function We(s){const r=/for[\s\S]*for|while[\s\S]*while|for[\s\S]*while|while[\s\S]*for/.test(s),o=/function\s+(\w+)[\s\S]*\1\s*\(/.test(s),n=/Map|Set|Object|{}|\[\]/i.test(s),i=(s.match(/for|while/g)||[]).length;let c="O(1)",l="O(1)",u="Constant time and space operations.";return r?(c="O(n²)",u="Nested loops suggest quadratic time complexity."):i>0&&(c="O(n)",u="Single loop iteration through the input."),o&&(c=r?"O(2^n)":"O(n)",l="O(n)",u="Recursive calls add to the call stack."),n&&(l="O(n)",!r&&!o&&(u="Uses additional data structure for efficient lookups.")),{time:c,space:l,explanation:u}}function S(s,r){const o=s.toLowerCase(),n=r.toLowerCase();if(n===o)return 1e3;if(n.includes(o))return 500+(100-r.length);const i=o.split(/\s+/).filter(p=>p.length>1),c=n.split(/\s+/);let l=0,u=0;for(const p of i){let f=!1;for(const m of c){if(m===p){l+=50,f=!0;break}if(m.startsWith(p)){l+=30,f=!0;break}if(m.includes(p)){l+=15,f=!0;break}}f?(u++,l+=u*5):u=0}if(l===0&&o.length>=3){let p=0,f=-1;for(const m of o){const x=n.indexOf(m,f+1);x>-1&&(p+=1,x===f+1&&(p+=.5),f=x)}p>=o.length*.6&&(l=p)}return l}function Oe(s,r=20){if(!s||s.trim().length<2)return[];const o=ye(),n=new Map,i=s.match(/^(?:tag:|#)(.+)$/i),c=!!i,l=c?i[1].trim():s;for(const p of o){const f=n.get(p.id),m=[];let x=0;if(c){const y=p.tags?.join(" ")||"",b=S(l,y);b>0&&(x+=b*10,m.push("tags"))}else{const y=S(l,p.question);y>0&&(x+=y*3,m.push("question"));const b=S(l,p.answer);b>0&&(x+=b*1.5,m.push("answer"));const N=p.tags?.join(" ")||"",z=S(l,N);z>0&&(x+=z*4,m.push("tags"));const w=`${p.channel} ${p.subChannel}`.replace(/-/g," "),k=S(l,w);k>0&&(x+=k*1.5,m.push("channel"))}x>0&&(!f||x>f.score)&&n.set(p.id,{question:p,score:x,matchedIn:m,type:"question"})}const u=Array.from(n.values());return u.sort((p,f)=>f.score-p.score),u.slice(0,r)}function ze(s,r=10){if(!s||s.trim().length<2)return[];const o=ke(),n=[];for(const i of o){const c=[];let l=0;const u=S(s,i.title);u>0&&(l+=u*3,c.push("title"));const p=S(s,i.description);p>0&&(l+=p*1.5,c.push("description"));const f=i.tags?.join(" ")||"",m=S(s,f);m>0&&(l+=m*2,c.push("tags"));const x=S(s,i.category.replace(/-/g," "));x>0&&(l+=x*1.5,c.push("category")),l>0&&n.push({challenge:i,score:l,matchedIn:c,type:"coding"})}return n.sort((i,c)=>c.score-i.score),n.slice(0,r)}function _e(s,r=20){const o=Oe(s,r),n=ze(s,Math.floor(r/2)),i=[...o,...n];return i.sort((c,l)=>l.score-c.score),i.slice(0,r)}function xe(s,r){const[o,n]=h.useState(s);return h.useEffect(()=>{const i=setTimeout(()=>{n(s)},r);return()=>{clearTimeout(i)}},[s,r]),o}function C(s){return s.type==="question"}function W(s){return s.type==="coding"}function Te({isOpen:s,onClose:r,initialQuery:o}){const[n,i]=h.useState(""),[c,l]=h.useState([]),[u,p]=h.useState([]),[f,m]=h.useState(0),[x,y]=h.useState(!1),[b,N]=h.useState("all"),z=h.useRef(null),w=h.useRef(null),[,k]=ce(),{isSubscribed:$,subscribeChannel:Z}=le();ue();const _=xe(n,150);h.useEffect(()=>{s&&o&&i(o)},[s,o]);const T=[{id:"all",label:"All",icon:e.jsx(pe,{className:"w-3 h-3"})},{id:"tags",label:"Tags",icon:e.jsx(te,{className:"w-3 h-3"})},{id:"coding",label:"Coding",icon:e.jsx(se,{className:"w-3 h-3"})},{id:"company",label:"Company",icon:e.jsx(ne,{className:"w-3 h-3"})},{id:"video",label:"Video",icon:e.jsx(ie,{className:"w-3 h-3"})},{id:"diagram",label:"Diagram",icon:e.jsx(re,{className:"w-3 h-3"})}];h.useEffect(()=>{s&&(setTimeout(()=>{z.current?.focus(),w.current?.focus()},100),i(""),l([]),p([]),m(0),N("all"))},[s]),h.useEffect(()=>{if(_.length>=2){y(!0);const t=_e(_,50);l(t),m(0),y(!1)}else l([])},[_]),h.useEffect(()=>{let t=c;switch(b){case"tags":t=c.filter(a=>C(a)&&a.matchedIn.includes("tags"));break;case"coding":t=c.filter(a=>W(a));break;case"company":t=c.filter(a=>C(a)&&a.question.companies&&a.question.companies.length>0);break;case"video":t=c.filter(a=>C(a)&&(a.question.videos?.shortVideo||a.question.videos?.longVideo));break;case"diagram":t=c.filter(a=>C(a)&&(a.question.diagram?.length??0)>20);break;default:t=c}p(t.slice(0,15)),m(0)},[c,b]);const Y=h.useCallback(t=>{t.key==="ArrowDown"?(t.preventDefault(),m(a=>Math.min(a+1,u.length-1))):t.key==="ArrowUp"?(t.preventDefault(),m(a=>Math.max(a-1,0))):t.key==="Enter"&&u[f]?(t.preventDefault(),D(u[f])):t.key==="Escape"&&r()},[u,f,r]),D=t=>{if(W(t)){k(`/coding/${t.challenge.id}`),r();return}const{question:a}=t;k(`/channel/${a.channel}/${a.id}`),r()},ee=t=>{switch(t){case"beginner":return e.jsx(K,{className:"w-3 h-3 text-green-400"});case"intermediate":return e.jsx(J,{className:"w-3 h-3 text-yellow-400"});case"advanced":return e.jsx(de,{className:"w-3 h-3 text-red-400"});default:return null}},E=t=>t==="all"?c.length:t==="tags"?c.filter(a=>C(a)&&a.matchedIn.includes("tags")).length:t==="coding"?c.filter(a=>W(a)).length:t==="company"?c.filter(a=>C(a)&&a.question.companies?.length).length:t==="video"?c.filter(a=>C(a)&&(a.question.videos?.shortVideo||a.question.videos?.longVideo)).length:t==="diagram"?c.filter(a=>C(a)&&(a.question.diagram?.length??0)>20).length:0,L=(t,a)=>{if(W(t))return e.jsxs("button",{onClick:()=>D(t),className:`w-full px-4 py-4 text-left flex items-start gap-3 transition-colors active:bg-primary/10 ${a===f?"bg-primary/20":"hover:bg-muted/50"}`,children:[e.jsxs("div",{className:"flex-1 min-w-0",children:[e.jsxs("div",{className:"flex items-center gap-2 mb-1",children:[t.challenge.difficulty==="easy"?e.jsx(K,{className:"w-3 h-3 text-green-400"}):e.jsx(J,{className:"w-3 h-3 text-yellow-400"}),e.jsxs("span",{className:"text-[10px] text-muted-foreground uppercase tracking-wider",children:["coding/",t.challenge.category]}),e.jsxs("span",{className:"flex items-center gap-0.5 text-[9px] text-purple-600 dark:text-purple-400 bg-purple-400/10 px-1.5 py-0.5 rounded ml-auto",children:[e.jsx(se,{className:"w-2.5 h-2.5"})," Challenge"]})]}),e.jsx("p",{className:"text-sm text-foreground line-clamp-2",children:t.challenge.title}),e.jsx("p",{className:"text-xs text-muted-foreground line-clamp-1 mt-1",children:t.challenge.description})]}),e.jsx(Q,{className:`w-4 h-4 shrink-0 mt-1 ${a===f?"text-primary":"text-muted-foreground/30"}`})]},`coding-${t.challenge.id}-${a}`);const d=(t.question.companies?.length??0)>0,g=t.question.videos?.shortVideo||t.question.videos?.longVideo,j=(t.question.diagram?.length??0)>20;return e.jsxs("button",{onClick:()=>D(t),className:`w-full px-4 py-4 text-left flex items-start gap-3 transition-colors active:bg-primary/10 ${a===f?"bg-primary/20":"hover:bg-muted/50"}`,children:[e.jsxs("div",{className:"flex-1 min-w-0",children:[e.jsxs("div",{className:"flex items-center gap-2 mb-1",children:[ee(t.question.difficulty),e.jsxs("span",{className:"text-[10px] text-muted-foreground uppercase tracking-wider",children:[t.question.channel,"/",t.question.subChannel]}),e.jsxs("div",{className:"flex items-center gap-1 ml-auto",children:[d&&e.jsxs("span",{className:"flex items-center gap-0.5 text-[9px] text-blue-600 dark:text-blue-400 bg-blue-400/10 px-1.5 py-0.5 rounded",children:[e.jsx(ne,{className:"w-2.5 h-2.5"}),t.question.companies.length]}),g&&e.jsx("span",{className:"flex items-center text-[9px] text-red-600 dark:text-red-400 bg-red-400/10 px-1.5 py-0.5 rounded",children:e.jsx(ie,{className:"w-2.5 h-2.5"})}),j&&e.jsx("span",{className:"flex items-center text-[9px] text-green-600 dark:text-green-400 bg-green-400/10 px-1.5 py-0.5 rounded",children:e.jsx(re,{className:"w-2.5 h-2.5"})})]})]}),e.jsx("p",{className:"text-sm text-foreground line-clamp-2",children:t.question.question}),e.jsx("p",{className:"text-xs text-muted-foreground line-clamp-1 mt-1",children:t.question.answer}),t.question.tags?.length>0&&e.jsxs("div",{className:"flex items-center gap-1 mt-2 flex-wrap",children:[e.jsx(te,{className:"w-3 h-3 text-muted-foreground/50 shrink-0"}),t.question.tags.slice(0,5).map((q,F)=>e.jsx("span",{className:`text-[10px] px-1.5 py-0.5 rounded ${t.matchedIn.includes("tags")?"bg-primary/20 text-primary font-semibold border border-primary/30":"text-muted-foreground/70 bg-muted/50"}`,children:be(q)},F)),t.question.tags.length>5&&e.jsxs("span",{className:"text-[10px] text-muted-foreground/50",children:["+",t.question.tags.length-5]})]})]}),e.jsx(Q,{className:`w-4 h-4 shrink-0 mt-1 ${a===f?"text-primary":"text-muted-foreground/30"}`})]},`question-${t.question.id}-${a}`)},M=()=>e.jsxs("div",{className:"p-8 text-center text-muted-foreground",children:[e.jsx(O,{className:"w-12 h-12 mx-auto mb-4 opacity-30"}),e.jsx("p",{className:"text-base mb-1",children:"Type to search"}),e.jsx("p",{className:"text-sm opacity-70 mb-2",children:"Search questions, topics, or tags"}),e.jsxs("div",{className:"flex items-center justify-center gap-2 mb-6 text-xs",children:[e.jsx("span",{className:"px-2 py-1 bg-primary/10 text-primary rounded font-mono",children:"tag:react"}),e.jsx("span",{className:"text-muted-foreground/50",children:"or"}),e.jsx("span",{className:"px-2 py-1 bg-primary/10 text-primary rounded font-mono",children:"#kubernetes"})]}),e.jsx("div",{className:"flex flex-wrap justify-center gap-2",children:["react hooks","tag:system-design","#sql","kubernetes"].map(t=>e.jsx("button",{onClick:()=>i(t),className:"px-4 py-2 text-sm text-foreground bg-muted hover:bg-muted/80 border border-border rounded-full transition-colors active:scale-95",children:t},t))})]}),P=()=>e.jsxs("div",{className:"p-8 text-center text-muted-foreground",children:[e.jsx(O,{className:"w-12 h-12 mx-auto mb-3 opacity-30"}),e.jsxs("p",{className:"text-base",children:['No results for "',n,'"']}),e.jsx("p",{className:"text-sm mt-2 opacity-70",children:"Try different keywords"})]});return s?e.jsx(G,{children:s&&e.jsxs(e.Fragment,{children:[e.jsxs(A.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},className:"lg:hidden fixed inset-0 z-[200] bg-background/95 backdrop-blur-xl flex flex-col",style:{top:0,left:0,right:0,bottom:0,position:"fixed"},"data-testid":"search-modal-mobile",children:[e.jsxs("div",{className:"flex items-center justify-between px-4 h-14 border-b border-border flex-shrink-0",children:[e.jsx("h2",{className:"font-semibold text-lg text-foreground",children:"Search"}),e.jsx("button",{onClick:r,className:"p-2 -mr-2 hover:bg-muted rounded-xl transition-colors","data-testid":"search-close-btn",children:e.jsx(I,{className:"w-5 h-5 text-muted-foreground"})})]}),e.jsx("div",{className:"px-4 py-3 flex-shrink-0",children:e.jsxs("div",{className:"flex items-center gap-3 px-4 py-3 bg-muted border border-border rounded-2xl",children:[e.jsx(O,{className:"w-5 h-5 text-muted-foreground flex-shrink-0"}),e.jsx("input",{ref:w,type:"text",value:n,onChange:t=>i(t.target.value),onKeyDown:Y,placeholder:"Search questions...",className:"flex-1 bg-transparent text-foreground text-base outline-none placeholder:text-muted-foreground",autoComplete:"off",spellCheck:!1,"data-testid":"search-input-mobile"}),n&&e.jsx("button",{onClick:()=>i(""),className:"p-1.5 hover:bg-muted/80 rounded-full flex-shrink-0",children:e.jsx(I,{className:"w-4 h-4 text-muted-foreground"})})]})}),c.length>0&&e.jsx("div",{className:"flex items-center gap-2 px-4 py-2 overflow-x-auto no-scrollbar flex-shrink-0",children:T.map(t=>{const a=E(t.id);return e.jsxs("button",{onClick:()=>N(t.id),disabled:a===0&&t.id!=="all",className:`flex items-center gap-1.5 px-3 py-1.5 text-xs rounded-full transition-all flex-shrink-0 ${b===t.id?"bg-primary text-primary-foreground font-semibold":a>0?"bg-muted text-foreground":"bg-muted/50 text-muted-foreground/50"}`,children:[t.icon," ",t.label," (",a,")"]},t.id)})}),e.jsxs("div",{className:"flex-1 overflow-y-auto",children:[x&&e.jsx("div",{className:"p-8 text-center",children:e.jsx("div",{className:"w-6 h-6 border-2 border-primary/30 border-t-primary rounded-full animate-spin mx-auto"})}),!x&&n.length>=2&&u.length===0&&P(),!x&&u.length>0&&e.jsx("div",{className:"py-2",children:u.map((t,a)=>L(t,a))}),!x&&n.length<2&&M()]}),e.jsx("div",{className:"px-4 py-3 border-t border-border flex-shrink-0",style:{paddingBottom:"max(env(safe-area-inset-bottom), 12px)"},children:e.jsx("p",{className:"text-sm text-muted-foreground text-center",children:u.length>0?`${u.length} results`:"Tap to search"})})]}),e.jsx(A.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},className:"hidden lg:flex fixed inset-0 z-[200] bg-background/80 backdrop-blur-sm items-start justify-center pt-[10vh] px-4",onClick:r,"data-testid":"search-modal-desktop",children:e.jsxs(A.div,{initial:{opacity:0,y:-20,scale:.95},animate:{opacity:1,y:0,scale:1},exit:{opacity:0,y:-20,scale:.95},className:"w-full max-w-2xl bg-card border border-border rounded-xl shadow-2xl overflow-hidden flex flex-col max-h-[80vh]",onClick:t=>t.stopPropagation(),children:[e.jsxs("div",{className:"flex items-center gap-3 p-4 border-b border-border",children:[e.jsx(O,{className:"w-5 h-5 text-muted-foreground"}),e.jsx("input",{ref:z,type:"text",value:n,onChange:t=>i(t.target.value),onKeyDown:Y,placeholder:"Search questions, topics, tags...",className:"flex-1 bg-transparent text-foreground text-lg outline-none placeholder:text-muted-foreground/50",autoComplete:"off",spellCheck:!1,"data-testid":"search-input-desktop"}),n&&e.jsx("button",{onClick:()=>i(""),className:"p-1.5 hover:bg-muted rounded-full",children:e.jsx(I,{className:"w-4 h-4 text-muted-foreground"})}),e.jsx("kbd",{className:"px-2 py-1 text-[10px] text-muted-foreground bg-muted border border-border rounded",children:"ESC"})]}),c.length>0&&e.jsxs("div",{className:"flex items-center gap-2 px-4 py-2 border-b border-border bg-muted/30 flex-wrap",children:[e.jsx("span",{className:"text-[10px] text-muted-foreground uppercase tracking-wider mr-1",children:"Filter:"}),T.map(t=>{const a=E(t.id);return e.jsxs("button",{onClick:()=>N(t.id),disabled:a===0&&t.id!=="all",className:`flex items-center gap-1.5 px-2.5 py-1 text-[11px] rounded-full transition-all ${b===t.id?"bg-primary text-primary-foreground font-bold":a>0?"bg-muted text-muted-foreground hover:bg-muted/80":"bg-muted/50 text-muted-foreground/50 cursor-not-allowed"}`,children:[t.icon," ",t.label," ",e.jsxs("span",{className:"text-[9px] opacity-70",children:["(",a,")"]})]},t.id)})]}),e.jsxs("div",{className:"flex-1 overflow-y-auto",children:[x&&e.jsx("div",{className:"p-8 text-center",children:e.jsx("div",{className:"w-6 h-6 border-2 border-primary/30 border-t-primary rounded-full animate-spin mx-auto"})}),!x&&n.length>=2&&u.length===0&&P(),!x&&u.length>0&&e.jsx("div",{className:"py-2",children:u.map((t,a)=>L(t,a))}),!x&&n.length<2&&M()]}),e.jsxs("div",{className:"px-4 py-3 border-t border-border flex items-center justify-between text-xs text-muted-foreground",children:[e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsxs("span",{children:[e.jsx("kbd",{className:"px-1.5 py-0.5 bg-muted rounded text-[10px]",children:"↑↓"})," Navigate"]}),e.jsxs("span",{children:[e.jsx("kbd",{className:"px-1.5 py-0.5 bg-muted rounded text-[10px]",children:"↵"})," Select"]}),e.jsxs("span",{children:[e.jsx("kbd",{className:"px-1.5 py-0.5 bg-muted rounded text-[10px]",children:"ESC"})," Close"]})]}),u.length>0&&e.jsxs("span",{children:[u.length," results"]})]})]})})]})}):null}function qe({isOpen:s,onClose:r}){const[o,n]=h.useState(""),[i,c]=h.useState([]),[l,u]=h.useState(0),[p,f]=h.useState(!1),[m,x]=h.useState(!0),[y,b]=h.useState(null),[N,z]=h.useState({}),[w,k]=h.useState(null),[$,Z]=h.useState(!1),_=h.useRef(null),T=h.useRef(null),[,Y]=ce(),{isSubscribed:D,subscribeChannel:ee}=le();ue();const E=xe(o,200);h.useEffect(()=>{const d=()=>Z(window.innerWidth<1024);return d(),window.addEventListener("resize",d),()=>window.removeEventListener("resize",d)},[]),h.useEffect(()=>{async function d(){try{if(!document.querySelector('link[href*="pagefind"]')){const j=document.createElement("link");j.rel="stylesheet",j.href="/pagefind/pagefind-ui.css",document.head.appendChild(j)}if(!window.pagefind){await new Promise((q,F)=>{const v=document.createElement("script");v.src="/pagefind/pagefind.js",v.type="module",v.onload=()=>q(),v.onerror=()=>F(new Error("Failed to load Pagefind script")),document.head.appendChild(v)});let j=0;for(;!window.pagefind&&j<50;)await new Promise(q=>setTimeout(q,100)),j++}if(!window.pagefind)throw new Error("Pagefind not available");await window.pagefind.init(),T.current=window.pagefind;const g=await window.pagefind.filters();z(g),x(!1),b(null)}catch(g){console.error("Failed to load Pagefind:",g),b("Search index not available. Using fallback search."),x(!1)}}s&&!T.current&&d()},[s]),h.useEffect(()=>{s&&(setTimeout(()=>_.current?.focus(),100),n(""),c([]),u(0),k(null))},[s]),h.useEffect(()=>{async function d(){if(!T.current||E.length<2){c([]);return}f(!0);try{const g={};w&&(g.filters={difficulty:w});const j=await T.current.search(E,g),q=await Promise.all(j.results.slice(0,15).map(async F=>{const v=await F.data();return{id:v.meta.id||F.id,title:v.meta.title,excerpt:v.excerpt,channel:v.meta.channel||"",difficulty:v.meta.difficulty||"intermediate"}}));c(q),u(0)}catch(g){console.error("Search error:",g)}finally{f(!1)}}d()},[E,w]);const L=h.useCallback(d=>{d.key==="ArrowDown"?(d.preventDefault(),u(g=>Math.min(g+1,i.length-1))):d.key==="ArrowUp"?(d.preventDefault(),u(g=>Math.max(g-1,0))):d.key==="Enter"&&i[l]?(d.preventDefault(),M(i[l])):d.key==="Escape"&&r()},[i,l,r]),M=d=>{const g=d.channel;g&&Y(`/channel/${g}/${d.id}`),r()},P=d=>{switch(d){case"beginner":return e.jsx(K,{className:"w-3 h-3 text-green-400"});case"intermediate":return e.jsx(J,{className:"w-3 h-3 text-yellow-400"});case"advanced":return e.jsx(de,{className:"w-3 h-3 text-red-400"});default:return null}},t=()=>!N.difficulty||Object.keys(N.difficulty).length===0?null:e.jsxs("div",{className:`flex items-center gap-2 px-4 py-2 border-b border-border bg-muted/30 overflow-x-auto no-scrollbar flex-shrink-0 ${$?"":"flex-wrap"}`,children:[!$&&e.jsx("span",{className:"text-[10px] text-muted-foreground uppercase tracking-wider mr-1",children:"Difficulty:"}),e.jsxs("button",{onClick:()=>k(null),className:`flex items-center gap-1.5 px-3 py-1.5 text-xs rounded-full transition-all flex-shrink-0 ${w?"bg-muted text-muted-foreground hover:bg-muted/80":"bg-primary text-primary-foreground font-semibold"}`,children:[e.jsx(pe,{className:"w-3 h-3"})," All"]}),Object.entries(N.difficulty).map(([d,g])=>e.jsxs("button",{onClick:()=>k(w===d?null:d),className:`flex items-center gap-1.5 px-3 py-1.5 text-xs rounded-full transition-all flex-shrink-0 ${w===d?"bg-primary text-primary-foreground font-semibold":"bg-muted text-muted-foreground hover:bg-muted/80"}`,children:[P(d)," ",d," (",g,")"]},d))]}),a=()=>e.jsxs("div",{className:"flex-1 overflow-y-auto",children:[p&&e.jsx("div",{className:"p-8 text-center",children:e.jsx(V,{className:"w-6 h-6 animate-spin mx-auto text-muted-foreground"})}),!p&&o.length>=2&&i.length===0&&e.jsxs("div",{className:"p-8 text-center text-muted-foreground",children:[e.jsx(O,{className:"w-12 h-12 mx-auto mb-3 opacity-30"}),e.jsxs("p",{className:"text-base",children:['No questions found for "',o,'"']}),e.jsx("p",{className:"text-sm mt-2 opacity-70",children:"Try different keywords"})]}),!p&&i.length>0&&e.jsx("div",{className:"py-2",children:i.map((d,g)=>e.jsxs("button",{onClick:()=>M(d),className:`w-full px-4 py-4 text-left flex items-start gap-3 transition-colors active:bg-primary/10 ${g===l?"bg-primary/20":"hover:bg-muted/50"}`,children:[e.jsxs("div",{className:"flex-1 min-w-0",children:[e.jsxs("div",{className:"flex items-center gap-2 mb-1",children:[P(d.difficulty),e.jsx("span",{className:"text-[10px] text-muted-foreground uppercase tracking-wider",children:d.channel})]}),e.jsx("p",{className:"text-sm text-foreground line-clamp-2",children:d.title}),e.jsx("p",{className:"text-xs text-muted-foreground line-clamp-2 mt-1",dangerouslySetInnerHTML:{__html:d.excerpt}})]}),e.jsx(Q,{className:`w-4 h-4 shrink-0 mt-1 ${g===l?"text-primary":"text-muted-foreground/30"}`})]},d.id))}),!p&&o.length<2&&!m&&e.jsxs("div",{className:"p-8 text-center text-muted-foreground",children:[e.jsx(O,{className:"w-12 h-12 mx-auto mb-4 opacity-30"}),e.jsx("p",{className:"text-base mb-1",children:"Type at least 2 characters"}),e.jsx("p",{className:"text-sm opacity-70 mb-6",children:"Search questions, topics, or tags"}),e.jsx("div",{className:"flex flex-wrap justify-center gap-2",children:["react hooks","system design","sql joins","kubernetes"].map(d=>e.jsx("button",{onClick:()=>n(d),className:"px-4 py-2 text-sm bg-muted hover:bg-muted/80 border border-border rounded-full transition-colors active:scale-95",children:d},d))})]})]});return s?$?e.jsx(G,{children:e.jsxs(A.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},className:"fixed inset-0 z-[200] bg-background flex flex-col","data-testid":"pagefind-search-mobile",children:[e.jsxs("div",{className:"flex items-center justify-between px-4 h-14 border-b border-border bg-card flex-shrink-0 pt-safe",children:[e.jsx("h2",{className:"font-semibold text-lg",children:"Search"}),e.jsx("button",{onClick:r,className:"p-2 -mr-2 hover:bg-muted rounded-full","data-testid":"search-close-btn",children:e.jsx(I,{className:"w-5 h-5"})})]}),e.jsxs("div",{className:"flex items-center gap-3 px-4 py-3 border-b border-border bg-card flex-shrink-0",children:[m?e.jsx(V,{className:"w-5 h-5 text-muted-foreground animate-spin flex-shrink-0"}):e.jsx(O,{className:"w-5 h-5 text-muted-foreground flex-shrink-0"}),e.jsx("input",{ref:_,type:"text",value:o,onChange:d=>n(d.target.value),onKeyDown:L,placeholder:m?"Loading search...":"Search questions...",className:"flex-1 bg-transparent text-foreground text-base outline-none placeholder:text-muted-foreground/50",autoComplete:"off",spellCheck:!1,disabled:m,"data-testid":"search-input"}),o&&e.jsx("button",{onClick:()=>n(""),className:"p-1.5 hover:bg-muted rounded-full flex-shrink-0",children:e.jsx(I,{className:"w-4 h-4 text-muted-foreground"})})]}),y&&e.jsx("div",{className:"px-4 py-2 bg-yellow-500/10 border-b border-yellow-500/20 text-yellow-600 dark:text-yellow-400 text-xs flex-shrink-0",children:y}),t(),a(),e.jsx("div",{className:"px-4 py-3 border-t border-border bg-card flex-shrink-0",style:{paddingBottom:"max(env(safe-area-inset-bottom), 12px)"},children:e.jsx("p",{className:"text-sm text-muted-foreground text-center",children:i.length>0?`${i.length} result${i.length!==1?"s":""}`:"Tap to search"})})]})}):e.jsx(G,{children:e.jsx(A.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},className:"fixed inset-0 z-[200] bg-background/80 backdrop-blur-sm flex items-start justify-center pt-[10vh] px-4",onClick:r,"data-testid":"pagefind-search-desktop",children:e.jsxs(A.div,{initial:{opacity:0,y:-20,scale:.95},animate:{opacity:1,y:0,scale:1},exit:{opacity:0,y:-20,scale:.95},className:"w-full max-w-2xl bg-card border border-border rounded-xl shadow-2xl overflow-hidden flex flex-col max-h-[80vh]",onClick:d=>d.stopPropagation(),children:[e.jsxs("div",{className:"flex items-center gap-3 p-4 border-b border-border",children:[m?e.jsx(V,{className:"w-5 h-5 text-muted-foreground animate-spin"}):e.jsx(O,{className:"w-5 h-5 text-muted-foreground"}),e.jsx("input",{ref:_,type:"text",value:o,onChange:d=>n(d.target.value),onKeyDown:L,placeholder:m?"Loading search...":"Search questions, topics, tags...",className:"flex-1 bg-transparent text-foreground text-lg outline-none placeholder:text-muted-foreground/50",autoComplete:"off",spellCheck:!1,disabled:m,"data-testid":"search-input"}),o&&e.jsx("button",{onClick:()=>n(""),className:"p-1.5 hover:bg-muted rounded-full",children:e.jsx(I,{className:"w-4 h-4 text-muted-foreground"})}),e.jsx("kbd",{className:"px-2 py-1 text-[10px] text-muted-foreground bg-muted border border-border rounded",children:"ESC"})]}),y&&e.jsx("div",{className:"px-4 py-2 bg-yellow-500/10 border-b border-yellow-500/20 text-yellow-600 dark:text-yellow-400 text-xs",children:y}),t(),a(),e.jsxs("div",{className:"px-4 py-3 border-t border-border flex items-center justify-between text-xs text-muted-foreground",children:[e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsxs("span",{children:[e.jsx("kbd",{className:"px-1.5 py-0.5 bg-muted rounded text-[10px]",children:"↑↓"})," Navigate"]}),e.jsxs("span",{children:[e.jsx("kbd",{className:"px-1.5 py-0.5 bg-muted rounded text-[10px]",children:"↵"})," Select"]}),e.jsxs("span",{children:[e.jsx("kbd",{className:"px-1.5 py-0.5 bg-muted rounded text-[10px]",children:"ESC"})," Close"]})]}),i.length>0&&e.jsxs("span",{children:[i.length," result",i.length!==1?"s":""]})]})]})})}):null}const oe="search-provider";function Ee(){const[s,r]=h.useState(()=>typeof window>"u"?"fuzzy":localStorage.getItem(oe)||"fuzzy"),[o,n]=h.useState(!1);return h.useEffect(()=>{async function l(){try{const u=await fetch("/pagefind/pagefind.js",{method:"HEAD"});n(u.ok)}catch{n(!1)}}l()},[]),{provider:s==="pagefind"&&!o?"fuzzy":s,setProvider:l=>{r(l),localStorage.setItem(oe,l)},pagefindAvailable:o}}function Ue({isOpen:s,onClose:r,initialQuery:o}){const{provider:n}=Ee();return n==="pagefind"?e.jsx(qe,{isOpen:s,onClose:r}):e.jsx(Te,{isOpen:s,onClose:r,initialQuery:o})}export{Q as A,pe as F,Ie as M,Ue as U,Be as a,Pe as b,We as c,Le as d,Me as e,De as g,$e as r,Ye as s};
