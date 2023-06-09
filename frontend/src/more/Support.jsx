import React, { useRef, useState } from 'react'
import MetaData from './Metadata';
import "./Support.css";
import emailjs from "@emailjs/browser";
import BottomTab from './BottomTab.jsx';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Support = ({history}) => {

    const [done, setDone] = useState(false);

    const formRef = useRef()
    
    const handleSubmit = (e) =>{
        e.preventDefault()
        emailjs.sendForm('service_ncbqicg', 'template_z9ti6wo', formRef.current, 'sc_30sNceCGeNdYwQ')
      .then((result) => {
          console.log(result.text);
          setDone(true)
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();

    }

    return (
       <>
       <MetaData title="Support"/>
       <div 
       className='support'
       style={{
           width:"100%",
           justifyContent:"center",
           alignItems:"center",
           padding:'50px 0'
       }}>
           <h2 className='support__heading' style={{
               textAlign:"center"
           }}>Hey How can we improve our services</h2>
           <h2  className='support__heading' style={{
               textAlign:"center"
           }}>Report us for something...</h2>
           <div>
               <form style={{
                   width:"400px",
                   margin:"auto",
                   padding:"20px 0"
               }} ref={formRef}
               onSubmit={handleSubmit}
               >
                   <input type="text" placeholder='Write your Name ...' required style={{
                       border:"none",
                       outline:"none",
                       width:"100%",
                       borderBottom:"1px solid #3BB77E",
                       margin:"10px 0",
                       fontSize:"1.2vmax",
                       height:"40px"
                   }} 
                   name='to_name'
                   />
                    <input type="text" placeholder='Write a Subject ...' required style={{
                       border:"none",
                       outline:"none",
                       width:"100%",
                       borderBottom:"1px solid #3BB77E",
                       margin:"10px 0",
                       fontSize:"1.2vmax",
                       height:"40px"
                   }}
                   name='subject'
                   />
                   <input type="email" placeholder='write your Email ...' required style={{
                       border:"none",
                       outline:"none",
                       width:"100%",
                       borderBottom:"1px solid #3BB77E",
                       margin:"10px 0",
                       fontSize:"1.2vmax",
                       height:"40px"
                   }}
                   name='from_name'
                   />
                   <textarea cols="30" rows="5" required placeholder='write your message ...'
                   style={{
                    border:"none",
                    outline:"none",
                    width:"100%",
                    borderBottom:"1px solid #3BB77E",
                    margin:"10px 0",
                    fontSize:"1.2vmax",
                }}
                name='message'
                   ></textarea>
                   <button 
                   style={{
                       border:"none",
                       cursor:"pointer",
                       width:"100%",
                       background:"#3BB77E",
                       height:"40px",
                       margin:"10px 0",
                       color:"#fff",
                       fontSize:"1.2vmax"
                   }}
                   >Submit</button>
                   {done && toast.success("Thanks for your report we will reply it in very soon...")}
               </form>
               <div className='animation'>

               </div>
           </div>
       </div>
       <ToastContainer 
       position="bottom-center"
       autoClose={5000}
       hideProgressBar={false}
       newestOnTop={false}
       closeOnClick
       rtl={false}
       pauseOnFocusLoss
       draggable
       pauseOnHover
       />
       <BottomTab />
       </>
    )
}

export default Support
