import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

const Error = lazy(() => import('./pages/Error'));
const Adminpage = lazy(() => import('./pages/Adminpage'));
const Login = lazy(() => import('./components/Login'));
const Dashboard = lazy(() => import('./pages/Dashboard'));
const UserManagement = lazy(() => import('./pages/UserManagement'));
const GymManagement = lazy(() => import('./pages/GymManagement'));
const SubscriptionManagement = lazy(() => import('./pages/SubscriptionManagement'));
const AnalyticsReporting = lazy(() => import('./pages/AnalyticsReporting'));
const CommunicationSupport = lazy(() => import('./pages/CommunicationSupport'));
const DataManagement = lazy(() => import('./pages/DataManagement'));
const Registeration = lazy(() => import('./components/Registeration'));
const Fogetpassword = lazy(() => import('./components/Fogetpassword'));

function App() {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/login' element={<Login />} />
          <Route path='/registeration' element={<Registeration />} />
          <Route path='/admin' element={<Adminpage />} />
          <Route path='/forgetpassword' element={<Fogetpassword />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/user-management" element={<UserManagement />} />
          <Route path="/gym-management" element={<GymManagement />} />
          <Route path="/subscription-management" element={<SubscriptionManagement />} />
          <Route path="/analytics-reporting" element={<AnalyticsReporting />} />
          <Route path="/communication-support" element={<CommunicationSupport />} />
          <Route path="/data-management" element={<DataManagement />} />
          <Route path='*' element={<Error />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;

