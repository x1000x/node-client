import React, {lazy, Suspense, useEffect, useCallback} from 'react';
import {Switch, Route} from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import {auth} from "./firebase";
import {useDispatch} from "react-redux";
import {LoadingOutlined} from "@ant-design/icons";
//import { app } from 'firebase';
import { errorBoundary } from './helpers/errorBoundary';

//lazy loading
const Login = lazy(()=> import("./pages/auth/Login"));
const Register = lazy(()=> import("./pages/auth/Register"));
const Home = lazy(()=> import("./pages/Home"));
const Header = lazy(()=> import("./components/nav/Header"));
const RegisterComplete = lazy(()=> import("./pages/auth/RegisterComplete"));
const ForgotPassword = lazy(()=> import("./pages/auth/ForgotPassword"));
//const Password = lazy(()=> import("./pages/user/Password"));
const NotFound = lazy(()=> import("./pages/NotFound"));


const  App = () => {
  return (
    <Suspense
      fallback= {
       <div className ='col text-center p-5'>
         <LoadingOutlined />
       </div>
      }
    >
      <Header />
      <ToastContainer />      
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/login" component={Login}/>
        <Route exact path="/register" component={Register}/>
        <Route exact path="/register/complete" component={RegisterComplete}/>
        <Route exact path="/forgot/password" component={ForgotPassword}/>
        <Route component={NotFound}/>
      </Switch>
      </Suspense>
  );
};
//pattern design hoc
//export default App;
export default errorBoundary(App);
