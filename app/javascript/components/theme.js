import React from 'react'
import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  pallette:{
    primary: 'black',
    secondary: 'navy',
  },
  overrides:{
    Card: {
      root: {
        boxShadow:'none',
        }
    },
    MuiTypography: {
      body1: {
        fontSize:'13px',
        fontFamily:'verdana',
      }
    },
    MuiSvgIcon:{
      root: {
        fontSize:'15px',
      }
    },
  }
})

export default theme;