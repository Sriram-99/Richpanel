import React,{useState} from 'react'
import "./Temp.css"
const Temp = () => {
  const [btn,setbtn]=useState(0);
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
       <h3>$1000<small>/month</small></h3>
       <p>Video Quality is Good</p>
       <p>Video supports upto 480p</p>
       <p>Phone supported</p>
       <p>Tablet supported</p>
       <p>computer supported</p>
       <p>Tv supported</p>
       <button>Buy</button>
    </div>
    <div className='pricingblock'>
    <h1>Basic</h1>
       <h3>$1000<small>/month</small></h3>
       <p>Video Quality is Good</p>
       <p>Video supports upto 480p</p>
       <p>Phone supported</p>
       <p>Tablet supported</p>
       <p>computer supported</p>
       <p>Tv supported</p>
       <button>Buy</button>
    </div>
    <div className='pricingblock'>
    <h1>Basic</h1>
       <h3>$1000<small>/month</small></h3>
       <p>Video Quality is Good</p>
       <p>Video supports upto 480p</p>
       <p>Phone supported</p>
       <p>Tablet supported</p>
       <p>computer supported</p>
       <p>Tv supported</p>
       <button>Buy</button>
    </div>
    <div className='pricingblock'>
    <h1>Basic</h1>
       <h3>$1000<small>/month</small></h3>
       <p>Video Quality is Good</p>
       <p>Video supports upto 480p</p>
       <p>Phone supported</p>
       <p>Tablet supported</p>
       <p>computer supported</p>
       <p>Tv supported</p>
       <button>Buy</button>
    </div>
    </div>
    </>
  )
}

export default Temp