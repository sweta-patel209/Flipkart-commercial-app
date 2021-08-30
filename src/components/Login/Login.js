import React, { useState } from 'react'
import { Dialog, DialogContent, makeStyles, withStyles, Typography, TextField, Button } from '@material-ui/core'
import { connect } from "react-redux";
import { authenticateSignup } from '../../Service/Api'
import { getAllUser } from '../../Service/Api'
import { getUser } from '../../Redux/Actions/UserActions'

const useStyle = makeStyles({
    component: {
        display: 'flex',
        height: '70vh',
        width: '90vh'
    },
    image: {
        backgroundImage: `url(${'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png'})`,
        height: '70vh',
        backgroundRepeat: 'no-repeat',
        background: '#2874f0',
        width: '40%',
        backgroundPosition: 'center 85%',

        '& > *': {
            color: '#ffffff',
            fontWeight: 600
        }
    },
    login: {
        padding: '25px 35px',
        display: 'flex',
        flex: 1,
        flexDirection: 'column',
        '& > *': {
            marginTop: 35
        }
    },
    text: {
        color: '#878787',
        fontSize: 12
    },
    loginBtn: {
        paddingTop: 10,
        textTransform: 'none',
        background: '#fb641b',
        color: '#ffffff',
        height: 48,
        borderRadius: 2

    },
    requestBtn: {
        textTransform: 'none',
        background: '#ffffff',
        color: '#2874f0',
        height: 48,
        borderRadius: 2,
        boxShadow: '0 2px 4px 0 rgb(0 0 0 / 20%)'

    },
    createText: {
        textAlign: 'center',
        color: '#2872f0',
        fontSize: 14,
        fontWeight: 600,
        marginTop: 'auto',
        cursor: 'pointer'

    },
    error: {
        marginTop: 0,
        fontSize: 12,
        color: 'red'
    }

})

const initialValue = {
    login: {
        view: 'login',
        heading: 'Login',
        subheading: 'Get access to your Orders, Wishlist and Recommendations'
    },
    signup: {
        view: 'signup',
        heading: 'Looks like you are new here!',
        subheading: 'Sign up with your mobile number to get started'

    }
}

const signupInitialValues = {
    firstname: '',
    lastname: '',
    username: '',
    email: '',
    password: '',
    phone: ''
}

const Login = (props) => {
    
    const classes = useStyle()
    const [account, setAccount] = useState(initialValue.login)
    const [signup, setSignup] = useState(signupInitialValues)
    const [firstname, setFirstname] = useState('')
    const [lastname, setLastname] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [phone, setPhone] = useState('');
    const [loginUsername, setLoginUsername] = useState('');
    const [loginPassword, setLoginPassword] = useState('');
    const [loggedInUser, setLoggedInUser] = useState('');
    const [error, setError] = useState(false);
    const handleClose = () => {
        props.setOpen(false)
        setAccount(initialValue.login)
        setError(false)
    }

    const toggleAccount = () => {
        setAccount(initialValue.signup)
    }

    const signupUser = async () => {
        let signup1 = {
            firstname: firstname,
            lastname: lastname,
            username: username,
            email: email,
            password: password,
            phone: phone
        }
        await authenticateSignup(signup1)
        props.getUser(signup1)
        setError(false)
        handleClose();

    }

    const loginUser = async () => {
        let users = await getAllUser()
       
        let loggedInUsers = users.data
        let counter = 0
        loggedInUsers.map((user) => {
            if (user.username === loginUsername && user.password === loginPassword) {
                
                setLoggedInUser(user)
                props.getUser(user)
                setError(false)
                counter++
                handleClose();
            }
        })
        if (counter > 0) {
            setError(false)
        }
        else {
            setError(true)
        }

    }
    
    return (
        <div >

            <Dialog open={props.open} onClose={handleClose}>
                <DialogContent className={classes.component}>
                    {account.heading === 'Login' ?
                        <div className={classes.image}>
                            <Typography variant='h5' style={{ paddingTop: 45, paddingLeft: 55 }}>Login</Typography>
                            <Typography style={{ marginTop: 20, paddingLeft: 55, paddingRight: 81 }}>Get access to your Orders, Wishlist and Recommendations</Typography>
                        </div> :
                        <div className={classes.image}>
                            <Typography variant='h5' style={{ paddingTop: 45, paddingLeft: 55, paddingRight: 35 }}>{initialValue.signup.heading}</Typography>
                            <Typography style={{ marginTop: 20, paddingLeft: 55, paddingRight: 81 }}>{initialValue.signup.subheading}</Typography>
                        </div>
                    }

                    {account.heading === 'Login' ?
                        <div className={classes.login}>
                            <TextField name='username'
                                onChange={(e) => setLoginUsername(e.target.value)}
                                label='Enter Email/Mobile number' />
                            <TextField name='password'
                                onChange={(e) => setLoginPassword(e.target.value)}
                                label='Enter Password' />
                            {error && <Typography className={classes.error}>
                                Invalid username or Password
                                </Typography>

                            }
                            <Typography className={classes.text}>By continuing, you agree to Flipkart`s terms and Privacy Policy.</Typography>
                            <Button variant='contained' onClick={() => loginUser()} className={classes.loginBtn}>Login</Button>
                            <Typography className={classes.text} style={{ textAlign: 'center' }}>OR</Typography>
                            <Button variant='contained' className={classes.requestBtn}>Request OTP</Button>
                            <Typography onClick={() => toggleAccount()} className={classes.createText}>New to Flipkart create an account</Typography>
                        </div> :
                        <div className={classes.login}>
                            <TextField name='firstname'
                                label='Enter Firstname'
                                onChange={(e) => setFirstname(e.target.value)} />
                            <TextField name='lastname'
                                label='Enter Lastname'
                                onChange={(e) => setLastname(e.target.value)} />
                            <TextField name='username'
                                label='Enter Username'
                                onChange={(e) => setUsername(e.target.value)} />
                            <TextField name='email'
                                label='Enter Email'
                                onChange={(e) => setEmail(e.target.value)} />
                            <TextField name='password'
                                label='Enter Password'
                                onChange={(e) => setPassword(e.target.value)} />
                            <TextField name='phone'
                                label='Enter Phone Number'
                                onChange={(e) => setPhone(e.target.value)} />
                            <Button variant='contained'
                                onClick={() => signupUser()}
                                className={classes.loginBtn}>Signup</Button>
                        </div>
                    }
                </DialogContent>
            </Dialog>
        </div>
    )
}


const mapStateToProps = state => {
    //console.log(state.loginUser.user)
    return {

    }

};
const mapDispatchToProps = {
    getUser
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
