import { createMuiTheme } from "@material-ui/core";

const theme = createMuiTheme({
    overrides: {
        MuiAppBar: {
            colorDefault: {
                backgroundColor: '#f8f9f9'
            }
        }
    }
})

export default theme;