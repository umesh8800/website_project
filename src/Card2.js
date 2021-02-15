import React from 'react'
import Button from './Button'
import Login from './Login'

function Card2() {
    return (
        <>
        {/* <div class="card2">
    <div class="card-horizontal">
        <div class="img-square-wrapper">
        <Login/>
        </div>
        <div class="card-body1">
            <h4 class="card-title"> {props.intro} </h4>
            <Button/>
        </div>
    </div>
    <div class="card-footer">
        
    </div>
</div> */}


<div class="row">
  <div class="col-sm-6">
    <div class="card">
      <div class="card-body">
          <form className="form-group">
          <div class="container">
	<div class="d-flex justify-content-center h-100">
		<div class="card">
			<div class="card-header">
				<h3>Sign In</h3>
				<div class="d-flex justify-content-end social_icon">
					<span><i class="fab fa-facebook-square"></i></span>
					<span><i class="fab fa-google-plus-square"></i></span>
					<span><i class="fab fa-twitter-square"></i></span>
				</div>
			</div>
			<div class="card-body">
				<form>
					<div class="input-group form-group">
						<div class="input-group-prepend">
							<span class="input-group-text"><i class="fas fa-user"></i></span>
						</div>
						<input type="text" class="form-control" placeholder="username"/>
						
					</div>
					<div class="input-group form-group">
						<div class="input-group-prepend">
							<span class="input-group-text"><i class="fas fa-key"></i></span>
						</div>
						<input type="password" class="form-control" placeholder="password"/>
					</div>
					<div class="row align-items-center remember">
						<input type="checkbox"/>Remember Me
					</div>
					<div class="form-group">
						<input type="submit" value="Login" class="btn float-right login_btn"/>
					</div>
				</form>
			</div>
			<div class="card-footer">
				<div class="d-flex justify-content-center links">
					Don't have an account?<a href="#">Sign Up</a>
				</div>
				<div class="d-flex justify-content-center">
					<a href="#">Forgot your password?</a>
				</div>
			</div>
		</div>
	</div>
</div>
          </form>
        <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
    </div>
  </div>
  <div class="col-sm-6">
    <div class="card">
      <div class="card-body">
      <Button/> 
      </div>
    </div>
  </div>
</div>

            
        </>
    )
}

export default Card2
