export const getData=(ApiUrl,setDataMethod)=>{
fetch(ApiUrl).then((res)=>res.json()).then((data)=>setDataMethod(data))
};