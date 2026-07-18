import RoomCard from '@/componenets/ui/RoomCard';
import React from 'react';

const AllRooms = async() => {
    const res = await fetch(`${process.env.SERVER_URL}/rooms`);
    const rooms = await res.json();

    // console.log(rooms);
   return (
        <div className='container mx-auto'>
            <h3>All Study Rooms</h3>
            <RoomList rooms={rooms} />
        </div>
    );
};

export default AllRooms;