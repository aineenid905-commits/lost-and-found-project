mport ReportLost from './pages/ReportLost.jsx';
import ReportFound from './pages/ReportFound.jsx';
import { Link, Route, Routes } from 'react-router-dom';
import Home from './pages/Home.jsx';
import CreateReport from './pages/CreateReport.jsx';
import MyReports from './pages/MyReports.jsx';
import Login from './pages/Login.jsx';
import Register from './pages/Register.jsx';
import ClaimForm from './pages/ClaimForm.jsx';
import MyClaims from './pages/MyClaims.jsx';
import AdminDashboard from './pages/AdminDashboard.jsx';

export default function App() {
  return (
    <div>
      <header>
        <h1>UCU Lost & Found</h1>
        
    <nav>
  <Link to="/">Home</Link>{' | '}
  <Link to="/report-lost">Report Lost</Link>{' | '}
  <Link to="/report-found">Report Found</Link>{' | '}
  <Link to="/login">Login</Link>{' | '}
  <Link to="/register">Register</Link>
  </nav>
    
        
    
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/report-lost" element={<ReportLost />} />
<Route path="/report-found" element={<ReportFound />} />
          <Route path="/reports/new" element={<CreateReport />} />
          <Route path="/my-reports" element={<MyReports />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/claims/new/:reportId" element={<ClaimForm />} />
          <Route path="/my-claims" element={<MyClaims />} />
          <Route path="/admin" element={<AdminDashboard />} />
        </Routes>
      </main>
    </div>
  );
}
