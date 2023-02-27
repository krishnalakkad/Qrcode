import React from "react";
import CountUp from "react-countup";
import { useState } from "react";
import ScrollTrigger from "react-scroll-trigger";

const Count = () => {
     const [counterOn, setCounterOn] = useState(false);

     return (
          <>
               <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>
                    <center className="count_image py-5">
                         <h1 className="py-3">WE Became A Family In....</h1>
                         <h2 className="m-0 p-0">1year.... 11month.... 2days</h2>
                         <center className=""
                              style={{
                                   width: '100%',
                                   fontSize: '60px',
                                   // color: '#f2edd1',
                                   padding: '',
                                   display: 'flex',
                                   justifyContent: 'center',
                              }}
                         >
                              {counterOn && <CountUp start={0} end={704} duration={5} delay={0.8} />}<div className="ms-2 days">Days</div>
                         </center>
                    </center>


               </ScrollTrigger>


          </>
     )
}

export default Count;