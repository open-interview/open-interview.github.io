let s=null,a=null;const d="https://cdn.jsdelivr.net/pyodide/v0.24.1/full/";function p(){return new Promise((n,o)=>{if(typeof window.loadPyodide=="function"){n();return}const t=document.createElement("script");t.src=`${d}pyodide.js`,t.async=!0,t.onload=()=>n(),t.onerror=()=>o(new Error("Failed to load Pyodide script")),document.head.appendChild(t)})}async function m(){return s||a||(a=(async()=>(await p(),s=await window.loadPyodide({indexURL:d}),s))(),a)}async function f(n,o,t){const u=performance.now();try{const i=await m(),c=`
import json
from collections.abc import Iterator, Iterable

${n}

# Parse the input - wrap in tuple to handle multiple arguments
# Input like "[1,2], [3,4]" becomes tuple ([1,2], [3,4])
_input_tuple = (${t},)

# If input was already a tuple (multiple args), flatten it
# e.g., (([1,2], [3,4]),) should become ([1,2], [3,4])
if len(_input_tuple) == 1 and isinstance(_input_tuple[0], tuple):
    _args = _input_tuple[0]
else:
    _args = _input_tuple

# Call the function with unpacked arguments
_result = ${o}(*_args)

# Convert result to JSON-compatible format
def to_json_compatible(obj):
    if obj is None:
        return None
    if isinstance(obj, bool):
        return obj
    if isinstance(obj, (int, float, str)):
        return obj
    if isinstance(obj, (list, tuple)):
        return [to_json_compatible(x) for x in obj]
    if isinstance(obj, dict):
        return {str(k): to_json_compatible(v) for k, v in obj.items()}
    # Handle iterators (like reversed(), map(), filter(), etc.)
    if isinstance(obj, Iterator):
        return [to_json_compatible(x) for x in obj]
    # Handle other iterables
    if isinstance(obj, Iterable) and not isinstance(obj, (str, bytes)):
        return [to_json_compatible(x) for x in obj]
    return str(obj)

_json_result = json.dumps(to_json_compatible(_result))
_json_result
`,e=await i.runPythonAsync(c),r=performance.now()-u;return{success:!0,output:String(e),executionTime:r}}catch(i){const c=performance.now()-u,e=i instanceof Error?i.message:"Unknown Python error";let r=e;if(e.includes("missing")&&e.includes("required positional argument")){const l=e.match(/(\w+)\(\) missing (\d+) required positional argument/);l&&(r=`Function signature mismatch: Your ${l[1]}() function expects more arguments than the test provides. Check the expected function signature in the starter code.`)}else e.includes("takes")&&e.includes("positional argument")&&(r="Function signature mismatch: Your function has a different number of parameters than expected. Check the starter code for the correct signature.");return{success:!1,error:r,executionTime:c}}}function b(n){const o=n.match(/def\s+(\w+)\s*\(/);return o?o[1]:null}export{f as executePython,b as extractPythonFunctionName,m as initPyodide};
