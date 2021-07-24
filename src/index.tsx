import React,{useEffect} from 'react';
import ReactDOM from 'react-dom';
import App from './controller/App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Switch,Route, withRouter} from 'react-router-dom';
import Landing from './pages/Landing/Landing';
import Login from './pages/Login/Login';
import Onboard from './pages/Onboard/Onboard';
import Dashboard from './pages/Dashboard/Dashboard';

const Root = ({history}:any) => {
  useEffect(()=>{
    const user_email = localStorage.getItem('username');
       if(user_email){
          history.push('/dashboard');
       }else{
         history.push('/');
       }
 },[history]);

 return(
   <Switch>
     <Route exact  path="/" component={Landing} />
     <Route  path="/login" component={Login} />
     <Route  path="/onboard" component={Onboard} />
     <Route  path="/dashboard" component={Dashboard} />
   </Switch>
 );
}

const RootwithAuth = withRouter(Root);

ReactDOM.render(
 <React.StrictMode>
 <BrowserRouter>
     <RootwithAuth />
   </BrowserRouter>
 </React.StrictMode>,
 document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
