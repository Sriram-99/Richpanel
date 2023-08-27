import axios, { formToJSON } from "axios";
import proxy from "./proxy";
import { setAlert } from "./alert";
import { GET_PROFILE,PROFILE_ERROR,LOGOUT} from "./types";
import setAuthToken from '../utils/setAuthToken';



// getting curr users profile
export const getCurrentProfile =()=>async dispatch =>{
    try{
       
        const res= await axios.get(`${proxy}/api/profile/me`);
        
        dispatch({
            type:GET_PROFILE,
            payload:res.data
        });
    }
    catch(err){
        dispatch({
            type:PROFILE_ERROR,
            payload:{msg:err.response.statusText,status:err.response.status}
        });
    }
};
export const updateCurrProfile =()=>async dispatch =>{
    try{
       
        const res= await axios.get(`${proxy}/api/profile/me/update`);
        
        dispatch({
            type:GET_PROFILE,
            payload:res.data
        });
    }
    catch(err){
        dispatch({
            type:PROFILE_ERROR,
            payload:{msg:err.response.statusText,status:err.response.status}
        });
    }
};


export const deleteAccount = () => async (dispatch) => {
  if (window.confirm('Are you sure? This can NOT be undone!')) {
    try {
      
      await axios.delete(`${proxy}/api/profile`);
      
      
      dispatch({type:LOGOUT});
      dispatch(setAlert('Your account has been permanently deleted'));
      dispatch({type:CLEAR_PROFILE});

      dispatch(setAlert('Your account has been permanently deleted'));
      
    } catch (err) {
      dispatch({
        type: PROFILE_ERROR,
        payload: { msg: err.response.statusText, status: err.response.status }
      });
    }
  }
};

