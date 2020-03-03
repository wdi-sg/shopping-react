import React, { Component } from 'react'
import Button from '@material-ui/core/Button'
import axios from 'axios'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import TableFooter from '@material-ui/core/TableFooter'
import TablePagination from '@material-ui/core/TablePagination'
import IconButton from '@material-ui/core/IconButton'
import FirstPageIcon from '@material-ui/icons/FirstPage'
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft'
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight'
import LastPageIcon from '@material-ui/icons/LastPage'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import PropTypes from 'prop-types'
import FormControl from '@material-ui/core/FormControl'
import { InputLabel, InputAdornment } from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search'
import Input from '@material-ui/core/Input'

export default class Search extends Component {
    constructor() {
        super()

        this.state = {
            products: [],
            searchField: ""
        }
    }

    onItemClick(number) {
        this.props.setActiveItem(number)
    }

    getProducts() {
        let url = '/products.json';
        if (this.state.searchField === "") {
            axios.get(url).then((response) => {
              const data = response.data
              this.setState({ products: data })
            }).catch((error)=>{
              console.log(error);
            })
        } else {
          axios.get(url, {
            params: {
              search: this.state.searchField
            }
          })
            .then((response) => {
              const data = response.data
              this.setState({ products: data })
            }).catch((error)=>{
              console.log(error);
            })
        }
      }

    textBoxUpdate(event) {
      let newWord = event.target.value
      this.setState( { searchField: newWord })
      
    }

    handleKeyPress(event) {
      if (event.key === 'Enter') {
        this.getProducts()
      }
    }


    render() {
        return (       
            <div>
                <FormControl>
                  <InputLabel
                    htmlFor="search-box">
                    Search
                  </InputLabel>
                  <Input 
                    id="search-box"
                    onChange={(event)=>{this.textBoxUpdate(event)}}
                    onKeyPress={(event) => {this.handleKeyPress(event);}}
                    startAdornment={
                      <InputAdornment position="start">
                        <SearchIcon />
                      </InputAdornment>} />
                    <br />
                  <SearchBox getProducts={() => {this.getProducts()}} />
                </FormControl>
                <ProductList 
                  products={this.state.products}
                  onItemClick={(number) => {this.onItemClick(number)}}
                />
            </div>
        )
    }
}


class SearchBox extends Component {

    getProducts () {
        this.props.getProducts();
    }

    render() {
        return (
        <Button color="primary" 
            variant="contained"
            onClick={()=>{ this.getProducts() }}>
                Search
        </Button>
        )
    }
}


function ProductList(props) {

    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

    const emptyRows = rowsPerPage - Math.min(rowsPerPage, props.products.length - page * rowsPerPage);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = event => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    const onItemClick = (event) => {
        let number = event.target.id
        props.onItemClick(number)
    }

    let productList = []
    let productsToShow = []
    if (props.products.length > 0) {
        productsToShow = props.products.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
        productList = productsToShow.map((item, index) => {
            return (
                <TableRow id={item.id} 
                key={index} 
                onClick={(event)=>{onItemClick(event)}}>
                    <TableCell id={item.id}>
                        {item.name}
                    </TableCell>
                    <TableCell id={item.id} align="right">
                        ${parseFloat(item.price).toFixed(2)}
                    </TableCell>
                </TableRow>
            )
        }
        )
    }

    return (
        <TableContainer m={2}>
            <Table size="small" aria-label="search-results">
                <TableHead>
                    <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell align="right">Price</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {productList}
                </TableBody>
                <TableFooter>
                    <TableRow>
                        <TablePagination 
                        rowsPerPageOptions={[5, 10, 20, { label: 'All', value: -1 }]}
                        colSpan={2}
                        count={props.products.length}
                        rowsPerPage={rowsPerPage}
                        page={page}
                        SelectProps={{
                            inputProps: { 'aria-label': 'rows per page' },
                            native: true,
                        }}
                        onChangePage={handleChangePage}
                        onChangeRowsPerPage={handleChangeRowsPerPage}
                        ActionsComponent={TablePaginationActions} />
                    </TableRow>
                </TableFooter>
            </Table>
        </TableContainer>
            
    )
}

const useStyles2 = makeStyles({
    table: {
      minWidth: 500,
    },
  });


const useStyles1 = makeStyles(theme => ({
root: {
    flexShrink: 0,
    marginLeft: theme.spacing(2.5),
},
}));

TablePaginationActions.propTypes = {
    count: PropTypes.number.isRequired,
    onChangePage: PropTypes.func.isRequired,
    page: PropTypes.number.isRequired,
    rowsPerPage: PropTypes.number.isRequired,
  };


function TablePaginationActions(props) {
    const classes = useStyles1();
    const theme = useTheme();
    const { count, page, rowsPerPage, onChangePage } = props;
  
    const handleFirstPageButtonClick = event => {
      onChangePage(event, 0);
    };
  
    const handleBackButtonClick = event => {
      onChangePage(event, page - 1);
    };
  
    const handleNextButtonClick = event => {
      onChangePage(event, page + 1);
    };
  
    const handleLastPageButtonClick = event => {
      onChangePage(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
    };
  
    return (
      <div className={classes.root}>
        <IconButton
          onClick={handleFirstPageButtonClick}
          disabled={page === 0}
          aria-label="first page"
        >
          {theme.direction === 'rtl' ? <LastPageIcon /> : <FirstPageIcon />}
        </IconButton>
        <IconButton onClick={handleBackButtonClick} disabled={page === 0} aria-label="previous page">
          {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
        </IconButton>
        <IconButton
          onClick={handleNextButtonClick}
          disabled={page >= Math.ceil(count / rowsPerPage) - 1}
          aria-label="next page"
        >
          {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
        </IconButton>
        <IconButton
          onClick={handleLastPageButtonClick}
          disabled={page >= Math.ceil(count / rowsPerPage) - 1}
          aria-label="last page"
        >
          {theme.direction === 'rtl' ? <FirstPageIcon /> : <LastPageIcon />}
        </IconButton>
      </div>
    )
}