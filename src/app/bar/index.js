import { makeStyles, createStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => createStyles({
    account: {
        position: 'relative',
        width: '100%',
        display: 'flex',
        justifyContent: 'flex-end'
    }
}))

export default useStyles;