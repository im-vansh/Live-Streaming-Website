import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const [roomId,setRoomId]=useState();
    const navigate = useNavigate();

    const handleJoin = () =>{
        navigate(`/room/${roomId}`);
    }
  return (
    <div className='set'>
      <input type='text' placeholder='Enter RoomID' value={roomId} onChange={e=>setRoomId(e.target.value)}/>
      <button onClick={handleJoin}>Join Room</button>
    </div>
  )
}

export default Home
