import React from 'react';
import { connect } from 'react-redux';
import { activeCategory } from '../store/categories';
import { filterProducts } from '../store/products';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    // alignItems: 'center',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

function Categories(props) {


  function changeCategory(category) {
    props.filterProducts(category);
    props.activeCategory(category);
  }

  const classes = useStyles();

  return (
    <div>
     <h2>Browse our Categories</h2>
    <div className={classes.root}>

      <ButtonGroup variant="text" color="primary" aria-label="text primary button group">
        <Button onClick={() => changeCategory('FOOD')}>FOOD</Button>
        <Button onClick={() => changeCategory('ELECTRONICS')}>ELECTRONICS</Button>
      </ButtonGroup>
    </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  productList: state.productsReducer,
  category: state.categoriesReducer
});
const mapDispatchToProps = { activeCategory, filterProducts };

export default connect(mapStateToProps, mapDispatchToProps)(Categories);