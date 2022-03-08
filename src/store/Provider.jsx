import Context from './Context'
import {useState,useEffect} from 'react'

import db from '../firebase.config'

function Provider ({children} ) {

    const error = false
    const [userss,setUserss]=useState([])
    
    const users = {
        name:'', 
        password:'',
        email:'',
    }

    const fetchBlogs=async()=>{
        const response=db.collection('NguoiDung');
        const data=await response.get();
        data.docs.forEach(item=>{
            setUserss( prev=> [...prev ,item.data()])
        })
    }

    useEffect(() => {
        fetchBlogs();
      }, [])


return (
    <Context.Provider value={{error,users,userss}}>
        {children}
    </Context.Provider>
)

}

export default Provider