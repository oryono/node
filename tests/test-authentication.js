const expect = require("chai-as-promised").expect;
const User = require("../dist/Users/model");
const bcrypt = require("bcryptjs");
const LoginOperation = require("../dist/Users/Operations/login");

describe("POST /api/auth/login", function() {
    console.log("User", User.default);
    before(function() {
        User.destroy({
            where: {},
            truncate: true
        });

        return User.bulkCreate([
            {
                name: "Patrick Oryono",
                email: "patricken08@gmail.com",
                password: bcrypt.hashSync("password", bcrypt.genSaltSync(10))
            },

            {
                name: "Patrick Oryono",
                email: "patricken08@live.com",
                password: bcrypt.hashSync("password", bcrypt.genSaltSync(10))
            }
        ]);
    });

    it("logins a user", () => {
        LoginOperation({
            username: "patricken08@gmail.com",
            password: "password"
        }).should.eventually.have.property("token");
    });
});
