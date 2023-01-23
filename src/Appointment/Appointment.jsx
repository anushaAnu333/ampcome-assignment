import React, { useState } from "react";
import SideBar from "../Dashboard/SideBar";
import "./appointment.css";

function Appoinment() {
	const data = [
		{
			id: 2422562,
			patient: "Risha Mahin",
			consultation: "First Consultation",
			team: "",
			doctor: "Anil Kumar",
			slot: "Jul 3, 2021 8:53 AM",
			status: "Cancelled",
			invoice: "Refunded",
			action: "┇",
		},
		{
			id: 2429657,
			patient: "Riju K",
			consultation: "Follow-up",
			team: "Medical Camp",
			doctor: "Greg Ferguson",
			slot: "Jul 3, 2021 8:53 AM",
			status: "Canceled",
			invoice: "Refunded",
			action: "┇",
		},
		{
			id: 2422455,
			patient: "Sunil",
			consultation: "First consultation",
			team: "Medical Camp",
			doctor: "Pankaj Dhir",
			slot: "Jul 3, 2021 8:53 AM",
			status: "Completed",
			invoice: "Paid",
			action: "┇",
		},
		{
			id: 2421751,
			patient: "Nikita Gandhik",
			consultation: "First consultation",
			team: "Medical Camp",
			doctor: "Sujata Mohan",
			slot: "Jul 3, 2021 8:53 AM",
			status: "Booked",
			invoice: "Paid",
			action: "┇",
		},
		{
			id: 2422455,
			patient: "Darshan Singh",
			consultation: "Second Opinion",
			team: "",
			doctor: "Ram Dayanand",
			slot: "Jul 3, 2021 8:53 AM",
			status: "Completed",
			invoice: "Paid",
			action: "┇",
		},
		{
			id: 2421751,
			patient: "Risha Mahin",
			consultation: "First consultation",
			team: "",
			doctor: "Prakash Jhanti",
			slot: "Jul 3, 2021 8:53 AM",
			status: "Completed",
			invoice: "Paid",
			action: "┇",
		},
	];
    
	return (
		<div className="appoinmentContainer">
			<div className="appointmentMain" >
				<div>
					<h2 className="h2">Appoinments</h2>
					<p className="p">List of booked appoinments</p>
					<button className="button">Add ⊕</button>
				</div>

				<hr className="hr" />
			</div>
<div className="nav">
<input className="search" placeholder='Search by name,number'/>
			<select className="appoinmentSelectOption">
				<option>Date</option>
			</select>
			<select className="appoinmentSelectOption">
				<option>Conseltation Type</option>
			</select>
			<select className="appoinmentSelectOption">
				<option>Status</option>
			</select>
			<select className="appoinmentSelectOption">
				<option>Invoice</option>
			</select>

</div>
		
			<SideBar />

			<div className="appointmentTable">
				<table className="patientDetail">
					<tr>
						<th >Order ID</th>
						<th>Patient</th>
						<th>Consultation</th>
						<th>Team</th>
						<th>Doctor</th>
						<th>Slot</th>
						<th>Status</th>
						<th>Invoice</th>
						<th>Action</th>
					</tr>

					{data.map((item) => (
						<tr key={item.id}>
							<td className="td1">{item.id}</td>
							<td className="td2">{item.patient}</td>
							<td className="td3">{item.consultation}</td>
							<td className="td4" >{item.team}</td>
							<td className="td5">{item.doctor}</td>
							<td className="td6">{item.slot}</td>
							<td className="td7">{item.status}</td>
							<td className="td8">{item.invoice}</td>
							<td className="td9">{item.action}</td>
						</tr>
					))}
				</table>
			</div>
		</div>
	);
}

export default Appoinment;
