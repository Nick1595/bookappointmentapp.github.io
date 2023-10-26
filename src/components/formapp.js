import React from "react";
import appoint from "../formicon2.png";

export default function formapp(){
    return(
      <React.Fragment>

       {/* <img src={formimg} alt="" title="form here"/> */}

       <div className='appointment-app'>
    
    <div className='appoint-img'>
    <img src={appoint} alt='appointment' title='appoint here' style={{width:"100%",height:"auto"}} />
    </div>
    <form>
      <input type='text'  placeholder="Name" required />
      <br /> <br />
      <input type='text'  placeholder="Name" required />
      <br /> <br />
      <input type='text'  placeholder="Name" required />
      <br /> <br />
      <input type='text'  placeholder="Name" required />
      <br /> <br />
      <input type='text'  placeholder="Name" required />
      <br /> <br />
      <input type='submit' value= "book Appointment"  placeholder="Name" required />
      <br /> <br />
    </form>
    </div>
       </React.Fragment>

    )
}
