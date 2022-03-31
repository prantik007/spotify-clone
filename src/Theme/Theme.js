import { extendTheme } from "@chakra-ui/react"

const theme = extendTheme({
    fonts: {
        heading:'ubuntu,sans-serif',
        body:'ubuntu,sans-serif',
    },
    styles: {
        global:{
            "html,body":{
                height:"100%",
                width:'100%',
                
                backgroundColor:"#222326"
            },
        },
    },
})

export default theme;