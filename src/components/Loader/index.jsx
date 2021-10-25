import React from 'react';
import { CircularProgress, Grid } from "@mui/material";

const Loader = ({ tip, width, height }) => {
    return (
        <Grid
            container
            spacing={0}
            direction="column"
            alignItems="center"
            justify="center"
            style={{
                minHeight: height || 'calc(100% - 30px)',
                height: height || '100%',
                minWidth: width,
                width: '100%'
            }}
        >
            <CircularProgress />
            {tip}
        </Grid>
    );
};
export default Loader;
