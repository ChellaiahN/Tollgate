function Tolldata(item){
    var tollss = JSON.parse(localStorage.getItem('Tollentry') || "[]")
    
  
    return (
        
        <tr>
            <td>{item.name.Tollname}</td>
            <td>{item.name.FareDetails[0].Single}/{item.name.FareDetails[0].return}</td>
            <td>{item.name.FareDetails[1].Single}/{item.name.FareDetails[1].return}</td>
            <td>{item.name.FareDetails[2].Single}/{item.name.FareDetails[2].return}</td>
            <td>{item.name.FareDetails[3].Single}/{item.name.FareDetails[3].return}</td>
            
        </tr>
        
    )
}

export default Tolldata;