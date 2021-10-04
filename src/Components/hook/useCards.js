import { useEffect, useState } from "react"

function useCards (){
    const [cards,setCards]= useState([])
  useEffect(()=>{
    fetch("./fakeData.json")
    .then(res=>res.json())
    .then(data=> setCards(data))
  },[])
  return[ cards]
}
 export default useCards