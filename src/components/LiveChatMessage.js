let LiveChatMessage = ({name,text})=>{

    return (

        <div className="flex border m-2 p-2">
            <div className="mr-3 font-bold ">👤 {name}</div>
            <div>{text}</div>
        </div>
    )
}

export default LiveChatMessage
