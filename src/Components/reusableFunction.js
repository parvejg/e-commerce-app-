import axios from "axios";

export const getData=(ApiUrl,setDataMethod)=>{
fetch(ApiUrl).then((res)=>res.json()).then((data)=>setDataMethod(data))
};
 export async function postCall(apiUrl, requestBody){
    const response =await axios.post(apiUrl, requestBody)
    return response;
}
export async function guestPostCall(apiUrl, requestBody){
    const response =await axios.post(apiUrl, requestBody)
    return response;
}