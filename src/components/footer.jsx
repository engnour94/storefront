

import { Typography, Link, makeStyles } from '@material-ui/core/';

const useStyles = makeStyles((theme) => ({
  footer: {
    color: 'white',
    backgroundColor: '#424242',
    padding: theme.spacing(5),
  },
}));
function Footer() {
  const classes = useStyles();
  return (
    <footer className={classes.footer}>
      <Typography variant="body2" color="inherit" align="center">
        
        <Link color="inherit" href="https://github.com/engnour94">
          Nour Abu El-Enein {'Copyright © '}
        </Link>{' '}
        {new Date().getFullYear()}
      </Typography>
    </footer>
  );
}

export default Footer;