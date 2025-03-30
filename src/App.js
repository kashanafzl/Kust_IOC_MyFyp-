import React from "react";
import "./index.css";

// react rounting cdn
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Login from "./components/login/Login";
import Home from "./components/home/Home";
import Main from "./components/dashboard/Main";
import Signup from "./components/SignUp/Signup";
import Faculty from "./components/faculty/Faculty";
import Requestforfyp from "./components/requestforfyp/Requestforfyp";
import Profile from "./components/profile/Profile";
import DrShafiullah from "./components/FacultyMembers/DrShafiullah/DrShafiullah";
import DrMuneerUmar from "./components/FacultyMembers/DrMuneerUmar";
import GraduateScholar from "./components/GraduateScholarManagement/GraduateScholar";
import Exammanagement from "./components/ExamManagement/Exammanagement";
import AdminViewForFYP from "./components/ADMIN/AdminViewForFyp";
import Timetabel from "./components/TImeTabelManagement/Timetabel";
import Forgotpassword from "./components/ForgotPassword/Forgotpassword";
import Sport from "./components/Sports/Sport";
import AdminViewtimetabel from "./components/ADMIN/AdminViewtimetabel";
import Contact from "./components/Contact/Contact";
import AdminFypMarks from "./components/ADMIN/AdminFypMarks";
import AdminSport from "./components/ADMIN/AdminSport";

// import './index.css'

export default function App() {
  return (
    <div>
      
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          {/* Faculty route */}
          <Route path="faculty" element={<Faculty />} />
          <Route path="contact" element={<Contact />} />
          {/* Faculty route */}

          {/* faculty Members */}
          <Route path="DrShafiullah" element={<DrShafiullah />} />
          <Route path="DrMuneerUmar" element={<DrMuneerUmar />} />
        {/* faculty Members */}

        {/* forgot__password page */}
        <Route path="forgot_password" element={<Forgotpassword />} />
         {/* forgot__password page */}

               {/* forgot__password page */}
        <Route path="sport" element={<Sport />} />
         {/* forgot__password page */}

          {/* Dashboard  */}
          <Route path="/dashboard" element={<Main />}>
            <Route path="profile" element={<Profile />} />
            <Route path="requestforfyp" element={<Requestforfyp />} />
            <Route path="ExamManagement" element={<Exammanagement />} />
            <Route path="timetabel" element={<Timetabel />} />
            <Route path="GraduateScholarManagement" element={<GraduateScholar />} />

            {/* admin route */}
             <Route path="adminviewfyp" element={< AdminViewForFYP />} />
             <Route path="adminviewtimetabel" element={< AdminViewtimetabel />} />
             <Route path="admin_fyp_marks" element={< AdminFypMarks />} />
             <Route path="admin_sport" element={< AdminSport />} />
       
       {/* admin route */}


            {/* <Route path="setting" element={<Setting />} /> */}
            {/* add more routes here */}
          </Route>
          {/* Dashboard  */}
        </Routes>
      </Router>
    </div>
  );
}
