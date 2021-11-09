import { useContext } from 'react';
import { context } from './AuthProvider';

const UseAuth = () => {
    return useContext(context);
};

export default UseAuth;