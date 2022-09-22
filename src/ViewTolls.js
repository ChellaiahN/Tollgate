import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter , faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import {useState} from 'react'
import { Link } from "react-router-dom";
import AddToll from "./AddToll";
import Tolldata from "./Tolldata";



function ViewTolls(){

    const[searchh,setSearchh]=useState('')
    var tollss = JSON.parse(localStorage.getItem('Tollentry') || "[]")

    
        

    return(
        <>
        <div>
            <h2>Tollgate List</h2>
        </div>
        <div>
            <AddToll></AddToll>

            <Link to ="/"><button> Back To Vehicle Logs </button></Link> <span> </span>
            
            <input onChange={(a)=>{setSearchh(a.target.value)}} type="text" value={searchh} placeholder="Search a Toll" ></input>
            
        </div>
        
        <div>
        <table style={{width:"100%"}}>
        <tr>
          <th >TOLL NAME</th>
          <th >Car/Jeep/Van</th> 
          <th >LCV </th>
          <th >Truck/Bus</th> 
          <th >Heavy vehicle </th>
          <th></th>
        </tr>

            {tollss.filter((val)=>{
          if (searchh === " "){
            return val;
          }else if (val.Tollname.toLowerCase().includes(searchh.toLowerCase()) ){
            return val
          } }).map((item)=>{
                return<Tolldata name = {item}></Tolldata>
            })}
        
        </table>
        </div>

        </>
        
    )
}


export default ViewTolls