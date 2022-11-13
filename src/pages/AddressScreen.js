import AddressForm from "../components/AddressForm";
import { Grid, Box } from "@mui/material";
import AddressResult from "../components/AddressResult";
import { useState } from "react";
import { callGeoCodingApi } from "../util/api";

export default function AddressScreen() {
    const [addressResult, setAddressResult] = useState({
        quadrant: 'southeast'
    })
    const handleSubmit = async (inputData) => {
        console.log("Inside handleSubmit", inputData)
        if (inputData) {
            var apiResult = await callGeoCodingApi(inputData)
            console.log("API_RESULT :: ", apiResult);
        }
        var result = {
            quadrant: 'northeast'
        }
        setAddressResult(result);
    }
    return (
        <>
            <Box
                sx={{
                    minWidth: '300px'
                }}
                noValidate
                autoComplete="off"
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
                >
                    <AddressForm handleSubmit={handleSubmit} />
                    <AddressResult addressResult={addressResult} />
                </Grid>
            </Box>
        </>
    );
}