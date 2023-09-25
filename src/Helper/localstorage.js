import Cookies from 'js-cookie'
export const setlocalstroage=(key,value)=>{

  localStorage.setItem(key, JSON.stringify(value))
}
export const getlocalstroeage=(key)=>{
   return JSON.parse(localStorage.getItem(key) )
} 

export const deletelocalstreage=( key)=>{
    localStorage.removeItem(key)
    return alert('your data will be deleted')
}