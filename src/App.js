import './App.css';
import './index.css';
import { Route, Routes } from 'react-router-dom';
import { Home } from './pages/Admin/Home';
import { AddStudent } from './pages/Admin/AddStudent';
import { Login } from './pages/common/Login';
import { Register } from './pages/User/Register';
import { Profile } from './pages/Admin/Profile';
import { ViewStudents } from './pages/Admin/ViewStudents';
import { DeleteStudent } from './pages/Admin/DeleteStudent';
import { UpdateStudent } from './pages/Admin/UpdateStudent';
import { AddEmployer } from './pages/Admin/AddEmployer';
import { ViewEmployers } from './pages/Admin/ViewEmployers';
import { DeleteEmployer } from './pages/Admin/DeleteEmployer';
import { UpdateEmployer } from './pages/Admin/UpdateEmployer';
import { UserHome } from './pages/User/UserHome';
import { UserProfile } from './pages/User/UserProfile';
import { UserJobs } from './pages/User/UserJobs';
import { AppliedJobs } from './pages/User/AppliedJobs';
import { EmployerHome } from './pages/Employer/EmployerHome';
import { AddJob } from './pages/Employer/AddJob';
import { EmployerJobs } from './pages/Employer/EmployerJobs';
import { JobApplications } from './pages/Employer/JobApplications';
import { EmployerProfile } from './pages/Employer/EmployerProfile';
import { UserApplication } from './pages/User/UserApplication';
import NoPage from './pages/common/NoPage';
import { LandingPage } from './pages/common/LandingPage';
import { Analysis } from './pages/Admin/Analysis';
import About from './pages/common/About';
import { ProtectedRoutes } from './components/ProtectedRoutes';
import { ExternalJobs } from './pages/User/ExternalJobs';

function App() {
  return (
    <div>
      <Routes>
        {/* Public Routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NoPage />} />

        {/* Admin Routes */}
        <Route path="/adminhome" element={<ProtectedRoutes><Home /></ProtectedRoutes>} />
        <Route path="/addstudent" element={<ProtectedRoutes><AddStudent /></ProtectedRoutes>} />
        <Route path="/profile" element={<ProtectedRoutes><Profile /></ProtectedRoutes>} />
        <Route path="/viewstudents" element={<ProtectedRoutes><ViewStudents /></ProtectedRoutes>} />
        <Route path="/deletestudent" element={<ProtectedRoutes><DeleteStudent /></ProtectedRoutes>} />
        <Route path="/updatestudent" element={<ProtectedRoutes><UpdateStudent /></ProtectedRoutes>} />
        <Route path="/addemployer" element={<ProtectedRoutes><AddEmployer /></ProtectedRoutes>} />
        <Route path="/viewemployers" element={<ProtectedRoutes><ViewEmployers /></ProtectedRoutes>} />
        <Route path="/deleteemployer" element={<ProtectedRoutes><DeleteEmployer /></ProtectedRoutes>} />
        <Route path="/updateemployer" element={<ProtectedRoutes><UpdateEmployer /></ProtectedRoutes>} />
        <Route path="/jobanalysis" element={<ProtectedRoutes><Analysis /></ProtectedRoutes>} />

        {/* User Routes */}
        <Route path="/userhome" element={<ProtectedRoutes><UserHome /></ProtectedRoutes>} />
        <Route path="/userprofile" element={<ProtectedRoutes><UserProfile /></ProtectedRoutes>} />
        <Route path="/userjobs" element={<ProtectedRoutes><UserJobs /></ProtectedRoutes>} />
        <Route path="/appliedjobs" element={<ProtectedRoutes><AppliedJobs /></ProtectedRoutes>} />
        <Route path="/application/:id" element={<ProtectedRoutes><UserApplication /></ProtectedRoutes>} />
        <Route path="/externalJobs" element={<ProtectedRoutes><ExternalJobs/></ProtectedRoutes>}/>
        {/* Employer Routes */}
        <Route path="/employerhome" element={<ProtectedRoutes><EmployerHome /></ProtectedRoutes>} />
        <Route path="/employeraddjob" element={<ProtectedRoutes><AddJob /></ProtectedRoutes>} />
        <Route path="/employerjobs" element={<ProtectedRoutes><EmployerJobs /></ProtectedRoutes>} />
        <Route path="/jobapplications" element={<ProtectedRoutes><JobApplications /></ProtectedRoutes>} />
        <Route path="/employerprofile" element={<ProtectedRoutes><EmployerProfile /></ProtectedRoutes>} />
      </Routes>
    </div>
  );
}

export default App;
