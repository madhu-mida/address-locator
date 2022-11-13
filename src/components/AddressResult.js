import { Card, Typography, Box, Zoom } from "@mui/material";
import { quadrantColor } from "../util/constants";
import { useState } from "react";

export default function AddressResult({ addressResult }) {
    return (
        <Zoom in={true}>
            <Card variant="outlined" style={{ marginTop: 15, backgroundColor: quadrantColor[addressResult?.quadrant.toLowerCase()] || '#BBBBBB', color: '#FFFFFF  ', borderRadius: '20px' }}>
                {addressResult && <Box component="div"

                    sx={{
                        minWidth: '320px',
                        minHeight: '250px'
                    }}
                    style={{ margin: 10 }}
                    display="flex"
                    flexDirection="column"
                >
                    <Typography variant="h2" component="div" style={{ margin: 10 }}>
                        {addressResult.quadrant}
                    </Typography>
                    <div style={{ marginTop: 10 }}>

                        <Typography variant="body1" style={{ margin: 10 }}>
                            {addressResult.input.street}

                        </Typography>
                        <Typography variant="body1" style={{ margin: 10 }}>

                            {`${addressResult.input.city}, ${addressResult.input.state}`}

                        </Typography>
                        <Typography variant="body1" style={{ margin: 10 }}>

                            {addressResult.input.zip}

                        </Typography>

                    </div>
                </Box>}
            </Card>
        </Zoom>
    );
}