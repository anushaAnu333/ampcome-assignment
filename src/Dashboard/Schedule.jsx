import React from "react";
import "./Schedule.css";
const Schedule = () => {
	return (
		<div >
			<div className="schedule">
				<div className="dashRightInnerDiv">
					<h4 className="scheduleText">SCHEDULE</h4>
					<h4 className="qstnMark">❔</h4>
				</div>
			</div>
			<div className="receiveDiv">
				<p className="receiveText">
					Receive <b>🗲 Anytime Consult</b>
				</p>
			</div>
			<p className="todayText">TODAY . MONDAY</p>
			<div className="innerDiv1">
				<p className="timeText"> 9:00 AM - 9:40 AM • 40 minutes</p>
			</div>
			<p className="tomorrowTuesday">TOMORROW . TUESDAY</p>
			<div className="innerDiv2">
				<p className="timeText"> 9:00 AM - 9:40 AM • 40 minutes</p>
			</div>
			<div className="innerDiv3">
				<p className="timeText"> 9:00 AM - 9:40 AM • 40 minutes</p>
			</div>
			<div className="innerDiv4">
				<p className="timeText"> 9:00 AM - 9:40 AM • 40 minutes</p>
			</div>
			<div className="innerDiv5">
				<p className="timeText"> 9:00 AM - 9:40 AM • 40 minutes</p>
				<p className="viewAllText1">View all schedule</p>
			</div>
			<p className="wedenesday">WEDENESDAY</p>

			<div className="bottonLine1"></div>
			<div className="bottonLine2"></div>

			<div className="dashboardGraph"></div>
			<p className="historyText">CONSULTATION HISTORY</p>
			<p className="allvisit">KR4ALL Visit</p>

			<img src="" className="lineGraph" alt="lineGraph" />

			<div>
				<div className="lineDiv"></div>
				<h3 className="graphCount">61</h3>
				<h3 className="graphText1">In-person Visit</h3>
				<p className="graphText2">14 min Avg time</p>
			</div>
			<div>
				<div className="lineDiv2"></div>
				<h3 className="graphCoun4">15</h3>
				<h3 className="graphText5">On line Visit</h3>
				<p className="graphText6">14 min Avg time</p>
			</div>
			<div>
				<div className="lineDiv3"></div>
				<h3 className="graphCount7">12</h3>
				<h3 className="graphText8">Anytime Consult</h3>
				<p className="graphText9">14 min Avg time</p>
			</div>
		</div>
	);
};

export default Schedule;
