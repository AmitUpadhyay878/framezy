'use client'
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { userDetailContext } from '@/contexts/userDetailContext';

const Provider = ({children}: {children: any}) => {

    const [userDetail, setUserDetail] =useState<any>(null);  

    useEffect(()=>{
        createNewUser();
    }, []);


    const createNewUser =async()=>{
        const result = await axios.post('/api/user',{});

        setUserDetail(result?.data);
    }

  return (
    <userDetailContext.Provider value={{userDetail, setUserDetail}}>
        <div>{children}</div>
    </userDetailContext.Provider>
  )
}

export default Provider