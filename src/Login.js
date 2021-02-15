import React from 'react';
import './Login.css'

function Login() {
    return (
        <>
            <div class="container">
                <div class="row main">
                    <div class="panel-heading">
                        <div class="panel-title text-center">
                            
                            <hr />
                        </div>
                    </div>
                    <div class="main-login main-center">
                        <form class="form-horizontal" method="post" action="#">
                            <div class="form-group">
                                <label for="username" class="cols-sm-2 control-label">Username</label>
                                <div class="cols-sm-10">
                                    <div class="input-group">
                                        <span class="input-group-addon"><i class="fa fa-user fa" aria-hidden="true"></i></span>
                                        <input type="text" class="form-control" name="username" id="username" placeholder="Enter your Username" />
                                    </div>
                                </div>
                            </div>

                            <div class="form-group">
                                <label for="password" class="cols-sm-2 control-label">Password</label>
                                <div class="cols-sm-10">
                                    <div class="input-group">
                                        <span class="input-group-addon"><i class="fa fa-lock fa-lg" aria-hidden="true"></i></span>
                                        <input type="password" class="form-control" name="password" id="password" placeholder="Enter your Password" />
                                    </div>
                                </div>
                            </div>

                            <div class="form-group ">
                                <button type="button" class="btn btn-primary btn-lg btn-block login-button">Sign in</button>
                            </div>
                            <div class="login-register">
                                <a href="create_account.php">Create account</a> or <a href="reset_password.php">reset password</a>
                            </div>
                        </form>
                    </div>
                </div>
            </div>


        </>
    )
}

export default Login