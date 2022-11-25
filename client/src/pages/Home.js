import { useState, useEffect } from "react";
import Job from "../components/Job";

function Home({user}) {
  const[jobs,setJobs]=useState([])
  const[userjobs,setUserjobs]=useState([])
    
  useEffect(() => {
      fetch("/userjobs").then((r) => {
        if (r.ok) {
          r.json().then((userjobs) => setUserjobs(userjobs));
        }
      });
    }, []);
    
    useEffect(() => {
        fetch("/jobjinfos").then((r) => {
          if (r.ok) {
            r.json().then((jobinfos) => setJobs(jobinfos));
          }
        });
      }, []);


  if(!user)return(
    <div>
      <button>Login</button>
      <button>Register</button>
    </div>);
  else 
    return (
      <div>
        <p>Welcome Back {user.username}</p>
        <div>
          <p>My Jobs</p>
          <button>Enter New Job</button>
          <div>
            {userjobs.map((userjob) => <Job userjob={userjob} user={user}/>)}
          </div>
        </div>
        <div>
          <p>See New Job Reviews</p>
          {/* LIST TOP 10 newest job reviews */}
        </div>
      </div>
    );
  }
  
  export default Home;