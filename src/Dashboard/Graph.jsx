import React from 'react'
import "./Dashboard.css";
import GraphImg from "../images/Graph.png"
const Graph = () => {
  return (
    <>
    
    <div className="bottonLine1"></div>
			<div className="bottonLine2"></div>

			<div className="dashboardGraph"></div>
			<p className="historyText">CONSULTATION HISTORY</p>
			<p className="allvisit">KR4ALL Visit</p>

			<img src={GraphImg} className="lineGraph" alt="lineGraph" />

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
    
    </>
  )
}

export default Graph