import React, {useEffect, useState} from 'react'
import {makeStyles, InputBase, fade, List, ListItem} from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search';
import ClearIcon from '@material-ui/icons/Clear';
import { connect } from "react-redux";
import {Link} from 'react-router-dom';
import {useHistory} from 'react-router-dom';

import { getProducts } from '../../Redux/Actions/ProductActions'

const useStyle = makeStyles((theme) => ({
    search: {       
        borderRadius: 2,
        backgroundColor: '#fff',       
        marginLeft: 10,
        width: '38%',  
        display:'flex'
           
      },
      searchIcon: {
        padding: 5,
        height: '100%',       
        display: 'flex',       
        color:'blue'
      },
      inputRoot: {
        fontSize:'unset',
        width:'100%'
      },
      inputInput: {
        paddingLeft: 20       
      },
      list: {
        position: 'absolute',
        color: '#000',
        background: '#FFFFFF',
        marginTop: 36
      }
})) 
const SearchBar = (props) => {
const classes = useStyle();
const [ text, setText ] = useState('');
const [open,setOpen] = useState(true)
const history = useHistory()

useEffect(() => {
  props.getProducts()
}, [])

const getText = (e) => {
 
  setText(e.target.value);
  setOpen(false)
}

const showDetail = (product) => {
 
  setText(product.title.longTitle)
  setOpen(true);
  history.push(`/product/${product.id}`)
  
}

const clearSearch = () =>{
  setText('')
}
    return (
       
            <div className={classes.search}>
           
            <InputBase
              placeholder="Search for product, brand and more"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
              onChange={(e)=>getText(e)}
              value={text}
            />
             <div className={classes.searchIcon}>
              <SearchIcon />
              <ClearIcon onClick={clearSearch} />
            </div>
            {
              text && 
              <List className={classes.list} hidden={open}>
                {
                  props.products.filter(product=>product.title.longTitle.toLowerCase().includes(text.toLowerCase())).map(product =>(
                    <ListItem>
                      <Link to={`/product/${product.id}`} 
                      style={{textDecoration:'none', color:'inherit'}}
                      onClick={()=>showDetail(product)}>
                      {product.title.longTitle}
                      </Link>
                    </ListItem>
                  ))
                }
              </List>
            }
          </div>
       
    )
}


const mapStateToProps = state => {
  
  return {
    products: state.allProducts.products
  }

};
const mapDispatchToProps = {
  //you are using this action function of redux to call api
  getProducts
};
export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
