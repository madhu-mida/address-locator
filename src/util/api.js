import axios from "axios";

export const callGeoCodingApi = async (data) => {
    if (data) {
        const apiURL = `https://geocoding.geo.census.gov/geocoder/locations/address?street=${data.address}&city=${data.city}&state=${data.state}&zip=${data.zip}&benchmark=2020&format=json`;
        let result = await axios.get(apiURL);
        if (result?.data) {
            return result.data;
        } else {
            return result.error;
        }
    }
}