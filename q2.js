// Q2 – Multi-Type Data Summary

let s="hello", n=42, b=true, a=[1,2,3], o={x:10}, nl=null, u=undefined;

console.table([
 {label:"String",value:s,type:typeof s},
 {label:"Number",value:n,type:typeof n},
 {label:"Boolean",value:b,type:typeof b},
 {label:"Array",value:a,type:Array.isArray(a)?"array":typeof a},
 {label:"Object",value:o,type:typeof o},
 {label:"Null",value:nl,type:"null"},
 {label:"Undefined",value:u,type:typeof u}
]);
