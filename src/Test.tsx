import React,{useEffect} from 'react';
import {connect} from 'react-redux';
import {fetchUsers} from './redux/User/UserActions'


 function Test({userData,fetchUsers}:any) {

    useEffect(() => {
        
            fetchUsers()
        
        
    },[])
    
    


  return <div></div>;
}

const mapStateToProps = (state:any) =>{
    return {
        userData:state.user
    }
}




const mapDispatchToProps = (dispatch:any) =>{
    return {
        fetchUsers: ()=>  dispatch(fetchUsers()),
    }
}




export default connect(mapStateToProps,mapDispatchToProps)(Test)
