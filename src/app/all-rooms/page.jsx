import RoomCard from '@/componenets/ui/RoomCard';
import RoomList from '@/componenets/ui/RoomList';
import { auth } from '@/lib/auth';
import { headers } from 'next/headers';
import React from 'react';

const AllRooms = async() => {
     // to get token 
    // const {token} = await auth.api.getToken({
    //     headers : await headers()
    // })
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/rooms`);
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