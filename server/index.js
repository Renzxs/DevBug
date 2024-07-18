const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));

const app = express();
app.use(cors({
    credentials: true,
    origin: 'http://localhost:5173'
}));
app.use(bodyParser.json());
app.use(express.urlencoded({extended: true}));
dotenv.config();

app.listen(process.env.SERVER_PORT, () => {
    try {
        app.get("/", (req, res) => {
            try {
                const { apiKey } = req.query;
                
                if(apiKey === process.env.SECRET_API_KEY) {
                    return res.json({"message": "Server access successfully", "success": true});
                } else {
                    return res.json({"message": "No authorize access on this server", "success": true});
                }
                
            } catch(error) {
                return res.json({"message": "Internal Server error", "success": false});
            }
        }); 
    }
    catch(error){
        console.log("Server error! (Internal Server Error)");
    }
});   