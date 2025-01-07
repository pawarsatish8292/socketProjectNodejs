const rooms ={};

const RoomModel = {
    joinRoom:(room, userId)=>{
        if(!rooms[room]) rooms[room] = [];
        rooms[room].push(userId);
    },
    leaveRoom:(room, userId)=>{
        if(rooms[room]){
            rooms[room]= rooms[room].filter((id)=> id !== userId);
            if(rooms[room].length === 0) delete rooms[room];
        }
    },
    getRoomUsers:(room)=>rooms[room] || [],
}

export default RoomModel;