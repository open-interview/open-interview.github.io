let r=null,i=null;const a="https://cdn.jsdelivr.net/pyodide/v0.24.1/full/";function d(){return new Promise((n,t)=>{if(typeof window.loadPyodide=="function"){n();return}const e=document.createElement("script");e.src=`${a}pyodide.js`,e.async=!0,e.onload=()=>n(),e.onerror=()=>t(new Error("Failed to load Pyodide script")),document.head.appendChild(e)})}async function p(){return r||i||(i=(async()=>(await d(),r=await window.loadPyodide({indexURL:a}),r))(),i)}async function f(n,t,e){const c=performance.now();try{const o=await p(),s=`
import json
from collections.abc import Iterator, Iterable

${n}

# Execute the function with the input
_input = ${e}
if isinstance(_input, tuple):
    _result = ${t}(*_input)
else:
    _result = ${t}(_input)

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
`,u=await o.runPythonAsync(s),l=performance.now()-c;return{success:!0,output:String(u),executionTime:l}}catch(o){const s=performance.now()-c;return{success:!1,error:o instanceof Error?o.message:"Unknown Python error",executionTime:s}}}function b(n){const t=n.match(/def\s+(\w+)\s*\(/);return t?t[1]:null}export{f as executePython,b as extractPythonFunctionName,p as initPyodide};
