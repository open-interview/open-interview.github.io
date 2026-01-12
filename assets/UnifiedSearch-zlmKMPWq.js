import{h as ce,aA as be,aa as we,r as h,u as le,b as ue,j as e,l as G,m as R,X as A,S as C,Z as K,af as ve}from"./index-B7OhctWW.js";import{u as de}from"./use-unified-toast-D6BcPHIb.js";import{T as te,C as se,B as ne,G as re,F as pe}from"./tag-pTljlTAR.js";import{T as Q}from"./target-BlnQMWNr.js";import{A as J}from"./mic-DirG3_tG.js";import{L as V}from"./user-CP6hTn65.js";/**
 * @license lucide-react v0.545.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const je=[["path",{d:"M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z",key:"sc7q7i"}]],me=ce("funnel",je);/**
 * @license lucide-react v0.545.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ne=[["path",{d:"m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5",key:"ftymec"}],["rect",{x:"2",y:"6",width:"14",height:"12",rx:"2",key:"158x01"}]],ie=ce("video",Ne),he=[{title:"Reverse a String",description:"Write a function that reverses a string. The input string is given as an array of characters.",difficulty:"easy",category:"strings",tags:["string","two-pointers","recursion"],starterCode:{javascript:`function reverseString(s) {
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
    return curr`},complexity:{time:"O(n)",space:"O(1)",explanation:"We iterate from 3 to n once, using only two variables for state."},timeLimit:10}],H="coding-challenge-progress";let F=null,B=null;async function fe(){return F||B||(B=(async()=>{try{const s=await fetch("/data/coding-challenges.json");if(!s.ok)throw new Error("Failed to load challenges");const i=(await s.json()).map(a=>({id:a.id,title:a.title,description:a.description,difficulty:a.difficulty,category:a.category,tags:a.tags||[],starterCode:a.starterCode||{javascript:"",python:""},testCases:(a.testCases||[]).map(n=>({id:n.id||String(Math.random()),input:n.input,expectedOutput:n.expectedOutput,isHidden:n.isHidden,description:n.description})),hints:a.hints||[],sampleSolution:a.solution||a.sampleSolution||{javascript:"",python:""},complexity:a.complexity||{time:"O(n)",space:"O(1)",explanation:""},timeLimit:a.timeLimit||15}));return F=i,i}catch(s){console.warn("Failed to load challenges from JSON, using fallback templates:",s);const r=he.map((i,a)=>({...i,id:`challenge-${a}`}));return F=r,r}})(),B)}function X(){return F||he.map((s,r)=>({...s,id:`challenge-${r}`}))}fe();function ke(s){const r=X();let i=r;return s&&(i=r.filter(a=>a.difficulty===s)),i[Math.floor(Math.random()*i.length)]}function xe(){return X()}async function Se(){return fe()}function Ce(s){return X().find(i=>i.id===s)||null}function ge(s,r,i){return i==="python"?r.testCases.map(a=>({testCaseId:a.id,passed:!1,error:"Use runTestsAsync for Python execution"})):r.testCases.map(a=>{try{return ze(s,a,r)}catch(n){return{testCaseId:a.id,passed:!1,error:n instanceof Error?n.message:"Execution error"}}})}function ae(s){try{return JSON.stringify(JSON.parse(s))}catch{return s}}async function Oe(s,r,i){if(i==="javascript")return ge(s,r,i);const{executePython:a,extractPythonFunctionName:n}=await be(async()=>{const{executePython:m,extractPythonFunctionName:l}=await import("./pyodide-runner-BcYiMYai.js");return{executePython:m,extractPythonFunctionName:l}},[]),p=n(r.starterCode.python);if(!p)return r.testCases.map(m=>({testCaseId:m.id,passed:!1,error:"Could not find function definition in code"}));const c=[];for(const m of r.testCases){const l=await a(s,p,m.input);if(l.success&&l.output){const f=l.output,d=ae(f),x=ae(m.expectedOutput),y=d===x;c.push({testCaseId:m.id,passed:y,actualOutput:f,executionTime:l.executionTime})}else c.push({testCaseId:m.id,passed:!1,error:l.error||"Execution failed",executionTime:l.executionTime})}return c}function ze(s,r,i){const a=performance.now();try{const n=i.starterCode.javascript.match(/function\s+(\w+)/),p=n?n[1]:"solution",c=`
      ${s}
      return ${p}(${r.input});
    `,l=new Function(c)(),f=performance.now()-a,d=JSON.stringify(l),x=r.expectedOutput,y=d===x;return{testCaseId:r.id,passed:y,actualOutput:d,executionTime:f}}catch(n){return{testCaseId:r.id,passed:!1,error:n instanceof Error?n.message:"Unknown error",executionTime:performance.now()-a}}}function _e(s){try{const r=localStorage.getItem(H),i=r?JSON.parse(r):{attempts:[]};i.attempts.push(s),localStorage.setItem(H,JSON.stringify(i))}catch{}}function Z(){try{const s=localStorage.getItem(H);return(s?JSON.parse(s):{attempts:[]}).attempts}catch{return[]}}function Te(){const s=Z();return new Set(s.filter(r=>r.passed).map(r=>r.challengeId))}function qe(){const s=Z(),r=s.filter(n=>n.passed),i=s.length>0?Math.round(s.reduce((n,p)=>n+p.timeSpent,0)/s.length):0,a={easy:{attempted:0,passed:0},medium:{attempted:0,passed:0}};return{totalAttempts:s.length,passedChallenges:r.length,averageTime:i,byDifficulty:a}}function Ee(s){const r=/for[\s\S]*for|while[\s\S]*while|for[\s\S]*while|while[\s\S]*for/.test(s),i=/function\s+(\w+)[\s\S]*\1\s*\(/.test(s),a=/Map|Set|Object|{}|\[\]/i.test(s),n=(s.match(/for|while/g)||[]).length;let p="O(1)",c="O(1)",m="Constant time and space operations.";return r?(p="O(n²)",m="Nested loops suggest quadratic time complexity."):n>0&&(p="O(n)",m="Single loop iteration through the input."),i&&(p=r?"O(2^n)":"O(n)",c="O(n)",m="Recursive calls add to the call stack."),a&&(c="O(n)",!r&&!i&&(m="Uses additional data structure for efficient lookups.")),{time:p,space:c,explanation:m}}const Ue=Object.freeze(Object.defineProperty({__proto__:null,analyzeCodeComplexity:Ee,getAllChallenges:xe,getAllChallengesAsync:Se,getChallengeAttempts:Z,getChallengeById:Ce,getCodingStats:qe,getRandomChallenge:ke,getSolvedChallengeIds:Te,runTests:ge,runTestsAsync:Oe,saveChallengeAttempt:_e},Symbol.toStringTag,{value:"Module"}));function N(s,r){const i=s.toLowerCase(),a=r.toLowerCase();if(a===i)return 1e3;if(a.includes(i))return 500+(100-r.length);const n=i.split(/\s+/).filter(l=>l.length>1),p=a.split(/\s+/);let c=0,m=0;for(const l of n){let f=!1;for(const d of p){if(d===l){c+=50,f=!0;break}if(d.startsWith(l)){c+=30,f=!0;break}if(d.includes(l)){c+=15,f=!0;break}}f?(m++,c+=m*5):m=0}if(c===0&&i.length>=3){let l=0,f=-1;for(const d of i){const x=a.indexOf(d,f+1);x>-1&&(l+=1,x===f+1&&(l+=.5),f=x)}l>=i.length*.6&&(c=l)}return c}function Fe(s,r=20){if(!s||s.trim().length<2)return[];const i=we(),a=new Map,n=s.match(/^(?:tag:|#)(.+)$/i),p=!!n,c=p?n[1].trim():s;for(const l of i){const f=a.get(l.id),d=[];let x=0;if(p){const y=l.tags?.join(" ")||"",b=N(c,y);b>0&&(x+=b*10,d.push("tags"))}else{const y=N(c,l.question);y>0&&(x+=y*3,d.push("question"));const b=N(c,l.answer);b>0&&(x+=b*1.5,d.push("answer"));const k=l.tags?.join(" ")||"",O=N(c,k);O>0&&(x+=O*4,d.push("tags"));const w=`${l.channel} ${l.subChannel}`.replace(/-/g," "),z=N(c,w);z>0&&(x+=z*1.5,d.push("channel"))}x>0&&(!f||x>f.score)&&a.set(l.id,{question:l,score:x,matchedIn:d,type:"question"})}const m=Array.from(a.values());return m.sort((l,f)=>f.score-l.score),m.slice(0,r)}function Re(s,r=10){if(!s||s.trim().length<2)return[];const i=xe(),a=[];for(const n of i){const p=[];let c=0;const m=N(s,n.title);m>0&&(c+=m*3,p.push("title"));const l=N(s,n.description);l>0&&(c+=l*1.5,p.push("description"));const f=n.tags?.join(" ")||"",d=N(s,f);d>0&&(c+=d*2,p.push("tags"));const x=N(s,n.category.replace(/-/g," "));x>0&&(c+=x*1.5,p.push("category")),c>0&&a.push({challenge:n,score:c,matchedIn:p,type:"coding"})}return a.sort((n,p)=>p.score-n.score),a.slice(0,r)}function Ae(s,r=20){const i=Fe(s,r),a=Re(s,Math.floor(r/2)),n=[...i,...a];return n.sort((p,c)=>c.score-p.score),n.slice(0,r)}function ye(s,r){const[i,a]=h.useState(s);return h.useEffect(()=>{const n=setTimeout(()=>{a(s)},r);return()=>{clearTimeout(n)}},[s,r]),i}function S(s){return s.type==="question"}function W(s){return s.type==="coding"}function Ie({isOpen:s,onClose:r}){const[i,a]=h.useState(""),[n,p]=h.useState([]),[c,m]=h.useState([]),[l,f]=h.useState(0),[d,x]=h.useState(!1),[y,b]=h.useState("all"),k=h.useRef(null),O=h.useRef(null),[,w]=le(),{isSubscribed:z,subscribeChannel:Y}=ue();de();const I=ye(i,150),q=[{id:"all",label:"All",icon:e.jsx(me,{className:"w-3 h-3"})},{id:"tags",label:"Tags",icon:e.jsx(te,{className:"w-3 h-3"})},{id:"coding",label:"Coding",icon:e.jsx(se,{className:"w-3 h-3"})},{id:"company",label:"Company",icon:e.jsx(ne,{className:"w-3 h-3"})},{id:"video",label:"Video",icon:e.jsx(ie,{className:"w-3 h-3"})},{id:"diagram",label:"Diagram",icon:e.jsx(re,{className:"w-3 h-3"})}];h.useEffect(()=>{s&&(setTimeout(()=>{k.current?.focus(),O.current?.focus()},100),a(""),p([]),m([]),f(0),b("all"))},[s]),h.useEffect(()=>{if(I.length>=2){x(!0);const t=Ae(I,50);p(t),f(0),x(!1)}else p([])},[I]),h.useEffect(()=>{let t=n;switch(y){case"tags":t=n.filter(o=>S(o)&&o.matchedIn.includes("tags"));break;case"coding":t=n.filter(o=>W(o));break;case"company":t=n.filter(o=>S(o)&&o.question.companies&&o.question.companies.length>0);break;case"video":t=n.filter(o=>S(o)&&(o.question.videos?.shortVideo||o.question.videos?.longVideo));break;case"diagram":t=n.filter(o=>S(o)&&(o.question.diagram?.length??0)>20);break;default:t=n}m(t.slice(0,15)),f(0)},[n,y]);const _=h.useCallback(t=>{t.key==="ArrowDown"?(t.preventDefault(),f(o=>Math.min(o+1,c.length-1))):t.key==="ArrowUp"?(t.preventDefault(),f(o=>Math.max(o-1,0))):t.key==="Enter"&&c[l]?(t.preventDefault(),L(c[l])):t.key==="Escape"&&r()},[c,l,r]),L=t=>{if(W(t)){w(`/coding/${t.challenge.id}`),r();return}const{question:o}=t;w(`/channel/${o.channel}/${o.id}`),r()},ee=t=>{switch(t){case"beginner":return e.jsx(K,{className:"w-3 h-3 text-green-400"});case"intermediate":return e.jsx(Q,{className:"w-3 h-3 text-yellow-400"});case"advanced":return e.jsx(pe,{className:"w-3 h-3 text-red-400"});default:return null}},U=t=>t==="all"?n.length:t==="tags"?n.filter(o=>S(o)&&o.matchedIn.includes("tags")).length:t==="coding"?n.filter(o=>W(o)).length:t==="company"?n.filter(o=>S(o)&&o.question.companies?.length).length:t==="video"?n.filter(o=>S(o)&&(o.question.videos?.shortVideo||o.question.videos?.longVideo)).length:t==="diagram"?n.filter(o=>S(o)&&(o.question.diagram?.length??0)>20).length:0,E=(t,o)=>{if(W(t))return e.jsxs("button",{onClick:()=>L(t),className:`w-full px-4 py-4 text-left flex items-start gap-3 transition-colors active:bg-primary/10 ${o===l?"bg-primary/20":"hover:bg-muted/50"}`,children:[e.jsxs("div",{className:"flex-1 min-w-0",children:[e.jsxs("div",{className:"flex items-center gap-2 mb-1",children:[t.challenge.difficulty==="easy"?e.jsx(K,{className:"w-3 h-3 text-green-400"}):e.jsx(Q,{className:"w-3 h-3 text-yellow-400"}),e.jsxs("span",{className:"text-[10px] text-muted-foreground uppercase tracking-wider",children:["coding/",t.challenge.category]}),e.jsxs("span",{className:"flex items-center gap-0.5 text-[9px] text-purple-600 dark:text-purple-400 bg-purple-400/10 px-1.5 py-0.5 rounded ml-auto",children:[e.jsx(se,{className:"w-2.5 h-2.5"})," Challenge"]})]}),e.jsx("p",{className:"text-sm text-foreground line-clamp-2",children:t.challenge.title}),e.jsx("p",{className:"text-xs text-muted-foreground line-clamp-1 mt-1",children:t.challenge.description})]}),e.jsx(J,{className:`w-4 h-4 shrink-0 mt-1 ${o===l?"text-primary":"text-muted-foreground/30"}`})]},`coding-${t.challenge.id}-${o}`);const $=(t.question.companies?.length??0)>0,u=t.question.videos?.shortVideo||t.question.videos?.longVideo,g=(t.question.diagram?.length??0)>20;return e.jsxs("button",{onClick:()=>L(t),className:`w-full px-4 py-4 text-left flex items-start gap-3 transition-colors active:bg-primary/10 ${o===l?"bg-primary/20":"hover:bg-muted/50"}`,children:[e.jsxs("div",{className:"flex-1 min-w-0",children:[e.jsxs("div",{className:"flex items-center gap-2 mb-1",children:[ee(t.question.difficulty),e.jsxs("span",{className:"text-[10px] text-muted-foreground uppercase tracking-wider",children:[t.question.channel,"/",t.question.subChannel]}),e.jsxs("div",{className:"flex items-center gap-1 ml-auto",children:[$&&e.jsxs("span",{className:"flex items-center gap-0.5 text-[9px] text-blue-600 dark:text-blue-400 bg-blue-400/10 px-1.5 py-0.5 rounded",children:[e.jsx(ne,{className:"w-2.5 h-2.5"}),t.question.companies.length]}),u&&e.jsx("span",{className:"flex items-center text-[9px] text-red-600 dark:text-red-400 bg-red-400/10 px-1.5 py-0.5 rounded",children:e.jsx(ie,{className:"w-2.5 h-2.5"})}),g&&e.jsx("span",{className:"flex items-center text-[9px] text-green-600 dark:text-green-400 bg-green-400/10 px-1.5 py-0.5 rounded",children:e.jsx(re,{className:"w-2.5 h-2.5"})})]})]}),e.jsx("p",{className:"text-sm text-foreground line-clamp-2",children:t.question.question}),e.jsx("p",{className:"text-xs text-muted-foreground line-clamp-1 mt-1",children:t.question.answer}),t.question.tags?.length>0&&e.jsxs("div",{className:"flex items-center gap-1 mt-2 flex-wrap",children:[e.jsx(te,{className:"w-3 h-3 text-muted-foreground/50 shrink-0"}),t.question.tags.slice(0,5).map((j,T)=>e.jsx("span",{className:`text-[10px] px-1.5 py-0.5 rounded ${t.matchedIn.includes("tags")?"bg-primary/20 text-primary font-semibold border border-primary/30":"text-muted-foreground/70 bg-muted/50"}`,children:ve(j)},T)),t.question.tags.length>5&&e.jsxs("span",{className:"text-[10px] text-muted-foreground/50",children:["+",t.question.tags.length-5]})]})]}),e.jsx(J,{className:`w-4 h-4 shrink-0 mt-1 ${o===l?"text-primary":"text-muted-foreground/30"}`})]},`question-${t.question.id}-${o}`)},P=()=>e.jsxs("div",{className:"p-8 text-center text-muted-foreground",children:[e.jsx(C,{className:"w-12 h-12 mx-auto mb-4 opacity-30"}),e.jsx("p",{className:"text-base mb-1",children:"Type to search"}),e.jsx("p",{className:"text-sm opacity-70 mb-2",children:"Search questions, topics, or tags"}),e.jsxs("div",{className:"flex items-center justify-center gap-2 mb-6 text-xs",children:[e.jsx("span",{className:"px-2 py-1 bg-primary/10 text-primary rounded font-mono",children:"tag:react"}),e.jsx("span",{className:"text-muted-foreground/50",children:"or"}),e.jsx("span",{className:"px-2 py-1 bg-primary/10 text-primary rounded font-mono",children:"#kubernetes"})]}),e.jsx("div",{className:"flex flex-wrap justify-center gap-2",children:["react hooks","tag:system-design","#sql","kubernetes"].map(t=>e.jsx("button",{onClick:()=>a(t),className:"px-4 py-2 text-sm bg-muted hover:bg-muted/80 border border-border rounded-full transition-colors active:scale-95",children:t},t))})]}),M=()=>e.jsxs("div",{className:"p-8 text-center text-muted-foreground",children:[e.jsx(C,{className:"w-12 h-12 mx-auto mb-3 opacity-30"}),e.jsxs("p",{className:"text-base",children:['No results for "',i,'"']}),e.jsx("p",{className:"text-sm mt-2 opacity-70",children:"Try different keywords"})]});return s?e.jsx(G,{children:s&&e.jsxs(e.Fragment,{children:[e.jsxs(R.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},className:"lg:hidden fixed inset-0 z-[200] bg-black/95 backdrop-blur-xl flex flex-col",style:{top:0,left:0,right:0,bottom:0,position:"fixed"},"data-testid":"search-modal-mobile",children:[e.jsxs("div",{className:"flex items-center justify-between px-4 h-14 border-b border-white/10 flex-shrink-0",children:[e.jsx("h2",{className:"font-semibold text-lg text-white",children:"Search"}),e.jsx("button",{onClick:r,className:"p-2 -mr-2 hover:bg-white/10 rounded-xl transition-colors","data-testid":"search-close-btn",children:e.jsx(A,{className:"w-5 h-5 text-white/70"})})]}),e.jsx("div",{className:"px-4 py-3 flex-shrink-0",children:e.jsxs("div",{className:"flex items-center gap-3 px-4 py-3 bg-white/5 border border-white/10 rounded-2xl",children:[e.jsx(C,{className:"w-5 h-5 text-white/50 flex-shrink-0"}),e.jsx("input",{ref:O,type:"text",value:i,onChange:t=>a(t.target.value),onKeyDown:_,placeholder:"Search questions...",className:"flex-1 bg-transparent text-white text-base outline-none placeholder:text-white/30",autoComplete:"off",spellCheck:!1,"data-testid":"search-input-mobile"}),i&&e.jsx("button",{onClick:()=>a(""),className:"p-1.5 hover:bg-white/10 rounded-full flex-shrink-0",children:e.jsx(A,{className:"w-4 h-4 text-white/50"})})]})}),n.length>0&&e.jsx("div",{className:"flex items-center gap-2 px-4 py-2 overflow-x-auto no-scrollbar flex-shrink-0",children:q.map(t=>{const o=U(t.id);return e.jsxs("button",{onClick:()=>b(t.id),disabled:o===0&&t.id!=="all",className:`flex items-center gap-1.5 px-3 py-1.5 text-xs rounded-full transition-all flex-shrink-0 ${y===t.id?"bg-primary text-white font-semibold":o>0?"bg-white/10 text-white/70":"bg-white/5 text-white/30"}`,children:[t.icon," ",t.label," (",o,")"]},t.id)})}),e.jsxs("div",{className:"flex-1 overflow-y-auto",children:[d&&e.jsx("div",{className:"p-8 text-center",children:e.jsx("div",{className:"w-6 h-6 border-2 border-primary/30 border-t-primary rounded-full animate-spin mx-auto"})}),!d&&i.length>=2&&c.length===0&&M(),!d&&c.length>0&&e.jsx("div",{className:"py-2",children:c.map((t,o)=>E(t,o))}),!d&&i.length<2&&P()]}),e.jsx("div",{className:"px-4 py-3 border-t border-white/10 flex-shrink-0",style:{paddingBottom:"max(env(safe-area-inset-bottom), 12px)"},children:e.jsx("p",{className:"text-sm text-white/40 text-center",children:c.length>0?`${c.length} results`:"Tap to search"})})]}),e.jsx(R.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},className:"hidden lg:flex fixed inset-0 z-[200] bg-black/60 backdrop-blur-sm items-start justify-center pt-[10vh] px-4",onClick:r,"data-testid":"search-modal-desktop",children:e.jsxs(R.div,{initial:{opacity:0,y:-20,scale:.95},animate:{opacity:1,y:0,scale:1},exit:{opacity:0,y:-20,scale:.95},className:"w-full max-w-2xl bg-card border border-border rounded-xl shadow-2xl overflow-hidden flex flex-col max-h-[80vh]",onClick:t=>t.stopPropagation(),children:[e.jsxs("div",{className:"flex items-center gap-3 p-4 border-b border-border",children:[e.jsx(C,{className:"w-5 h-5 text-muted-foreground"}),e.jsx("input",{ref:k,type:"text",value:i,onChange:t=>a(t.target.value),onKeyDown:_,placeholder:"Search questions, topics, tags...",className:"flex-1 bg-transparent text-foreground text-lg outline-none placeholder:text-muted-foreground/50",autoComplete:"off",spellCheck:!1,"data-testid":"search-input-desktop"}),i&&e.jsx("button",{onClick:()=>a(""),className:"p-1.5 hover:bg-muted rounded-full",children:e.jsx(A,{className:"w-4 h-4 text-muted-foreground"})}),e.jsx("kbd",{className:"px-2 py-1 text-[10px] text-muted-foreground bg-muted border border-border rounded",children:"ESC"})]}),n.length>0&&e.jsxs("div",{className:"flex items-center gap-2 px-4 py-2 border-b border-border bg-muted/30 flex-wrap",children:[e.jsx("span",{className:"text-[10px] text-muted-foreground uppercase tracking-wider mr-1",children:"Filter:"}),q.map(t=>{const o=U(t.id);return e.jsxs("button",{onClick:()=>b(t.id),disabled:o===0&&t.id!=="all",className:`flex items-center gap-1.5 px-2.5 py-1 text-[11px] rounded-full transition-all ${y===t.id?"bg-primary text-primary-foreground font-bold":o>0?"bg-muted text-muted-foreground hover:bg-muted/80":"bg-muted/50 text-muted-foreground/50 cursor-not-allowed"}`,children:[t.icon," ",t.label," ",e.jsxs("span",{className:"text-[9px] opacity-70",children:["(",o,")"]})]},t.id)})]}),e.jsxs("div",{className:"flex-1 overflow-y-auto",children:[d&&e.jsx("div",{className:"p-8 text-center",children:e.jsx("div",{className:"w-6 h-6 border-2 border-primary/30 border-t-primary rounded-full animate-spin mx-auto"})}),!d&&i.length>=2&&c.length===0&&M(),!d&&c.length>0&&e.jsx("div",{className:"py-2",children:c.map((t,o)=>E(t,o))}),!d&&i.length<2&&P()]}),e.jsxs("div",{className:"px-4 py-3 border-t border-border flex items-center justify-between text-xs text-muted-foreground",children:[e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsxs("span",{children:[e.jsx("kbd",{className:"px-1.5 py-0.5 bg-muted rounded text-[10px]",children:"↑↓"})," Navigate"]}),e.jsxs("span",{children:[e.jsx("kbd",{className:"px-1.5 py-0.5 bg-muted rounded text-[10px]",children:"↵"})," Select"]}),e.jsxs("span",{children:[e.jsx("kbd",{className:"px-1.5 py-0.5 bg-muted rounded text-[10px]",children:"ESC"})," Close"]})]}),c.length>0&&e.jsxs("span",{children:[c.length," results"]})]})]})})]})}):null}function Le({isOpen:s,onClose:r}){const[i,a]=h.useState(""),[n,p]=h.useState([]),[c,m]=h.useState(0),[l,f]=h.useState(!1),[d,x]=h.useState(!0),[y,b]=h.useState(null),[k,O]=h.useState({}),[w,z]=h.useState(null),[Y,I]=h.useState(!1),q=h.useRef(null),_=h.useRef(null),[,L]=le(),{isSubscribed:ee,subscribeChannel:U}=ue();de();const E=ye(i,200);h.useEffect(()=>{const u=()=>I(window.innerWidth<1024);return u(),window.addEventListener("resize",u),()=>window.removeEventListener("resize",u)},[]),h.useEffect(()=>{async function u(){try{if(!document.querySelector('link[href*="pagefind"]')){const j=document.createElement("link");j.rel="stylesheet",j.href="/pagefind/pagefind-ui.css",document.head.appendChild(j)}if(!window.pagefind){await new Promise((T,D)=>{const v=document.createElement("script");v.src="/pagefind/pagefind.js",v.type="module",v.onload=()=>T(),v.onerror=()=>D(new Error("Failed to load Pagefind script")),document.head.appendChild(v)});let j=0;for(;!window.pagefind&&j<50;)await new Promise(T=>setTimeout(T,100)),j++}if(!window.pagefind)throw new Error("Pagefind not available");await window.pagefind.init(),_.current=window.pagefind;const g=await window.pagefind.filters();O(g),x(!1),b(null)}catch(g){console.error("Failed to load Pagefind:",g),b("Search index not available. Using fallback search."),x(!1)}}s&&!_.current&&u()},[s]),h.useEffect(()=>{s&&(setTimeout(()=>q.current?.focus(),100),a(""),p([]),m(0),z(null))},[s]),h.useEffect(()=>{async function u(){if(!_.current||E.length<2){p([]);return}f(!0);try{const g={};w&&(g.filters={difficulty:w});const j=await _.current.search(E,g),T=await Promise.all(j.results.slice(0,15).map(async D=>{const v=await D.data();return{id:v.meta.id||D.id,title:v.meta.title,excerpt:v.excerpt,channel:v.meta.channel||"",difficulty:v.meta.difficulty||"intermediate"}}));p(T),m(0)}catch(g){console.error("Search error:",g)}finally{f(!1)}}u()},[E,w]);const P=h.useCallback(u=>{u.key==="ArrowDown"?(u.preventDefault(),m(g=>Math.min(g+1,n.length-1))):u.key==="ArrowUp"?(u.preventDefault(),m(g=>Math.max(g-1,0))):u.key==="Enter"&&n[c]?(u.preventDefault(),M(n[c])):u.key==="Escape"&&r()},[n,c,r]),M=u=>{const g=u.channel;g&&L(`/channel/${g}/${u.id}`),r()},t=u=>{switch(u){case"beginner":return e.jsx(K,{className:"w-3 h-3 text-green-400"});case"intermediate":return e.jsx(Q,{className:"w-3 h-3 text-yellow-400"});case"advanced":return e.jsx(pe,{className:"w-3 h-3 text-red-400"});default:return null}},o=()=>!k.difficulty||Object.keys(k.difficulty).length===0?null:e.jsxs("div",{className:`flex items-center gap-2 px-4 py-2 border-b border-border bg-muted/30 overflow-x-auto no-scrollbar flex-shrink-0 ${Y?"":"flex-wrap"}`,children:[!Y&&e.jsx("span",{className:"text-[10px] text-muted-foreground uppercase tracking-wider mr-1",children:"Difficulty:"}),e.jsxs("button",{onClick:()=>z(null),className:`flex items-center gap-1.5 px-3 py-1.5 text-xs rounded-full transition-all flex-shrink-0 ${w?"bg-muted text-muted-foreground hover:bg-muted/80":"bg-primary text-primary-foreground font-semibold"}`,children:[e.jsx(me,{className:"w-3 h-3"})," All"]}),Object.entries(k.difficulty).map(([u,g])=>e.jsxs("button",{onClick:()=>z(w===u?null:u),className:`flex items-center gap-1.5 px-3 py-1.5 text-xs rounded-full transition-all flex-shrink-0 ${w===u?"bg-primary text-primary-foreground font-semibold":"bg-muted text-muted-foreground hover:bg-muted/80"}`,children:[t(u)," ",u," (",g,")"]},u))]}),$=()=>e.jsxs("div",{className:"flex-1 overflow-y-auto",children:[l&&e.jsx("div",{className:"p-8 text-center",children:e.jsx(V,{className:"w-6 h-6 animate-spin mx-auto text-muted-foreground"})}),!l&&i.length>=2&&n.length===0&&e.jsxs("div",{className:"p-8 text-center text-muted-foreground",children:[e.jsx(C,{className:"w-12 h-12 mx-auto mb-3 opacity-30"}),e.jsxs("p",{className:"text-base",children:['No questions found for "',i,'"']}),e.jsx("p",{className:"text-sm mt-2 opacity-70",children:"Try different keywords"})]}),!l&&n.length>0&&e.jsx("div",{className:"py-2",children:n.map((u,g)=>e.jsxs("button",{onClick:()=>M(u),className:`w-full px-4 py-4 text-left flex items-start gap-3 transition-colors active:bg-primary/10 ${g===c?"bg-primary/20":"hover:bg-muted/50"}`,children:[e.jsxs("div",{className:"flex-1 min-w-0",children:[e.jsxs("div",{className:"flex items-center gap-2 mb-1",children:[t(u.difficulty),e.jsx("span",{className:"text-[10px] text-muted-foreground uppercase tracking-wider",children:u.channel})]}),e.jsx("p",{className:"text-sm text-foreground line-clamp-2",children:u.title}),e.jsx("p",{className:"text-xs text-muted-foreground line-clamp-2 mt-1",dangerouslySetInnerHTML:{__html:u.excerpt}})]}),e.jsx(J,{className:`w-4 h-4 shrink-0 mt-1 ${g===c?"text-primary":"text-muted-foreground/30"}`})]},u.id))}),!l&&i.length<2&&!d&&e.jsxs("div",{className:"p-8 text-center text-muted-foreground",children:[e.jsx(C,{className:"w-12 h-12 mx-auto mb-4 opacity-30"}),e.jsx("p",{className:"text-base mb-1",children:"Type at least 2 characters"}),e.jsx("p",{className:"text-sm opacity-70 mb-6",children:"Search questions, topics, or tags"}),e.jsx("div",{className:"flex flex-wrap justify-center gap-2",children:["react hooks","system design","sql joins","kubernetes"].map(u=>e.jsx("button",{onClick:()=>a(u),className:"px-4 py-2 text-sm bg-muted hover:bg-muted/80 border border-border rounded-full transition-colors active:scale-95",children:u},u))})]})]});return s?Y?e.jsx(G,{children:e.jsxs(R.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},className:"fixed inset-0 z-[200] bg-background flex flex-col","data-testid":"pagefind-search-mobile",children:[e.jsxs("div",{className:"flex items-center justify-between px-4 h-14 border-b border-border bg-card flex-shrink-0 pt-safe",children:[e.jsx("h2",{className:"font-semibold text-lg",children:"Search"}),e.jsx("button",{onClick:r,className:"p-2 -mr-2 hover:bg-muted rounded-full","data-testid":"search-close-btn",children:e.jsx(A,{className:"w-5 h-5"})})]}),e.jsxs("div",{className:"flex items-center gap-3 px-4 py-3 border-b border-border bg-card flex-shrink-0",children:[d?e.jsx(V,{className:"w-5 h-5 text-muted-foreground animate-spin flex-shrink-0"}):e.jsx(C,{className:"w-5 h-5 text-muted-foreground flex-shrink-0"}),e.jsx("input",{ref:q,type:"text",value:i,onChange:u=>a(u.target.value),onKeyDown:P,placeholder:d?"Loading search...":"Search questions...",className:"flex-1 bg-transparent text-foreground text-base outline-none placeholder:text-muted-foreground/50",autoComplete:"off",spellCheck:!1,disabled:d,"data-testid":"search-input"}),i&&e.jsx("button",{onClick:()=>a(""),className:"p-1.5 hover:bg-muted rounded-full flex-shrink-0",children:e.jsx(A,{className:"w-4 h-4 text-muted-foreground"})})]}),y&&e.jsx("div",{className:"px-4 py-2 bg-yellow-500/10 border-b border-yellow-500/20 text-yellow-600 dark:text-yellow-400 text-xs flex-shrink-0",children:y}),o(),$(),e.jsx("div",{className:"px-4 py-3 border-t border-border bg-card flex-shrink-0",style:{paddingBottom:"max(env(safe-area-inset-bottom), 12px)"},children:e.jsx("p",{className:"text-sm text-muted-foreground text-center",children:n.length>0?`${n.length} result${n.length!==1?"s":""}`:"Tap to search"})})]})}):e.jsx(G,{children:e.jsx(R.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},className:"fixed inset-0 z-[200] bg-background/80 backdrop-blur-sm flex items-start justify-center pt-[10vh] px-4",onClick:r,"data-testid":"pagefind-search-desktop",children:e.jsxs(R.div,{initial:{opacity:0,y:-20,scale:.95},animate:{opacity:1,y:0,scale:1},exit:{opacity:0,y:-20,scale:.95},className:"w-full max-w-2xl bg-card border border-border rounded-xl shadow-2xl overflow-hidden flex flex-col max-h-[80vh]",onClick:u=>u.stopPropagation(),children:[e.jsxs("div",{className:"flex items-center gap-3 p-4 border-b border-border",children:[d?e.jsx(V,{className:"w-5 h-5 text-muted-foreground animate-spin"}):e.jsx(C,{className:"w-5 h-5 text-muted-foreground"}),e.jsx("input",{ref:q,type:"text",value:i,onChange:u=>a(u.target.value),onKeyDown:P,placeholder:d?"Loading search...":"Search questions, topics, tags...",className:"flex-1 bg-transparent text-foreground text-lg outline-none placeholder:text-muted-foreground/50",autoComplete:"off",spellCheck:!1,disabled:d,"data-testid":"search-input"}),i&&e.jsx("button",{onClick:()=>a(""),className:"p-1.5 hover:bg-muted rounded-full",children:e.jsx(A,{className:"w-4 h-4 text-muted-foreground"})}),e.jsx("kbd",{className:"px-2 py-1 text-[10px] text-muted-foreground bg-muted border border-border rounded",children:"ESC"})]}),y&&e.jsx("div",{className:"px-4 py-2 bg-yellow-500/10 border-b border-yellow-500/20 text-yellow-600 dark:text-yellow-400 text-xs",children:y}),o(),$(),e.jsxs("div",{className:"px-4 py-3 border-t border-border flex items-center justify-between text-xs text-muted-foreground",children:[e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsxs("span",{children:[e.jsx("kbd",{className:"px-1.5 py-0.5 bg-muted rounded text-[10px]",children:"↑↓"})," Navigate"]}),e.jsxs("span",{children:[e.jsx("kbd",{className:"px-1.5 py-0.5 bg-muted rounded text-[10px]",children:"↵"})," Select"]}),e.jsxs("span",{children:[e.jsx("kbd",{className:"px-1.5 py-0.5 bg-muted rounded text-[10px]",children:"ESC"})," Close"]})]}),n.length>0&&e.jsxs("span",{children:[n.length," result",n.length!==1?"s":""]})]})]})})}):null}const oe="search-provider";function Pe(){const[s,r]=h.useState(()=>typeof window>"u"?"fuzzy":localStorage.getItem(oe)||"fuzzy"),[i,a]=h.useState(!1);return h.useEffect(()=>{async function c(){try{const m=await fetch("/pagefind/pagefind.js",{method:"HEAD"});a(m.ok)}catch{a(!1)}}c()},[]),{provider:s==="pagefind"&&!i?"fuzzy":s,setProvider:c=>{r(c),localStorage.setItem(oe,c)},pagefindAvailable:i}}function Ve({isOpen:s,onClose:r}){const{provider:i}=Pe();return i==="pagefind"?e.jsx(Le,{isOpen:s,onClose:r}):e.jsx(Ie,{isOpen:s,onClose:r})}export{me as F,Ve as U,ie as V,qe as a,Ce as b,Ee as c,ke as d,xe as e,Ue as f,Te as g,Oe as r,_e as s};
