import React, { useState, useEffect } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { AppBar, Avatar, Button, Toolbar, Typography } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import decode from 'jwt-decode';
import useStyles from './styles';
import logo from '../../images/logo.webp'; 

const Navbar = () => {
    const classes =  useStyles();
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
    const dispatch = useDispatch();
    const history = useHistory();
    const location = useLocation();

    const logout = () => {
      dispatch({ type: 'LOGOUT' });

      history.push('/')

      setUser(null);
    };

    useEffect(() => { 
      const token = user?.token;

      if(token) {
        const decodedToken = decode(token);

        if(decodedToken.exp * 1000 < new Date().getTime()) logout();
      }

      setUser(JSON.parse(localStorage.getItem('profile')));
    }, [location]);

    return (
    <AppBar className={classes.appBar} position="static" color="inherit">
      <Link to="/" style={{ textDecoration: 'none' }} className={classes.brandContainer}>
        <Typography className={classes.heading} variant="h2" align='center'>Techverse</Typography>
        {!user && (
          <img className={classes.image} src={logo} alt="icon" />
        )}
      </Link>
      <Toolbar className={classes.toolbar}>
        {user ? (
            <div className={classes.profile}>
                <Avatar className={classes.purple} alt={user.result.name} src={user.result.picture}>{user.result.name.charAt(0)}</Avatar>
                <Typography className={classes.userName} variant='h6'>{user.result.name}</Typography>
                <Button variant='contained' className={classes.logout} color="secondary" onClick={logout}>Logout</Button>
            </div>
        ) : (
            <Button className={classes.signIn} component={Link} to="/auth" variant='contained' color='primary'>Sign In</Button>
        )}

      </Toolbar>
    </AppBar>
  );
}

export default Navbar

