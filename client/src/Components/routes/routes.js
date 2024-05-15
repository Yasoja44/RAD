import React from "react";
import { BrowserRouter as Router, Route, Routes as Switch} from 'react-router-dom';

import {Provider} from "react-redux";
import store from "../../Store";
import About from "../../registration/pages/aboutUs/About Us";
import User from "../../registration/user";
import Admin from "../../registration/admin";
import Employee from "../../registration/employee";
import Login from "../../registration/pages/login/login";
import Profile from "../../registration/pages/profile/profile";
import Forgot from "../../registration/pages/forgot/forgot";
import Register from "../../registration/pages/register/register";
import AdminEditUser from "../../registration/pages/admin/AdminEditUser";
import GetAllUsers from "../../registration/pages/admin/getAllUser";
import AdminRegister from "../../registration/pages/admin/adminAddEmployee";
import Reset from "../../registration/pages/reset/reset";
import ConfirmEmail from "../../Actions/confirmEmail";
import Homepage from "../../registration/Homepage";
import ContactUs from "../../registration/pages/ContactUs/contactUs";

import AddRecord from "../../Components/record/addRecord";
import ShowRecord from "../../Components/record/showRecord";

function Routes() {
    return (
        <div>
            <Provider store={store}>
                <Router>
                    <Switch>
                        <Route>
                            {/* Registration Routes */}
                            <Route path="/" element={<Homepage/>} exact/>
                            <Route path="/about" element={<About />} />
                            <Route path="/contactUs" element={<ContactUs />} />
                            <Route path="/doctor" element={<User />} />
                            <Route path="/admin" element={<Admin />} />
                            <Route path="/patient" element={<Employee />} />

                            <Route path="/login" element={<Login /> } />
                            <Route path="/profile" element={<Profile />} />
                            <Route path="/forgot" element={<Forgot />} />

                            <Route path="/register" element={<Register />}  />

                            <Route path="/edit_user/:id" element={<AdminEditUser />} />
                            <Route path="/getAll" element={<GetAllUsers />} />
                            <Route path="/adminReg" element={<AdminRegister />} />

                            <Route path="/users/reset_password/:id" element={<Reset />}/>
                            <Route path="/users/activate/:auth_token" element={<ConfirmEmail />}/>

                            {/* Record Routes */}
                            <Route path="/addRecord/:id" element={<AddRecord />} />
                            <Route path="/showRecord/:id" element={<ShowRecord />} />
                        </Route>
                    </Switch>
                </Router>
            </Provider>
        </div>
    );
}

export default Routes;
