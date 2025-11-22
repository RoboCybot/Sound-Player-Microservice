import express from "express";
import router from "./Router/soundsRouter.js";
import cors from "cors";

const app = express();

app.use(cors({
    origin: ["http://localhost:2000","http://localhost:2500", "http://localhost:1337"],
    credentials: true,
    methods: ["GET"],
    allowedHeaders: ["Content-Type", "Authorization"]
}));

app.use(express.json());

app.use("/sounds", router);

const PORT = 2000;

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
});