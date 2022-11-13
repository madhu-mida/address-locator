import { Card, Typography, Box, Zoom, CardActions, IconButton, CardContent, Tooltip } from "@mui/material";
import MapIcon from '@mui/icons-material/Map';
import { quadrantColor } from "../util/constants";
import { useState } from "react";

export default function AddressResult({ addressResult }) {
    const openInNewTab = (addressData) => {
        let url = `https://www.google.com/maps/place/${addressData.street},${addressData.city},${addressData.state}+${addressData.zip}`;
        const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
        if (newWindow) newWindow.opener = null
    }
    return (
        <Zoom in={true}>
            <Card variant="outlined" style={{ marginTop: 15, backgroundColor: quadrantColor[addressResult?.quadrant.toLowerCase()] || '#BBBBBB', color: '#FFFFFF  ', borderRadius: '20px' }}>
                {addressResult && <><Box component="div"

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
                    <CardContent>
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
                    </CardContent>
                </Box>
                    <CardActions disableSpacing>
                        <Tooltip title="Go To Maps" arrow placement="right">
                            <IconButton aria-label="go to map" onClick={() => openInNewTab(addressResult.input)}>
                                <MapIcon />
                            </IconButton>
                        </Tooltip>
                    </CardActions>
                </>
                }
            </Card>
        </Zoom >
    );
}