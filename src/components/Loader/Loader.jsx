import {Box, CircularProgress, Typography} from "@mui/material";
import styles from './Loader.module.css';

export const Loader = ({status}) => {
    return (
        <Box className={styles.loader}>
            {
                status === 'loading'
                ?<CircularProgress />
                :<Typography variant="h5" gutterBottom sx={{color: "red"}} component="div">
                        попробуйте в другой раз
                </Typography>
            }
        </Box>
    );
};