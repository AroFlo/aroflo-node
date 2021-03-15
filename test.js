
const PUBLIC_PERSONAL_TOKEN = "SET_YOUR_PUBLIC_PERSONAL_TOKEN_HERE";
const SECRET_SIGNING_KEY = "SET_YOUR_SECRET_SIGNING_KEY_HERE";

const HOST = "api.aroflo.com";
const PORT = null;
const PROTOCOL = "https";

var AroFloApi = require('./index.js');
const aroflo = new AroFloApi({
    host: HOST
    , port: PORT
    , protocol: PROTOCOL
    , publicPersonalToken: PUBLIC_PERSONAL_TOKEN
    , secretSigningKey: SECRET_SIGNING_KEY
});

const main = async () => {
    try {
        const response = await aroflo.version.get();
        console.log(response);
    } catch (err) {
        console.error(err);
    }
};
main();