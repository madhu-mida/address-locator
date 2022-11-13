import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Card from '@mui/material/Card';
import { Button, MenuItem } from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton';
import { useState, useEffect } from 'react';
import { states } from '../util/constants';

export default function AddressForm({ handleSubmit }) {
    const [data, setData] = useState({
        address: "",
        city: "",
        state: states[0].label,
        zip: "",

    });
    const [formValid, setFormValid] = useState(false);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (data?.address && data?.city && data?.state && data?.zip) {
            var isValidZip = /(^\d{5}$)|(^\d{5}-\d{4}$)/.test(data?.zip);
            if (isValidZip) {
                setFormValid(true);
            } else {
                setFormValid(false);
            }
        } else {
            setFormValid(false);
        }
    }, [data])

    const handleChange = (event) => {
        setData({ ...data, [event.target.name]: event.target.value });
    };

    const clearInput = () => {
        setData({
            address: "",
            city: "",
            state: states[0].label,
            zip: "",

        });
    }

    return (
        <>

            <Card variant="outlined">
                <Box component="form"
                    noValidate
                    sx={{
                        minWidth: '320px'
                    }}
                    style={{ margin: 10 }}
                >
                    <div>
                        <TextField
                            required
                            fullWidth
                            id="outlined-required"
                            label="Address"
                            margin="dense"
                            name="address"
                            value={data.address}

                            InputLabelProps={{
                                shrink: true,
                            }}
                            onChange={handleChange}
                        />

                    </div>
                    <div className='form-field-2'>

                        <TextField
                            required
                            id="outlined-required"
                            label="City"
                            name="city"

                            margin="dense"
                            value={data.city}
                            InputLabelProps={{
                                shrink: true,
                            }}
                            onChange={handleChange}
                            style={{
                                flex: 2
                            }}
                        />

                        <TextField

                            select
                            label="State"
                            name="state"
                            margin="dense"
                            value={data.state}
                            onChange={handleChange}
                            style={{
                                flex: 2,
                                marginLeft: 5
                            }}

                        >
                            {states.map((option) => (
                                <MenuItem key={option.value} value={option.label}>
                                    {option.value}
                                </MenuItem>
                            ))}
                        </TextField>






                    </div>
                    <div className='form-field-2'>

                        <TextField
                            required
                            id="outlined-required"
                            label="Zip"
                            name="zip"
                            margin="dense"
                            value={data.zip}
                            InputLabelProps={{
                                shrink: true,
                            }}
                            onChange={handleChange}
                        />



                    </div>
                    <div>

                        <LoadingButton fullWidth
                            variant="contained"
                            size="large"
                            loading={loading}
                            style={{
                                marginTop: '8px'
                            }}
                            disabled={!formValid}
                            loadingPosition="end"
                            onClick={async () => {
                                setLoading(true);
                                let res = await handleSubmit(data);
                                if (res) {
                                    clearInput();
                                }
                                setLoading(false);
                            }}>Submit</LoadingButton>
                    </div>

                </Box>
            </Card>

        </>
    );
}