import { Navigate, Outlet } from 'react-router-dom';
import PropTypes from 'prop-types';

const PrivateRoute = ({ isAuthenticated }) => {
  if (!isAuthenticated) {
    return <Navigate to="/" replace />;
  }

  return <Outlet />;
};

// PropTypes define karen
PrivateRoute.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
};

export default PrivateRoute;
