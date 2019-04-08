import Promise from "bluebird";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

import User from "../model";
import { UserNotFound } from "../../errors/errors";

export default (attributes: any) => {
    const { email, password } = attributes;
    return User.findOne({ where: { email: email } }).then((user: any) => {
        if (user === null) {
            return Promise.reject(new UserNotFound("User not Found"));
        }

        if (bcrypt.compare(password, attributes.password)) {
            const token = jwt.sign({ sub: user.id }, "some-secret", {
                expiresIn: "24h"
            });
            return Promise.resolve({ user, token });
        }
    });
};
