import express from "express";
import cors from "cors";
import "./models/index.js";
import router from "./route/Route.js";

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(router);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});