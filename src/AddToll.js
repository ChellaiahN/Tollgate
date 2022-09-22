import {useState} from 'react'

function AddToll(){
    const [open, setOpen] = useState(false);
  
    const handleClickToOpen = () => {
      setOpen(true);
    };

    const handleToClose = () => {
      setOpen(false);
    };

    const[tollname,setTollname]=useState('')
    const[vehicle,setVehicle]=useState('')
    const[vehicle1,setVehicle1]=useState('')
    const[vehicle2,setVehicle2]=useState('')
    const[vehicle3,setVehicle3]=useState('')
    const[single,setSingle]=useState('')
    const[single1,setSingle1]=useState('')
    const[single2,setSingle2]=useState('')
    const[single3,setSingle3]=useState('')
    const[returnn,setReturn]=useState('')
    const[returnn1,setReturn1]=useState('')
    const[returnn2,setReturn2]=useState('')
    const[returnn3,setReturn3]=useState('')
    // const[error,setError]=useState(false)

    const vehicles = ["Car/Jeep/Van","LCV","Truck/Bus" , "Heavy vehicle"]
    
    function savetoll(){
    
        // if (tollname===""){
        //     setError(true)
        // } if (!tollname.length == 0){
        //     setError(false)
        // }

      var tolls=JSON.parse(localStorage.getItem('Tollentry') || "[]")
      var toll={
          Tollname:tollname,
          FareDetails:[{vehicle:vehicle,Single:single,return:returnn},
          {vehicle:vehicle1,Single:single1,return:returnn1},
          {vehicle:vehicle2,Single:single2,return:returnn2},
          {vehicle:vehicle3,Single:single3,return:returnn3},  
          ],
        }
      tolls.push(toll)
        localStorage.setItem('Tollentry',JSON.stringify(tolls))
        

    }
    return(
        <>
        <button onClick={handleClickToOpen}>Add new toll</button><span> </span>
            <dialog open={open} onClose={handleToClose}>
                <form >
                    <label><h3>Add New Toll</h3></label>
                     
                    <label>Toll name:</label>
                    <input onChange={(a)=>{setTollname(a.target.value.toUpperCase())}} type="text" value ={tollname} placeholder="Enter Toll name"></input><br></br>
                    
                    <label >Vehicle fare details :</label><br></br>
                    <select  onChange={(a)=>{setVehicle(a.target.value)}} value={vehicle} >
                    <option hidden>Select vehicle type</option>
                    {vehicles.map((e)=>{return <option value={e}>{e}</option>})}
                    </select>
                    <input onChange={(a)=>{setSingle(a.target.value)}} value={single} type="number" placeholder="Single Journey" ></input>
                    <input onChange={(a)=>{setReturn(a.target.value)}} value={returnn} type="number" placeholder="Return Journey" ></input><br></br>

                    <select  onChange={(a)=>{setVehicle1(a.target.value)}} value={vehicle1} >
                    <option hidden>Select vehicle type</option>
                    {vehicles.map((e)=>{return <option value={e}>{e}</option>})}
                    </select>
                    <input onChange={(a)=>{setSingle1(a.target.value)}} value={single1} type="number" placeholder="Single Journey" ></input>
                    <input onChange={(a)=>{setReturn1(a.target.value)}} value={returnn1} type="number" placeholder="Return Journey" ></input><br></br>

                    <select onChange={(a)=>{setVehicle2(a.target.value)}} value={vehicle2} >
                    <option hidden>Select vehicle type</option>
                    {vehicles.map((e)=>{return <option value={e}>{e}</option>})}
                    </select>
                    <input onChange={(a)=>{setSingle2(a.target.value)}} value={single2} type="number" placeholder="Single Journey" ></input>
                    <input onChange={(a)=>{setReturn2(a.target.value)}} value={returnn2} type="number" placeholder="Return Journey" ></input><br></br>

                    <select onChange={(a)=>{setVehicle3(a.target.value)}} value={vehicle3} >
                    <option hidden>Select vehicle type</option>
                    {vehicles.map((e)=>{return <option value={e}>{e}</option>})}
                    </select>
                    <input onChange={(a)=>{setSingle3(a.target.value)}} value={single3} type="number" placeholder="Single Journey" ></input>
                    <input onChange={(a)=>{setReturn3(a.target.value)}} value={returnn3} type="number" placeholder="Return Journey" ></input><br></br>
                    
                    
                    <button onClick={savetoll}>submit</button><span> </span>
                    <button onClick={handleToClose}>cancel</button>
                </form>
            </dialog>

            
            </>
    )
}

export default AddToll