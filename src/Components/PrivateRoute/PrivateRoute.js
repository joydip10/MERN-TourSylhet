import React from 'react';
import {
    Route,
    Redirect
} from "react-router-dom";
import { Spinner } from 'react-bootstrap';
import UseAuth from '../AuthProvider/UseAuth';
const PrivateRoute = ({ children, ...rest }) => {
    const { user, isLoading } = UseAuth();
    return (
        <div>
            {
                (isLoading === true) ?
                    <div className="text-center">
                        <Spinner animation="border" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </Spinner>
                    </div>
                    :
                    <Route
                        {...rest}
                        render={({ location }) =>
                            user?.email ? (
                                children
                            ) : (
                                <Redirect
                                    to={{
                                        pathname: "/login",
                                        state: { from: location }
                                    }}
                                />
                            )
                        }
                    />
            }
            {
            }
        </div>
    );
};

export default PrivateRoute;