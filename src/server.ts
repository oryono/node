import { Response, Request, Application } from "express";
import express from "express";
import morgan from "morgan";
import userRoutes from "./Users/routes";

const app: Application = express();

app.use(express.json());
app.use(morgan("dev"));
app.use(express.static("app/public"));
app.use(userRoutes);

app.get("/", (req: Request, res: Response) => {
    res.send(`API running in ${process.env.NODE_ENV || "development"}`);
});

export default app;
