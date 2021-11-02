import React, { createContext, useState } from 'react';
import useFirebase from '../Hooks/useFirebase';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [loggedInUser, setLoggedInUser] = useState({});
    const [mainData, setMainData] = useState([]);

    const globalStates = {
        user: [loggedInUser, setLoggedInUser],
        data: [mainData, setMainData],
        allContext: useFirebase(),
    };

    return <AuthContext.Provider value={globalStates}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
