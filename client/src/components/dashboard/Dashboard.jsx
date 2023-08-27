import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import  {connect} from 'react-redux'
import {getCurrentProfile,deleteAccount,updateCurrProfile} from '../../actions/profile'
import Spinner from '../layout/Spinner'
import { NavLink } from 'react-router-dom'
import getDate from './getDate'
import DashboardActions from './DashboardActions';
import "./Dashboard.css";
const Dashboard = ({getCurrentProfile,updateCurrProfile, deleteAccount,auth:{user},profile:{profile,loading}}) => {
  const [pro,setpro]=useState(true);
    useEffect(()=>{
        getCurrentProfile();
    },[getCurrentProfile,pro]);

   console.log(profile)
   const stl1={
            margin: "1vw", 
            backgroundColor:"#89CFF0" ,
            color:"#0039a6"
         }
   const stl2={
            margin: "1vw", 
            backgroundColor:"#FBCEB1" ,
            color:"#EF0107"
         }
         
   return loading && profile ==null?<Spinner/>:<>
    <h1 className="large text-primary">Dashboard</h1>
      <p className="lead">
        <i className="fas fa-user" /> Welcome {user && user.name}
      </p>
      {profile != null ? (
        <>
        {/* <div>
          <div>Type:{profile.monthlyType}</div>
          <div>Active:{profile.Active?"true":"false"}</div>
          <div>Price:{profile.price}</div>
          <div><button onClick={handlechange}>cancel</button></div>
        </div>
        <NavLink to="/subscribe" className="btn btn-primary my-1">
         
            Renew Plan
          </NavLink> */}
          <div className='dashmain' >
          <div className='firstline'>
            <div className='first_block'>
              <h3>Current Plan Details</h3>
              <p style={profile.Active ? stl1 : stl2}>
                {profile.Active ? "Active" : "Cancelled"}
              </p>
            </div>
            {profile.Active === true ? <button onClick={()=>updateCurrProfile()} className='dashbnt'>Cancel</button> : null}
          </div>
              
              
          <p>{profile.planType === 1 ? "Mobile" : ""}</p>
          <p>{profile.planType === 2 ? "Basic" : ""}</p>
          <p>{profile.planType === 3 ? "Standard" : ""}</p>
          <p>{profile.planType === 4 ? "Premium" : ""}</p>

              
              <div style={{display:'flex',alignItems:"center",justifyContent:"left"}}><h2>₹{profile.price}</h2><small style={{fontWeight:"bold"}}>/{profile.monthlyType}</small></div>
              
              <NavLink to="/subscribe" className="btn btn-primary my-1">
                {profile.Active?"Change Plan":"Get Plan"}
              </NavLink> 
              {profile.Active?<p className='txtdate'>Your subscription started on {profile.startdate?profile.startdate:getDate()} and will be renewed automatically.</p>:<p className='txtdate'>Your subscription is Expired/Cancelled please subscribe to continue</p>}
              
          </div>
          <div style={{marginTop:"5vh"}}>
          <button className="btn btn-danger" onClick={() => deleteAccount()}>
              <i className="fas fa-user-minus" /> Delete My Account
            </button></div>
        </>
      ) : (
        <> 
          
          <p>You have not yet taken a subscription, please take one to continue</p>
          <NavLink to="/subscribe" className="btn btn-primary my-1">
            Subscribe
          </NavLink>
        </>
      )}

   </> ;
};

Dashboard.propTypes = {
    getCurrentProfile:PropTypes.func.isRequired,
    updateCurrProfile:PropTypes.func.isRequired,
    deleteAccount:PropTypes.func.isRequired,
    auth:PropTypes.object.isRequired,
    profile:PropTypes.object.isRequired
};

const mapStateToProps =state=>({
    auth:state.auth,
    profile:state.profile
})
export default connect(mapStateToProps,{getCurrentProfile,deleteAccount,updateCurrProfile})(Dashboard) ;