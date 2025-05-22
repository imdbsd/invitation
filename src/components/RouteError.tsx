import * as React from 'react';
import {useNavigate} from 'react-router-dom';

const RouteError = () => {
  const navigate = useNavigate();

  React.useEffect(() => {
    navigate('/');
  }, []);

  return (
    <div>
      <h1>Page Not Found, Redirecting to https://suryaapritiedtheknot.site</h1>
    </div>
  );
};

export default RouteError;
