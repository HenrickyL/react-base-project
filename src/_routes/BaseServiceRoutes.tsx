import { Routes, Route } from 'react-router-dom';
import { Home } from '../_pages/Home';

const BaseServiceRoutes = () => {
  return (
      <Route path="/" element={<Home />} />
  );
};

export default BaseServiceRoutes;