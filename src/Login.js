import axios from 'axios';
import {useState} from "react";
import {useHistory} from "react-router-dom";

const Login = () => {

    const history = useHistory();

    const BASE_URL = `https://api.themoviedb.org/3`;
    const API_KEY = "dc3b33a1778d623937ff76aaf6e6080c";
    const API_KEY_STR = `api_key=${API_KEY}`;

    const [Loading, setLoading] = useState(false);

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const [user, setUser] = useState({});

    const loginBoxStyle = {
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        justifyItems:'center',
        position:'fixed',
        left: '50%',
        top: '50%',
        transform: 'translate(-50%, -50%)'
    }

    const handleUsername = (e) => {
        setUsername(e.target.value);
    }

    const handlePassword = (e) => {
        setPassword(e.target.value);
    }

    async function LoginProcess(username, password){
        try {
            setLoading(true);
            const {data: {request_token}} = await axios.get(`${BASE_URL}/authentication/token/new?${API_KEY_STR}`);
            await axios.post(`${BASE_URL}/authentication/token/validate_with_login?${API_KEY_STR}`, {
                username,
                password,
                request_token
            });
            const {data: {session_id}} = await axios.post(`${BASE_URL}/authentication/session/new?${API_KEY_STR}`, {request_token});
            axios.defaults.params = {...axios.defaults.params, session_id}
            const {data} = await axios.get(`${BASE_URL}/account?${API_KEY_STR}`);
            const userData = {
                username,
                accountId: data.id,
                sessionId: session_id,
                requestToken: request_token
            };
            localStorage.setItem('user', JSON.stringify(userData));
            setUser(userData)
            setLoading(false);
        } catch (e) {
            setLoading(false);
            console.log(e.toString())
            throw e;
        }
    }

    const handleSubmit = (e) => {
         e.preventDefault();
         LoginProcess(username,password);
         if(JSON.stringify(user) === '{}'){
             alert('User does not exist! Please try again')
         }
         else {
             history.push(`/`);
         }
    }

    return(
            <div className='login-container' style={loginBoxStyle}>
            <h3>Please Login</h3>
            <input id='username' type='text' placeholder='Username'
                   defaultValue={username} onChange={handleUsername} style={{margin:'10px'}}></input>
            <input id='password' type='password' placeholder='Password'
                   defaultValue={password} onChange={handlePassword} style={{margin:'10px'}}></input>
            <button style={{margin:'20px'}} onClick={handleSubmit}>Submit</button>
            </div>)
}

export default Login;