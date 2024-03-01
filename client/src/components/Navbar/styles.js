import { makeStyles } from '@material-ui/core/styles';
import { deepPurple } from '@material-ui/core/colors';


export default makeStyles((theme) => ({
  appBar: {
    borderRadius: 15,
    margin: '30px 0',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px 50px',
  },
  heading: {
    color: 'rgba(3,155,229, 1)',
    fontFamily: 'Quantico, sans-serif',
    width: '282.61px',
    height: '72px',
    [theme.breakpoints.down('xs')]: {
      fontSize: '3rem',
      marginTop: '6px',
      marginLeft: '-73px',
    },
  },
  image: {
    marginLeft: '15px',
    borderRadius: '14px',
    width: '60px',
    height: '60px',
    [theme.breakpoints.down('xs')]: {
      width: '2rem',
      height: '2rem',
      marginLeft: '-24px',
    },
  },
  logout: {
    [theme.breakpoints.down('xs')]: {
      width: '1.2rem',
      height: '2rem',
      marginRight: '21.3rem',
    },
  },
  signIn: {
    [theme.breakpoints.down('xs')]: {
      width: '1.5rem',
      height: '2rem',
      fontSize: '0.6rem',
      marginLeft: '-11px',
    },
  },
  toolbar: {
    display: 'flex',
    justifyContent: 'flex-end',
    width: '400px',
  },
  profile: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '400px',
  },
  userName: {
    display: 'flex',
    alignItems: 'center',
    [theme.breakpoints.down('xs')]: {
      display: 'none'
    },
  },
  brandContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  purple: {
    color: theme.palette.getContrastText(deepPurple[500]),
    backgroundColor: "#142AB3",
    [theme.breakpoints.down('xs')]: {
      width: '2.0rem',
      height: '2.0rem',
      marginLeft: '-2.6rem'
    },
  },
}));