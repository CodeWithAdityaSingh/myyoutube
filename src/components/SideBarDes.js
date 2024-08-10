let SideBarDes = ({data}) =>{
   const {query1,query2,query3,query4} = data
    return (
        <div>
            <h3 className="text-sm">{query1}</h3>
            <h3 className="text-sm">{query2}</h3>
            <h3 className="text-sm">{query3}</h3>
            <h3 className="text-sm">{query4}</h3>
           
        </div>
    )
}


export default SideBarDes