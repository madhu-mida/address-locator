import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Card from '@mui/material/Card';
import { Button, MenuItem } from '@mui/material';
import { useState } from 'react';
import { states } from '../util/constants';

export default function AddressForm({ handleSubmit }) {
    const [data, setData] = useState({
        address: "",
        city: "",
        state: states[0].label,
        zip: "",

    });

    const handleChange = (event) => {
        console.log(event.target.name, event.target.value)
        setData({ ...data, [event.target.name]: event.target.value });
    };
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

                            InputLabelProps={{
                                shrink: true,
                            }}
                            onChange={handleChange}
                        />



                    </div>
                    <div>

                        <Button fullWidth
                            variant="contained"
                            size="large"
                            style={{
                                marginTop: '8px'
                            }}
                            onClick={() => {
                                handleSubmit(data)
                            }}>Submit</Button>
                    </div>

                </Box>
            </Card>

        </>
    );
}