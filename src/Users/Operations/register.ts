import Promise from "bluebird";
import User from "../model";
import bcrypt from "bcryptjs";

export default (attributes: any) => {
    return User.create({
        name: attributes.name,
        email: attributes.email,
        password: bcrypt.hashSync(attributes.password, bcrypt.genSaltSync(10))
    }).then(user => {
        return Promise.resolve(user);
    });
};
