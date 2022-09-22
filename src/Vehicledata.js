function Vehicledata(item){
    return (
        
        <tr>
            <td>{item.name.vehicleType}</td>
            <td>{item.name.vehicleNumber}</td>
            <td>{item.name.date}</td>
            <td>{item.name.tollnamee}</td>
            <td>{item.name.tarrif}</td>
        </tr>
        
    )
}

export default Vehicledata;