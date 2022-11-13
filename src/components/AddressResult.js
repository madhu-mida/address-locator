import { Card, Typography, Box } from "@mui/material";
import { quadrantColor } from "../util/constants";

export default function AddressResult({ addressResult }) {
    return (
        <Card variant="outlined" style={{ marginTop: 15, backgroundColor: quadrantColor[addressResult.quadrant], color: 'white  ', borderRadius: '20px' }}>
            <Box component="div"

                sx={{
                    minWidth: '320px',
                    minHeight: '250px'
                }}
                style={{ margin: 10 }}
                display="flex"
                flexDirection="column"
            >
                <Typography variant="h2" component="div" style={{ margin: 10 }}>
                    NorthEast
                </Typography>
                <div style={{ marginTop: 10 }}>

                    <Typography variant="body1" style={{ margin: 10 }}>
                        555 Laurie Ln

                    </Typography>
                    <Typography variant="body1" style={{ margin: 10 }}>

                        Thousand Oaks, CA

                    </Typography>
                    <Typography variant="body1" style={{ margin: 10 }}>

                        91360

                    </Typography>

                </div>
            </Box>
        </Card>
    );
}