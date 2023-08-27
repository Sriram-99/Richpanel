import axios from 'axios';
import proxy from "../../actions/proxy";
import PropTypes from 'prop-types'
import  {connect} from 'react-redux'


const Paybutton=({items})=>{
    // router.get('/getid',auth,async(req,res)=>{
    //     res.status(200).send(req.user.id);
    // })
    const handlecheckout= async()=>{
         try{
           const rsl=  await axios.post(`${proxy}/api/stripe/create-checkout-session`,{items});
           console.log(rsl);
       
           if(rsl.data.url){
            window.location.href=rsl.data.url;
           }
         }
         catch(error){
                console.log(error);
         }
    }
    return (
        <>
            <button className='next-button' onClick={()=>handlecheckout()}>Next</button>
        </>
    );
}
Paybutton.PropTypes={

};


export default connect()(Paybutton);