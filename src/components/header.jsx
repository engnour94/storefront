import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { connect } from "react-redux";
import Cart from "./cart";
import { useSelector } from 'react-redux';
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

 function ButtonAppBar(props) {
  const classes = useStyles();
 console.log(props,'propssssssss')
 const cartItemsCount = useSelector(state => state.cartReducer.length)
  return (
    <div className={classes.root}>
      <AppBar position="static"  style={{'background':'white'}}>
        <Toolbar>
       
          <Typography variant="h6" className={classes.title}  style={{'color':'grey'}}>
            NOUR STORE
          </Typography>
          
          <Button color="grey">Cart ({cartItemsCount})
          <Cart />
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
const mapStateToProps = (state) => ({
  UserCart: state.cartReducer,
});

export default connect(mapStateToProps)(ButtonAppBar);
