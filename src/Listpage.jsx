import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter , faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import {useState} from 'react'
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import AddToll from "./AddToll";
import AddEntry from "./AddEntry";
import Vehicledata from "./Vehicledata";

function Listpage() {

  const[searchh,setSearch]=useState('')
  const[filt,setFilt]=useState('')

  var tollsss =JSON.parse(localStorage.getItem('Tollentry') || "[]")
  var entryyy = JSON.parse(localStorage.getItem('Vehicleentry') || "[]")


  return (
    <>  
      <div>
            <AddEntry></AddEntry> 
            <AddToll></AddToll>

            <Link to ="/viewtolls"><button>View all tolls </button></Link><span> </span>
            <input onChange={(a)=>{setSearch(a.target.value)}} type="text" value={searchh}
             placeholder="Search by Vehicle number" ></input><span> </span>
             {/* <button ><FontAwesomeIcon icon={faMagnifyingGlass}/></button> <span/> */}
            
            
            <button ><FontAwesomeIcon icon={faFilter} />
            <select  onChange={(b)=>{setFilt(b.target.value)}} value={filt} >
              <option selected value="All">ALL </option>
              {tollsss.map((e)=>{return <option value={e.Tollname}>{e.Tollname}</option>})}
              </select>
            </button>
            

            <div style={{backgroundColor:"yellow"}}>NOTE: Please enter Vehicle number and then filter by location.
            If search box filter doesnt work , do Refresh .  </div>
                     
          </div><br/>
        

      <div>
      <table style={{width:"100%"}}>
        <tr>
          <th >VEHICLE TYPE</th>
          <th >VEHICLE NUMBER</th> 
          <th >DATE / TIME </th>
          <th >TOLL NAME</th> 
          <th >TARRIF </th>
        </tr>

       
        {entryyy.filter((val)=>{
          
           if ((val.vehicleNumber.toLowerCase().includes(searchh.toLowerCase()) && 
          val.tollnamee.toLowerCase().includes(filt.toLowerCase())) || (val.tollnamee.toLowerCase().includes(filt.toLowerCase()) &&
          val.vehicleNumber.toLowerCase().includes(searchh.toLowerCase())))
          {
            return val
          }else if ((searchh === " " || filt === 'All' ) ){
            return val
          }}).map((item)=>{
                return<Vehicledata name = {item}></Vehicledata> 
            })}

            

      </table>
      </div><br/>
      
    </>
  )
}

export default Listpage
