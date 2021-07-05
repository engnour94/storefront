
import React from 'react';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    // height:518
  },
});

function Products(props) {
  const classes = useStyles();

  return (

    <div>
       <div style={{  display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',}}>
        <h2 style={{'font-size':'100px','margin-top':'-20px'}}>
      {props.category.activeCategory.displayName}</h2>
        <p style={{'font-size':'30px','margin-top':'-90px'}}>{props.category.activeCategory.description}</p>
      </div>
    
  <div style={{
    'display': 'flex',
	'flex-direction': 'row',
	'flex-wrap': 'wrap',
	'justify-content': 'space-around',
	'align-items': 'flex-start',
	'align-content': 'flex-start'}}> 
  {props.productList.products.map((product, idx) => (

<Card className={classes.root}>
      <CardActionArea key={idx}>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="200"
          image={product.imgUrl}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
          {product.name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="h4">
          Category: {props.category.activeCategory.displayName}
          </Typography>

          <Typography variant="body2" color="textSecondary" component="p">
         {product.description}
          </Typography>
          
          <Typography variant="body2" color="textSecondary" component="p">
        Price: {product.price}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          inventory: {product.inventory}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
        ADD TO CART
        </Button>
        <Button size="small" color="primary">
        VIEW DETAILS
        </Button>
      </CardActions>
    </Card>

        ))}

  </div>
    

    </div>
  );
  
}

const mapStateToProps = (state) => ({
  productList: state.productsReducer,
  category: state.categoriesReducer
});
export default connect(mapStateToProps)(Products);