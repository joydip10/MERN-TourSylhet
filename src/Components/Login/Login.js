import React from 'react';
import UseAuth from './../AuthProvider/UseAuth';
import { Button, Spinner } from "react-bootstrap";
import { useHistory, useLocation } from 'react-router';

const Login = () => {
    const { user, error, isLoading, googleSignIn, logOut,setUser,setError,setIsLoading } = UseAuth();
    const location=useLocation();
    const history=useHistory();
    let redirects="/home";
    if(location.state){
        if(location.state.from){
            redirects=location.state.from;
        }
    }
    const logInWithGoogle=()=>{
        googleSignIn()
        .then((result) => {
            setUser(result.user);
            setError('');
            history.push(redirects);
        }).catch((error) => {
            setError(error.message);
        })
        .finally(() => {
            setIsLoading(false);
        })
    }
    return (
        <div className="container mt-3">
            {
                (isLoading === true)
                    ?
                    <div className="text-center">
                        <Spinner animation="border" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </Spinner>
                    </div>
                    :
                    <div>
                        <h2>Log {(user?.email) ? "out" : "in"} with <span className="text-warning">Google</span></h2>
                        {
                            (!user?.email) &&
                            <Button variant="warning" onClick={logInWithGoogle}>Sign in/Log in with Google</Button>
                        }
                        {
                            (user?.email) &&
                            <Button variant="danger" onClick={logOut}>Sign out/Log out</Button>
                        }
                        <h6>{error}</h6>
                    </div>
            }
        </div>
    );
};

export default Login;