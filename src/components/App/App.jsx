import Singup from "../Singup/Singup"
import Dashboar from '../Dashboard/Dashboard'
import Login from "../Login/Login"
import { Container } from 'react-bootstrap'
import { AuthProvider } from "../../context/AuthContext"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Updateprofile from "../UpdateProfile/Updateprofile"
import Dashboard from "../Dashboard/Dashboard"
import PrivateRoute from "../PrivateRoute/PrivateRoute"
import Forgotpassword from "../ForgotPassword/Forgotpassword"


function App() {

  return (
      <Container className="d-flex align-items-center
     justify-content-center" style={{ minHeight: '100vh'}}>
       <div className="w-100 p-4" style={{ maxWidth: '25em'}}>
         <Router>
          <AuthProvider>
            <Routes>
              <Route exact path="/" element = { <PrivateRoute>
                                                <Dashboar/>
                                                </PrivateRoute>} />
              <Route path="/update-profile" element = { <PrivateRoute>
                                                <Updateprofile/>
                                                </PrivateRoute>} />
              <Route path="/signup" element = { <Singup/>} />
              <Route path="/login" element = { <Login/>} />
              <Route path="/forgot-password" element = { <Forgotpassword/>} />
              <Route path="/update-profile" element = { <Updateprofile/>} />
            </Routes>
          </AuthProvider>
         </Router>
       </div>
      </Container>
  )
}

export default App
