import React,{useEffect} from 'react'
import proxy from '../../actions/proxy';
import axios from 'axios';
import { Navigate, useNavigate } from 'react-router-dom';
const Paymentsuccess = () => {
    useEffect(()=>{
        axios.get(`${proxy}/api/stripe/success`)
          .then(response => {
           console.log("response");
          })
          .catch(error => {
            console.error('Error fetching data:', error);
          });
       },[]);
       const navigate=useNavigate();
    return (<>

        
       <h2>Payment success</h2>
       <p>redirecting ..........</p>
       {setTimeout(()=>{
          navigate('/dashboard');
       },2000)}
       </>  );
  
}

export default Paymentsuccess