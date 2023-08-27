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
    const [btn,setBtn]=useState(true);
    const [plan,setPlan]=useState(1);
    const [block,setBlock]=useState(true);
  return (
    <div>
    <div style={{display:block?"block":"none"}}  className="subscription-table-container">
      <table className="subscription-table">
        <thead>
          <tr>
            <th>
              <button  style={{
                        backgroundColor: btn ? 'white' : '#007bff',
                        color: btn ? '#007bff' : 'white',}}
             onClick={() => setBtn(1)} className=" btn-one main-subscription-button">Monthly</button>

              <button style={{
                        backgroundColor: !btn ? 'white' : '#007bff',
                        color: !btn ? '#007bff' : 'white',
          }}
             onClick={() => setBtn(0)}  className=" btn-two main-subscription-button">Yearly</button>
            </th>
            <th >
              <button onClick={()=>setPlan(1)} className="subscription-button">Mobile</button>
            </th>
            <th>
              <button onClick={()=>setPlan(2)} className="subscription-button">Basic</button>
            </th>
            <th>
              <button onClick={()=>setPlan(3)} className="subscription-button">Standard</button>
            </th>
            <th>
              <button onClick={()=>setPlan(4)} className="subscription-button">Premium</button>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Monthly Price</td>
            <td  style={{ backgroundColor: plan==1 ? "#659dd8" : 'white'}}>₹{btn?Monthly.planType.Mobile.monthlyPrice:Yearly.planType.Mobile.monthlyPrice}</td>
            <td style={{ backgroundColor: plan==2 ? "#659dd8" : 'white'}}>₹{btn?Monthly.planType.Basic.monthlyPrice:Yearly.planType.Basic.monthlyPrice}</td>
            <td style={{ backgroundColor: plan==3 ? "#659dd8" : 'white'}}>₹{btn?Monthly.planType.Standard.monthlyPrice:Yearly.planType.Standard.monthlyPrice}</td>
            <td style={{ backgroundColor: plan==4 ? "#659dd8" : 'white'}}>₹{btn?Monthly.planType.Premium.monthlyPrice:Yearly.planType.Premium.monthlyPrice}</td>
          </tr>
          <tr>
            <td>Video quality</td>
            <td style={{ backgroundColor: plan==1 ? "#659dd8" : 'white'}}>Good</td>
            <td style={{ backgroundColor: plan==2 ? "#659dd8" : 'white'}}>Good</td>
            <td style={{ backgroundColor: plan==3 ? "#659dd8" : 'white'}}>Better</td>
            <td style={{ backgroundColor: plan==4 ? "#659dd8" : 'white'}}>Best</td>
          </tr>
          <tr>
            <td>Resolution</td>
            <td style={{ backgroundColor: plan==1 ? "#659dd8" : 'white'}}>480p</td>
            <td style={{ backgroundColor: plan==2 ? "#659dd8" : 'white'}}>480p</td>
            <td style={{ backgroundColor: plan==3 ? "#659dd8" : 'white'}}>1080p</td>
            <td style={{ backgroundColor: plan==4 ? "#659dd8" : 'white'}}>4k+HDR</td>
          </tr>
          <tr>
            <td>Devices you can use to watch</td>
            <td  style={{ backgroundColor: plan==1 ? "#659dd8" : 'white'}}>Phone</td>
            <td style={{ backgroundColor: plan==2 ? "#659dd8" : 'white'}}>Phone</td>
            <td style={{ backgroundColor: plan==3 ? "#659dd8" : 'white'}}>Phone</td>
            <td style={{ backgroundColor: plan==4 ? "#659dd8" : 'white'}}>Phone</td>
          </tr>
          <tr>
            <td></td>
            <td style={{ backgroundColor: plan==1 ? "#659dd8" : 'white'}}>Tablet</td>
            <td style={{ backgroundColor: plan==2 ? "#659dd8" : 'white'}}>Tablet</td>
            <td style={{ backgroundColor: plan==3 ? "#659dd8" : 'white'}}>Tablet</td>
            <td style={{ backgroundColor: plan==4 ? "#659dd8" : 'white'}}>Tablet</td>
          </tr>
          <tr>
            <td></td>
            <td style={{ backgroundColor: plan==1 ? "#659dd8" : 'white'}}></td>
            <td style={{ backgroundColor: plan==2 ? "#659dd8" : 'white'}}>Computer</td>
            <td style={{ backgroundColor: plan==3 ? "#659dd8" : 'white'}}>Computer</td>
            <td style={{ backgroundColor: plan==4 ? "#659dd8" : 'white'}}>Computer</td>
          </tr>
          <tr>
            <td></td>
            <td style={{ backgroundColor: plan==1 ? "#659dd8" : 'white'}}></td>
            <td style={{ backgroundColor: plan==2 ? "#659dd8" : 'white'}}>Tv</td>
            <td style={{ backgroundColor: plan==3 ? "#659dd8" : 'white'}}>Tv</td>
            <td style={{ backgroundColor: plan==4 ? "#659dd8" : 'white'}}>Tv</td>
          </tr>
        </tbody>
      </table>
      <div className="next-button-container">
       <Paybutton items={{"mt":`${btn?1:0}`,"pt":`${plan}`}} className="next-button"/>
        {/* <button onClick={()=>setBlock(false)} className="next-button">Next</button> */}
      </div>
    </div>
    <div style={{display:!block?"block":"none"}}>
    <button onClick={()=>setBlock(true)} className="next-button">back</button>
    </div>
    </div>
  );
};

export default Subscription;
