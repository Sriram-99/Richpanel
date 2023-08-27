import React,{useEffect} from 'react'
import proxy from '../../actions/proxy';
import axios from 'axios';
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

    return (<h2>Payment success</h2>  );
  
}

export default Paymentsuccess