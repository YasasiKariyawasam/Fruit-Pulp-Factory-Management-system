import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import {useParams,useNavigate} from "react-router-dom";

import EmployeeReport from "./EmployeeReport";
import DeletedEmployeesTable from "./DeletedEmployeesTable"; // Import the DeletedEmployeesTable component

function UpdateUserat() {
  const {id} =useParams()
  const [eidd , setEidd] =useState()
 
  const [weekone, setWeekone] =useState()
  const [weektwo, setWeektwo] =useState()
  const [weekthree , setWeekthree] =useState()
  const[weekfour,setWeekfour] =useState()
  const [month , setMonth] =useState()
  const [date , setDate] =useState()
  const navigate= useNavigate()

  useEffect(() => {
    axios.get('http://localhost:3001/getUserat/'+id)
    .then(result => {console.log(result)
        setEidd(result.data.eidd)
        setWeekone(result.data.weekone)
        setWeektwo(result.data.weektwo)
        setWeekthree(result.data.weekthree)
        setWeekfour(result.data.weekfour)
        setMonth(result.data.month)
        setDate(result.data.date)
        
    
    })
    .catch(err => console.log (err))

},[id] )

const Update = (e) => {
  e.preventDefault();
  axios.put("http://localhost:3001/updateUserat/"+id, { eidd,weekone,weektwo,weekthree,weekfour,month,date })
  .then(result => {
      console.log(result)
      navigate('/attendance')
  
  })

  .catch(err => console.log(err))

}

const handleChange = (e, setter) => {
  let value = e.target.value;
  // Trim any characters beyond the first 5
  value = value.slice(0, 5);
  // Replace any characters other than 0 or 1 with an empty string
  value = value.replace(/[^01]/g, "");
  // Update the input value
  setter(value);

  if (value.length > 5) {
      setErrorMessage("Maximum length is 5 characters");
  } else if (value.match(/[^01]/g)) {
      setErrorMessage("Only 0 and 1 are allowed");
  } else {
      setErrorMessage("");
  }
};
  return (
    <div >
     <nav style={{ backgroundColor: "white", padding: "10px 0", width: "100%", fontSize: "15px",boxShadow: "0 2px 4px rgba(0, 0, 0, 0.5)",fontFamily: 'Poppins, sans-serif', fontWeight: '900',  }}>
  <ul style={{ listStyleType: "none", margin: 0, padding: 0, display: "flex", justifyContent: "center" }}>
    <li style={{ marginRight: "25px" }}>
    <div style={{ 
      position: 'absolute', 
      top: '20px', 
      left: '20px',
      fontSize: '15px', 
      fontWeight: '1000', 
      fontFamily: 'Poppins, sans-serif', 
      
      color: '#F4BB29',
      marginLeft:'20px'
    }}>
      FRUIT PULP
    </div>
    <Link
        to="/HomePage"
        style={{
          color: "black",
          textDecoration: "none",
          fontWeight: "bold",
          paddingLeft: "500px",
          paddingRight: "60px",
          transition: "all 0.3s ease", // Hover transition
        }}
        onMouseOver={(e) => (e.currentTarget.style.color = "#F4BB29")} // Change text color on hover
        onMouseOut={(e) => (e.currentTarget.style.color = "black")} // Change text color on hover out
      >
        HOME
      </Link>
    </li>
          <li style={{ marginRight: "10px" }}>
            <Link
              to="/" 
              style={{
                color: "black",
                textDecoration: "none",
                fontWeight: "bold",
                paddingRight: "10px",
                transition: "all 0.3s ease", // Hover transition
              }}
              onMouseOver={(e) => (e.currentTarget.style.color = "#F4BB29")} // Change text color on hover
              onMouseOut={(e) => (e.currentTarget.style.color = "black")} // Change text color on hover out
            >
             EMPLOYEE DETAILS
            </Link>
          </li>
          <li style={{ marginRight: "10px" }}>
            <Link
              to="/attendance" 
              style={{
                color: "black",
                textDecoration: "none",
                fontWeight: "bold",
                paddingRight: "10px",
                transition: "all 0.3s ease", // Hover transition
              }}
              onMouseOver={(e) => (e.currentTarget.style.color = "#F4BB29")} // Change text color on hover
              onMouseOut={(e) => (e.currentTarget.style.color = "black")} // Change text color on hover out
            >
             EMPLOYEE ATTENDANCE
            </Link>
          </li>

          <li style={{ marginRight: "10px" }}>
            <Link
              to="/leave" 
              style={{
                color: "black",
                textDecoration: "none",
                fontWeight: "bold",
                paddingRight: "10px",
                transition: "all 0.3s ease", // Hover transition
              }}
              onMouseOver={(e) => (e.currentTarget.style.color = "#F4BB29")} // Change text color on hover
              onMouseOut={(e) => (e.currentTarget.style.color = "black")} // Change text color on hover out
            >
              EMPLOYEE LEAVE
            </Link>
          </li>

          <li style={{ marginRight: "10px" }}>
            <Link
              to="/EmployeeDetailsReport" 
              style={{
                color: "black",
                textDecoration: "none",
                fontWeight: "bold",
                paddingRight: "10px",
                transition: "all 0.3s ease", // Hover transition
              }}
              onMouseOver={(e) => (e.currentTarget.style.color = "#F4BB29")} // Change text color on hover
              onMouseOut={(e) => (e.currentTarget.style.color = "black")} // Change text color on hover out
            >
              GENARATE REPORT
            </Link>
          </li>

          <li style={{ marginRight: "10px" }}>
            <Link
              to="/deleted-employees" // Path to navigate to the deleted employees table
              style={{
                color: "black",
                textDecoration: "none",
                fontWeight: "bold",
                paddingRight: "10px",
                transition: "all 0.3s ease", // Hover transition
              }}
              onMouseOver={(e) => (e.currentTarget.style.color = "#F4BB29")} // Change text color on hover
              onMouseOut={(e) => (e.currentTarget.style.color = "black")} // Change text color on hover out
            >
              RESIGN EMPLOYEES
            </Link>
          </li>
        </ul>
      </nav>
      
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", minHeight: "100vh",padding: "20px" ,fontFamily: 'Poppins, sans-serif',backgroundColor:"#FEF29B" }}>
    <div style={{ display: "flex", width: "65%", boxShadow: "0 4px 8px rgba(0,0,0,0.3)", borderRadius: "10px", overflow: "hidden" }}>
        <div style={{ flex: 1, padding: "20px", backgroundColor: "#f8f8f8" }}>

                <form onSubmit={Update}style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
                    <h2 style={{ textAlign: "center", marginBottom: "20px" }}>Update Attendance</h2>
                   
                   
                    

                    <div style={{ marginBottom: "10px", display: "flex", alignItems: "center" }}>
                        <label htmlFor="eidd" style={{ width: "130px", marginRight: "10px",fontWeight: '700' }}>Eid</label>
                        <input type="text" placeholder="Enter Employee id" className="form-control" style={{ width: "100%",padding: "8px", margin: "5px 0 15px" }} 
                        maxLength="3" pattern="[A-Za-z0-9]*" // Allow only letters (both uppercase and lowercase) and numbers
                        title="Please enter only letters and numbers for Eid"
                        
                        value={eidd}  onChange={(e) => setEidd(e.target.value)}  disabled required />
                    </div>


                    <div style={{ marginBottom: "10px", display: "flex", alignItems: "center" }}>
                       <label htmlFor="week" style={{ width: "130px", marginRight: "10px", fontWeight: '700' }}>Week one</label>
                           <input 
                                type="number" 
                                placeholder="Enter week one" 
                                className="form-control" 
                                style={{ width: "100%", padding: "8px", margin: "5px 0 15px" }} 
                                value={weekone}   
                                onChange={(e) => handleChange(e, setWeekone)} 
                                required 
                            />
                    </div>
                    
                    <div style={{ marginBottom: "10px", display: "flex", alignItems: "center" }}>
                        <label htmlFor="number" style={{ width: "130px", marginRight: "10px",fontWeight: '700' }}>Week two</label>
                        <input type="number" placeholder="Enter week two" className="form-control" style={{ width: "100%",padding: "8px", margin: "5px 0 15px" }} 
                        
                        value={weektwo}  onChange={(e) => handleChange(e, setWeektwo)} required />
                    </div>

                    <div style={{ marginBottom: "10px", display: "flex", alignItems: "center" }}>
                        <label htmlFor="week" style={{ width: "130px", marginRight: "10px",fontWeight: '700' }}>Week  three</label>
                        <input type="number" placeholder="Enter Week three " className="form-control" style={{ width: "100%",padding: "8px", margin: "5px 0 15px" }} 
                        
                        value={weekthree}  onChange={(e) => handleChange(e, setWeekthree)} required />
                    </div>

                    <div style={{ marginBottom: "10px", display: "flex", alignItems: "center" }}>
                        <label htmlFor="week" style={{ width: "130px", marginRight: "10px",fontWeight: '700' }}>Week four</label>
                        <input type="number" placeholder="Enter Week four " className="form-control" style={{ width: "100%",padding: "8px", margin: "5px 0 15px" }} 
                        
                        value={weekfour}   onChange={(e) => handleChange(e, setWeekfour)} required />
                    </div>

                    <div style={{ marginBottom: "10px", display: "flex", alignItems: "center" }}>
                        <label htmlFor="month" style={{ width: "130px", marginRight: "10px",fontWeight: '700' }}>Month</label>
                        <input type="text" placeholder="Enter  month " className="form-control" style={{ width: "100%",padding: "8px", margin: "5px 0 15px" }} 
                        
                        value={month}   onChange={(e) => setMonth(e.target.value)} required />
                    </div>

                    <div style={{ marginBottom: "10px", display: "flex", alignItems: "center" }}>
                        <label htmlFor="date" style={{ width: "130px", marginRight: "10px",fontWeight: '700' }}>Date</label>
                        <input type="date" placeholder="Enter  date " className="form-control" style={{ width: "100%",padding: "8px", margin: "5px 0 15px" }} 
                        
                        value={date}    onChange={(e) => setDate(e.target.value)} required />
                    </div>
                    
                    

                    

                    <button style={{ marginLeft: "90px", backgroundColor: "black", color: "white", border: "none", padding: "10px 20px", borderRadius: "5px" }}>Update</button>


                </form>




           </div>
           <div style={{ flex: 1, backgroundImage: "url('/image/im4.jpg')", backgroundSize: "cover", backgroundPosition: "center", minHeight: "100%" }}>
                    {/* Optional text or additional styling can be added here */}
                </div>
        </div>


    
      
       
    </div>
    </div>
       
    
  );
}



export default UpdateUserat;
