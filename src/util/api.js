import axios from "axios";

export const callGeoCodingApi = async (data) => {
    if (data) {
        const apiURL = `https://ms95-address-locator.herokuapp.com/getDetailsForAddress`;
        let result = await axios.post(apiURL, data);
        if (result?.data) {
            return result.data;
        } else {
            return result.error;
        }
    }
}