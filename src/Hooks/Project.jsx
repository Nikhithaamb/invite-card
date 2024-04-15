import axios from 'axios'
import React, { useEffect, useState } from 'react'
import style from "./project.module.css"

const Project = () => {
    let [users, setUsers] = useState([])
    useEffect(()=>{
        axios.get("https://api.github.com/users")
        .then((response)=>{console.log(response.data);
        setUsers(response.data)
    })      
        .catch(()=>{console.log("DID NOT GET THE DATA");})
    },[])
    console.log(users);  
  return (
    <div id={style.nav}>
        {users.map((x)=>{ 
            let btn=(e)=>{
                console.log(e.target.innerText);
                // e.target.innerText='cancel rquest'
                if(e.target.innerText=='ADD FRIEND'){
                    e.target.innerText='CANCEL REQUEST'  
                    alert(`friend request sent ${x.login}`)
                } else {
                    e.target.innerText='ADD FRIEND'
                }
            }
            let sendMessage=()=>{
                let message = prompt("enter message")
                console.log(message);
            }
            return(
                <div id={style.profile}>
                    <img src={x.avatar_url} alt="" />
                    <p>{x.login}</p>
                    <h6>{x.login}</h6>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, dolores!</p>

                    <button onClick={btn}>ADD FRIEND</button>
                    <button onClick={sendMessage}>MESSAGE</button>
            
                </div>
            )
        })}
    </div>
  )
}
export default Project