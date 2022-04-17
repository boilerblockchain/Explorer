const axios = require("axios");

const fetchTokenBalances = async() => {
    const address = "0x1270e808BB7Ec4502662527E92e89CE8E1fEF4d0";
    const params = {
      addresses: [address],
      api_key: '96e0cc51-a62e-42ca-acee-910ea7d2a241'
    };
    const response = await axios.get('http://api.zapper.fi/v1/protocols/tokens/balances', { params });
    console.log(response.data);
};

const fetchSushiPools = async() => {
    const params = {
      api_key: '96e0cc51-a62e-42ca-acee-910ea7d2a241'
    };
    const response = await axios.get('http://api.zapper.fi/v1/pool-stats/sushiswap', { params });
    console.log(response.data);
};

const fetchCurveBalance = async() => {
    const address = "0x1270e808BB7Ec4502662527E92e89CE8E1fEF4d0";
    const params = {
      path: 'Curve',  
      addresses: [address],
      api_key: '96e0cc51-a62e-42ca-acee-910ea7d2a241'
    };
    const response = await axios.get('http://api.zapper.fi/v1/protocols/curve/balances', { params });
    console.log(response.data);
}




