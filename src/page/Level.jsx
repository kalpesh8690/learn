import React from 'react'
import "../App.css"
import { useNavigate } from 'react-router-dom'

function Level() {
    const navigate=useNavigate()
    const Hard=(()=>{
        navigate("/main",{state:8})
    })
    const Normal=(()=>{
        navigate("/main",{state:4})
    })
  return (
    <>
    <div id="level-box-main">
        <div className="level-box">
          <input
            className="normal"
            type="button"
            value="Normal"
            onClick={()=>Normal()}
          ></input>
          <input
            className="hard"
            type="button"
            value="Hard"
            onClick={()=>Hard()}
          ></input>
        </div>
      </div>
    </>
  )
}

export default Level