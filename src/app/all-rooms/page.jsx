import RoomCard from '@/componenets/ui/RoomCard';
import React from 'react';

const AllRooms = async() => {
    const res = await fetch(`${process.env.SERVER_URL}/rooms`);
    const rooms = await res.json();

    // console.log(rooms);
    return (
        <div className='container mx-auto'>
            <h3>all rooms here :</h3>
            <div className='grid grid-cols-1 md:grid-cols-3 mx-auto'>
                {
                    rooms.map((room, i) => <RoomCard key={i} room = {room}></RoomCard>)
                }

            </div>
        </div>
    );
};

export default AllRooms;