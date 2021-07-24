import React,{useState} from "react";
import { withRouter } from "react-router";
import { LoginForm } from "../../components/LoginUI/login-form";
import AuthLayout from "../../hoc/auth-layout";

interface IUserData  {
    username: string;
    password: string;
    loading: boolean;
    errors: any[];
}

const Login = (props:any) => {
    const [_userData, _setUserData] = useState<IUserData>({
        username: '',
        password:'',
        loading: false,
        errors:[],
    });

  const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    _setUserData({
        ..._userData,
        [e.currentTarget.name]: e.currentTarget.value 
    });
}

const isFormvalid = ({username,password}:IUserData) => username && password;

const handleSubmit = (event:any) => {
    if(isFormvalid(_userData)){
        event.preventDefault();
        localStorage.setItem('username',_userData.username);
        if(window.localStorage.getItem('username')){
            props.history.push('/dashboard');
        }
    }else{
        _setUserData({
            ..._userData,
            errors: _userData.errors.concat({message:"All fields are required!"}),
        });
    }
}

    return(
        <AuthLayout>
            <LoginForm handleChange={handleChange}  handleSubmit={handleSubmit} data={_userData}  />
        </AuthLayout>
    );
}


export default withRouter(Login);