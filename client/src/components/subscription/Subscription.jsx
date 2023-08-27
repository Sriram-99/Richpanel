import React,{useState,useEffect} from 'react';
import './Subscription.css';
import Paybutton from './Paybutton'
import axios from 'axios';
import proxy from '../../actions/proxy';
const Subscription = () => {
   const [plans,setPlans]=useState([{
    "planType": {
      "Mobile": {
        "monthlyPrice": 999,
      },
      "Basic": {
        "monthlyPrice": 999,
      },
      "Standard": {
        "monthlyPrice": 999,
      },
      "Premium": {
        "monthlyPrice": 999,
      }
    }
  },
  {
    "planType": {
      "Mobile": {
        "monthlyPrice": 9999,
      },
      "Basic": {
        "monthlyPrice": 9999,
       
      },
      "Standard": {
        "monthlyPrice": 9999,
        
      },
      "Premium": {
        "monthlyPrice": 9999,
      }
    }
  }]);
   useEffect(()=>{
    axios.get(`${proxy}/api/adddata/plans`)
      .then(response => {
        setPlans(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
   },[]);
    const Monthly=plans[0];
    const Yearly=plans[1];
    console.log(plans);
    // const [btn,setBtn]=useState(0);
    const [btn,setbtn]=useState(0);
    const [plan,setPlan]=useState(1);
    const [block,setBlock]=useState(true);
  return (
    <>
    <div style={{display:"flex" ,alignItems:"center" ,justifyContent:"center",marginBottom:"2vh"}}><h1>Choose the right plan for you</h1></div>
    <div className='selectmain'>
      <button style={{backgroundColor:btn==0?"black":"white",color:btn==1?"black":"white"}} onClick={()=>setbtn(0)}>Monthly</button>
      <button style={{backgroundColor:btn==1?"black":"white",color:btn==0?"black":"white"}} onClick={()=>setbtn(1)}>Yearly</button>
    </div>
    <div className='pricingmain'>
    <div className='pricingblock'>
    <h1>Mobile</h1>
       <h3>₹{btn==0?Monthly.planType.Mobile.monthlyPrice:Yearly.planType.Mobile.monthlyPrice}
       <small>{btn==0?"/month":"/year"}</small></h3>
       <p>Video Quality is {btn==0?Monthly.planType.Mobile.video:Yearly.planType.Mobile.video}</p>
       <p>Video supports upto {btn==0?Monthly.planType.Mobile.resolution:Yearly.planType.Mobile.resolution}</p>
       <p>Phone supported</p>
       <p>Tablet supported</p>
       <p>computer not supported</p>
       <p>Tv not supported</p>
       <Paybutton items={{"mt":`${btn}`,"pt":1}}/>
    </div>
    <div className='pricingblock'>
    <h1>Basic</h1>
       <h3>₹{btn==0?Monthly.planType.Basic.monthlyPrice:Yearly.planType.Basic.monthlyPrice}
       <small>{btn==0?"/month":"/year"}</small></h3>
       <p>Video Quality is {btn==0?Monthly.planType.Basic.video:Yearly.planType.Basic.video}</p>
       <p>Video supports upto {btn==0?Monthly.planType.Basic.resolution:Yearly.planType.Basic.resolution}</p>
       <p>Phone supported</p>
       <p>Tablet supported</p>
       <p>computer supported</p>
       <p>Tv not supported</p>
       <Paybutton items={{"mt":`${btn}`,"pt":2}}/>
    </div>
    <div className='pricingblock'>
    <h1>Standard</h1>
       <h3>₹{btn==0?Monthly.planType.Standard.monthlyPrice:Yearly.planType.Standard.monthlyPrice}
       <small>{btn==0?"/month":"/year"}</small></h3>
       <p>Video Quality is {btn==0?Monthly.planType.Standard.video:Yearly.planType.Standard.video}</p>
       <p>Video supports upto {btn==0?Monthly.planType.Standard.resolution:Yearly.planType.Standard.resolution}</p>
       <p>Phone supported</p>
       <p>Tablet supported</p>
       <p>computer supported</p>
       <p>Tv supported</p>
       <Paybutton items={{"mt":`${btn}`,"pt":3}}/>
    </div>
    <div className='pricingblock'>
    <h1>Premium</h1>
       <h3>₹{btn==0?Monthly.planType.Premium.monthlyPrice:Yearly.planType.Premium.monthlyPrice}
       <small>{btn==0?"/month":"/year"}</small></h3>
       <p>Video Quality is {btn==0?Monthly.planType.Premium.video:Yearly.planType.Premium.video}</p>
       <p>Video supports upto {btn==0?Monthly.planType.Premium.resolution:Yearly.planType.Premium.resolution}</p>
       <p>Phone supported</p>
       <p>Tablet supported</p>
       <p>computer supported</p>
       <p>Tv supported</p>
       <Paybutton items={{"mt":`${btn}`,"pt":4}}/>
    </div>
    </div>
    </>
  );
};

export default Subscription;
