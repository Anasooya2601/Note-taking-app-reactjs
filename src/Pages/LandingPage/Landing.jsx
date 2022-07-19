import React from 'react'
import "./Landing.css"
import { Link } from "react-router-dom";
const Landing = () => {
  return (
    <div>
   <h3>Note taking App</h3>
   <Link to="/signup">
            <button className="btn btn-cta">Join Now</button>
          </Link>
          <Link to="/login">
            <div className="text-bold login-link">Already have an account?</div>
          </Link>
    </div>
  )
}

export default Landing