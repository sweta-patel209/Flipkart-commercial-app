import React, {createContext}from 'react'
import {cssBaseline } from '@material-ui/core'
import {createMuiTheme, ThemeProvider} from '@material-ui/core/styles'

const TemplateContext = createContext(null)

//this function is for overrider CSS globally

export const TemplateProvider = (props) => {
    const theme = createMuiTheme({
        overrides:{
            MuiDialog:{
                paperWidthSm:{
                    maxWidth:'unset'
                }
            },
            MuiDialogContent:{
                
                root:{
                    padding:0,
                   '&:first-child':{
                       paddingTop:0,
                       paddingBottom:0
                   }
                }
            }

        }
     
    })
    return (
       <TemplateContext.Provider>
           <ThemeProvider theme={theme}>
               <cssBaseline />
                {props.children}
           </ThemeProvider>

       </TemplateContext.Provider>
    )
}


