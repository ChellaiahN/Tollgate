import {useState} from 'react'


function AddEntry(){
    const [open1, setOpen1] = useState(false);
  
    const handleClickToOpen1 = () => {
      setOpen1(true);
    };

    const handleToClose1 = () => {
      setOpen1(false);
    };

    const[tollnamee,setTollnamee]=useState('')
    const[vehicletype,setVehicletype]=useState('')
    const[vehicleno,setVehicleno]=useState('')
    const[tarrif,setTarrif]=useState('')


    const vehicles = ["Car/Jeep/Van","LCV","Truck/Bus" , "Heavy vehicle"]
    var tollsss =JSON.parse(localStorage.getItem('Tollentry') || "[]")

    function saveentry(){

      var entryy = JSON.parse(localStorage.getItem('Vehicleentry') || "[]")
      var datetime= new Date().toLocaleString()
      
      var ventry={
          tollnamee:tollnamee,
          vehicleType:vehicletype,
          date:datetime,
          vehicleNumber:vehicleno,
          tarrif:tarrif,
        }
      entryy.push(ventry)
        localStorage.setItem('Vehicleentry',JSON.stringify(entryy))
        

      }

    return(
        <>
        <div>
        <h2>Toll entries / Vehicle entries</h2>
          </div>
          
            <button onClick={handleClickToOpen1}>Add vehicle entry</button><span> </span>
            <dialog open={open1} onClose={handleToClose1}>
                <form >
                    <label><h3>Add New Entry</h3></label>
                     
                    <label>Select Toll name:</label>
                    <select onChange={(b)=>{setTollnamee(b.target.value)}} value={tollnamee}>
                    <option hidden>Select Toll</option>
                    {tollsss.map((e)=>{return <option value={e.Tollname}>{e.Tollname}</option>})}
                    </select><br></br>

                    <label>Select Vehicle Type:</label>
                    <select onChange={(b)=>{setVehicletype(b.target.value)}} value={vehicletype}>
                    <option hidden>Select vehicle type</option>
                    {vehicles.map((e)=>{return <option value={e}>{e}</option>})}
                    </select><br></br>

                    <label >Vehicle Number :</label>
                    <input onChange={(b)=>{setVehicleno(b.target.value.toUpperCase())}} value={vehicleno} type="text" placeholder="Enter Vehicle Number"></input><br></br>
                    
                    <label >Tarrif:</label>
                    <input onChange={(b)=>{setTarrif(b.target.value)}} value={tarrif} type="number" placeholder="Tarrif amount"></input><br></br>
                    
                    <button onClick={saveentry}>Submit</button><span> </span>
                    <button onClick={handleToClose1}>cancel</button>
                </form>
            </dialog>
            
            
            </>

    )
    
        

    
}


export default AddEntry