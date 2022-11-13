import AddressForm from "../components/AddressForm";
import { Grid, Box, Alert, AlertTitle, IconButton, Snackbar } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import AddressResult from "../components/AddressResult";
import { useState } from "react";
import { callGeoCodingApi } from "../util/api";
import { centreCoordiantes } from "../util/constants";

export default function AddressScreen() {
    const [addressResult, setAddressResult] = useState(null)
    const [addressResultError, setAddressResultError] = useState(false)
    const handleSubmit = async (inputData) => {
        setAddressResult(null);
        if (inputData?.address && inputData?.state && inputData?.city && inputData?.zip) {
            var apiResult = await callGeoCodingApi(inputData)

            if (apiResult?.result?.addressMatches?.length > 0) {
                let addressInput = apiResult?.result?.input?.address;
                var result = {
                    input: addressInput,
                    coordinates: apiResult?.result?.addressMatches[0].coordinates
                }
                const { x, y } = result.coordinates;
                if (x > centreCoordiantes.x) {
                    if (y > centreCoordiantes.y) {
                        result.quadrant = 'NorthEast'
                    } else {
                        result.quadrant = 'SouthEast'
                    }
                } else {
                    if (y > centreCoordiantes.y) {
                        result.quadrant = 'NorthWest'
                    } else {
                        result.quadrant = 'SouthWest'
                    }
                }
                setAddressResult(result);
                setAddressResultError(false);
                return true;
            } else {
                setAddressResultError(true);
                return false;
            }
        }
    }
    return (
        <>
            {addressResultError &&
                <Snackbar
                    anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
                    open={addressResultError}
                    onClose={() => setAddressResultError(false)}
                    key='top-center'
                    autoHideDuration={3000}
                >
                    <Alert severity="error" onClose={() => setAddressResultError(false)}>
                        No results available for the address. Please check the details provided.
                    </Alert>
                </Snackbar>
            }
            <Box
                sx={{
                    minWidth: '300px'
                }}
                display="flex"
                minHeight="100vh"
                justifyContent="center"
                alignItems="center"
            >
                <Grid
                    container
                    columnSpacing={5}
                    direction="column"
                    justifyContent="center"
                    alignItems="center"
                    margin={"auto"}
                >
                    <AddressForm handleSubmit={handleSubmit} />
                    {addressResult && <AddressResult addressResult={addressResult} />}
                </Grid>
            </Box>
        </>
    );
}