import React from "react";
import Graph from "./Graph";
import "./Schedule.css";
const Schedule = () => {
	return (
		<div>
			<div className="schedule">
				<div className="scheduleBox">
					<h4 className="scheduleText">SCHEDULE</h4>
					<h4 style={{ marginTop: "-1px" }}>❔</h4>
				</div>
			</div>
			<div className="receiveBox">
				<p className="receiveText">
					Receive <b>🗲 Anytime Consult</b>
				</p>
			</div>
			<p className="scheduleDay">TODAY . MONDAY</p>
			<div className="time1">
				<p className="time"> 9:00 AM - 9:40 AM • 40 minutes</p>
			</div>
			<p className="scheduleDay2">TOMORROW . TUESDAY</p>
			<div className="time2">
				<p className="time"> 9:00 AM - 9:40 AM • 40 minutes</p>
			</div>
			<div className="time3">
				<p className="time"> 9:00 AM - 9:40 AM • 40 minutes</p>
			</div>
			<div className="time4">
				<p className="time"> 9:00 AM - 9:40 AM • 40 minutes</p>
			</div>
			<div className="time5">
				<p className="time" style={{color:"red"}}> 9:00 AM - 9:40 AM • 40 minutes</p>
				<p className="viewAll">View all schedule</p>
			</div>
			<p className="scheduleDay3">WEDENESDAY</p>

			<Graph/>
		</div>
	);
};

export default Schedule;
