const Login = () => {

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

    return(
            <div className='login-container' style={loginBoxStyle}>
            <h3>Please Login</h3>
            <input type='text' style={{margin:'10px'}}></input>
            <input type='text' style={{margin:'10px'}}></input>
            <button style={{margin:'20px'}}>Submit</button>
            </div>)
}

export default Login;