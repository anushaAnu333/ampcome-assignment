import React from "react";
import "./Appointment.css";
import Fill from "../images/Fill.png";
const Appointment = () => {
    const data = [{
        id:1,
        image:"https://th.bing.com/th/id/OIP.L-PLw9YL0s6ErCIcuprlKgAAAA?w=171&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7",
        name:"Prajeesh",
        consultation:"In Person  •  2:20 pm",
        queue:"To be finalized"
    },
    {
        id:2,
        image:"https://th.bing.com/th/id/OIP.L-PLw9YL0s6ErCIcuprlKgAAAA?w=171&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7",
        name:"Risha Mahin",
        consultation:"Anytime Consultation  •  2:30 pm",
        queue:"Waiting • 40 min"
    },
    {
        id:3,
        image:"https://th.bing.com/th/id/OIP.L-PLw9YL0s6ErCIcuprlKgAAAA?w=171&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7",
        name:"Riju K",
        consultation:"Video Consultation  •  2:40 pm",
        queue:"Waiting • 40 min"
    },
    {
        id:4,
        image:"https://th.bing.com/th/id/OIP.L-PLw9YL0s6ErCIcuprlKgAAAA?w=171&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7",
        name:"Setia S",
        consultation:"Video Consultation  •  2:40 pm",
        queue:"Waiting • 40 min"
    }]
    
	return (
		<div className="appointment">
			<div className="firstBox" style={{ display: "flex" }}>
				<h4>APPOINTMENTS</h4>
				<img src="" alt="" />
			</div>
			<div className="secondBox" style={{ display: "flex" ,justifyContent:"space-between"}}>
				<h6>Waiting Queue (6)</h6>
				<h6>View Queue</h6>
			</div>
            {data.map((item)=>(
    <div key={item.id} className="profileData">
      
            
      
    <div>
        <img className="profile" src={item.image} alt=""/>
    </div>
    <div className="detail">
        <p className="name">{item.name}</p>
        <div   style={{display:"flex"}}>
       
        <p className="consultation">{item.consultation}</p>
        </div>
      
    </div>
    <div className="viewQueue" style={{marginLeft:"30px"}}>
        <p style={{background: "#d7a95a"
}}>{item.queue}</p>
    </div>
    <div>
  
    </div>
    
    </div>
     ))}
			
		</div>
	);
};

export default Appointment;



