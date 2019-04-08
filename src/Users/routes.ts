import express, { Request, Response } from "express";
const router = express.Router();

import loginOperation from "./Operations/login";
import registerOperation from "./Operations/register";
import { UserNotFound } from "../errors/errors";

router.post("/auth/login", (req: Request, res: Response) => {
    loginOperation(req.body)
        .then(user => {
            res.send({ user: user });
        })
        .catch(UserNotFound, function(e) {
            res.status(404).send({ message: "Not found" });
        })
        .catch(error => {});
});

router.post("/auth/register", (req: Request, res: Response) => {
    registerOperation(req.body)
        .then((user: any) => {
            res.send({ message: "User created successfully", data: user });
        })
        .catch(UserNotFound, function(e: any) {})
        .catch((e: { errors: any }) => {
            console.log(e.errors);
        });
});

export default router;
