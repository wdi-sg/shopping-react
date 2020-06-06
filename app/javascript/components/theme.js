import React from 'react'
import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  // overrides:{
  //   MuiButton: {
  //     root: {
  //       border: 'none',
  //       borderBottom: '2px solid black',
  //       borderRadius: '0',
  //       backgroundColor: 'white',
  //       marginBottom: '2px',
  //       boxShadow: 'none',
  //       width: '100%',
  //     }
  //   }
  // }
  overrides:{
    Card: {
        root: {
            boxShadow:'none',
        }
    }
  }
})

export default theme;