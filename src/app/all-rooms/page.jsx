import RoomCard from '@/componenets/ui/RoomCard';
import RoomList from '@/componenets/ui/RoomList';
import React from 'react';

const AllRooms = async() => {
    const res = await fetch(`${process.env.SERVER_URL}/rooms`);
    const rooms = await res.json();

    // console.log(rooms);
   return (
        <div className='container mx-auto'>
            <h3 className='text-4xl font-bold my-10'>All Study Rooms</h3>
            <RoomList rooms={rooms} />
        </div>
    );
};

export default AllRooms;