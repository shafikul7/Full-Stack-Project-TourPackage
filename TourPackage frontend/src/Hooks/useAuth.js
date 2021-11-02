import { useContext } from 'react';
import { AuthContext } from '../Context/AuthProvider';

const useAuth = () => useContext(AuthContext);

export default useAuth;
