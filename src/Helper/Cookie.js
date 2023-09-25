import Cookies from 'js-cookie'
export const setcookie=(key,value)=>{

   Cookies.set(key, value,{expires:1})
}
export const getcookie=(key)=>{
   return Cookies.get(key) 
} 

export const deletecookie=( key)=>{
    return Cookies.remove(key)
}