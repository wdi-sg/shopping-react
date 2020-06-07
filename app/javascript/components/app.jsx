import React from 'react';
import Search from './search';
import Product from './product';
import Cart from './cart';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './theme'
import style from './style'

class App extends React.Component {

  liftClickResult(v) {
    this.refs.putClickResult.putClickResult(v)
  }

  liftClickId(v) {
    console.log('app'+v)
    this.refs.putClickId.putClickId(v)
  }

  render() {

    return (
      <div>
        <ThemeProvider className='' theme={theme}>
          <Container className=''>
            <Grid className='' container spacing={2}>
              <Grid className='' item xs={4}>
                <Search
                liftClickResult={(v) => {this.liftClickResult(v)}}/>
              </Grid>
              <Grid className='' item xs={4}>
                <Product
                ref='putClickResult'
                liftClickId={(v) => {this.liftClickId(v)}}/>
              </Grid>
              <Grid className='' item xs={4}>
                <Cart
                ref='putClickId'/>
              </Grid>
            </Grid>
          </Container>
        </ThemeProvider>

      </div>
    );
  }
}
export default App;