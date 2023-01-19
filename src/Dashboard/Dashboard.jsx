import React from "react";
import "./Dashboard.css";
import re from "../images/Re.png";
import SideBar from "./SideBar";
import Fill from "../images/Fill.png";
import Appointment from "./Appointment";
import Schedule from "./Schedule";
const Dashboard = () => {
	return (
		<div className="mainContainer">
			<SideBar />
			<div className="rightWrapper">
				<div className="topBox"></div>

				<div className="earning">
					<div className="box">
						<img
							src={Fill}
							style={{ width: "20px", height: "20px", marginTop: "3px" }}
							alt=""
						/>
						<div className="earningBox">
							<div className="total">Total Earnings</div>
							<div className="price">$4000</div>
						</div>
					</div>

					<div className="selectOption" style={{}}>
						<select className="select">
							<option>Unit</option>
							<option>Pk Hospital</option>
						</select>
						<select className="select">
							<option>Date Duration</option>
							<option>Yesterday</option>
						</select>
					</div>
				</div>
				<div className="details">
					<div className="detailBox">
						<p>Appointments</p>
						<p>54</p>
					</div>
					<div className="detailBox">
						<p>EMR Finalised</p>
						<p>47</p>
					</div>
					<div className="detailBox">
						<p>Patient Registrations</p>
						<p>120</p>
					</div>
					<div className="detailBox">
						<p>KR4ALL Visits</p>
						<p>30</p>
					</div>
				</div>
      

        <Appointment/>
        <Schedule/>
			</div>
     
    
		</div>
	);
};

export default Dashboard;
