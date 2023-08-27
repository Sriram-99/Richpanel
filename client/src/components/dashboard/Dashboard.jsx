import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import  {connect} from 'react-redux'
import {getCurrentProfile,deleteAccount,updateCurrProfile} from '../../actions/profile'
import Spinner from '../layout/Spinner'
import { NavLink } from 'react-router-dom'
import DashboardActions from './DashboardActions';

const Dashboard = ({getCurrentProfile,updateCurrProfile, deleteAccount,auth:{user},profile:{profile,loading}}) => {
  const [pro,setpro]=useState(true);
    useEffect(()=>{
        getCurrentProfile();
    },[getCurrentProfile,pro]);

    const handlechange=async(event)=>{  
          try{
             
              updateCurrProfile();
          }
          catch{

          }
    }
   
   return loading && profile ==null?<Spinner/>:<>
    <h1 className="large text-primary">Dashboard</h1>
      <p className="lead">
        <i className="fas fa-user" /> Welcome {user && user.name}
      </p>
      {profile != null ? (
        <>
        <div>
          <div>Type:{profile.monthlyType}</div>
          <div>Active:{profile.Active?"true":"false"}</div>
          <div>Price:{profile.price}</div>
          <div><button onClick={handlechange}>cancel</button></div>
        </div>
        <NavLink to="/subscribe" className="btn btn-primary my-1">
         
            Renew Plan
          </NavLink>
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