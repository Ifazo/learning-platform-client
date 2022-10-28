import React from 'react';
import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoutes = ({children}) => {

    const { user } = useContext();
    const location = useLocation();

    if (!user) {
        return <Navigate to='/login' state={{from: location}} replace />
        }
    return children;
    
}

export default PrivateRoutes;