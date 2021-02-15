import React from 'react'
import './index.css';
function Cards( props) {
  return (
    <>
{/* <div class="card">
    <div class="card-horizontal">
        <div class="img-square-wrapper">
        <img src={props.image} alt="Nature" className="bhai" />
        </div>
        <div class="card-body">
            <h4 class="card-title"> {props.intro} </h4>
            <p class="card-text" style={{ marginLeft:"10"}}> {props.text} </p>
        </div>
    </div>
    <div class="card-footer">
        
    </div>
</div> */}



<div class="card mb-3" >
  <div class="row g-0">
    <div class="col-md-4">
      <img src={props.image} className="responsive1"  alt="..."/>
    </div>
    <div class="col-md-8">
      <div class="card-body">
      <u><h5 class="card-title" style={{color:'chartreuse'}}>{ props.intro}</h5></u>  
        <p class="card-text"> {props.text} </p>
        
      </div>
    </div>
  </div>
</div>

    </>
  )
}

export default Cards
