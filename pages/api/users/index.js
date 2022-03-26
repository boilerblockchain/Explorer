import { ValidateProps } from "/helpers/constants";
import { database, validateBody, insertUser } from "/helpers/api";
import nc from "next-connect";
import bcrypt from 'bcryptjs';
import isEmail from "validator/lib/isEmail";
//import normalizeEmail from "validator/lib/normalizeEmail";
import slug from "slug";

const handler = nc();

const COLLECTION_NAME = "main";

handler.use(database); // we don't need auths in this case because we don't do authentication

// POST /api/users
handler.post(
    validateBody({
        type: "object",
        properties: {
            username: ValidateProps.user.username,
            name: ValidateProps.user.name,
            password: ValidateProps.user.password,
            email: ValidateProps.user.email,
        },
    required: ["username", "name", "password", "email"],
    additionalProperties: false,
}),
async (req, res) => {
    let { username, name, email, originalPassword } = req.body;
    console.log('username', username);
    //const username = slug(req.body.username);
    //const email = normalizeEmail(req.body.email); // this is to handle things like jane.doe@gmail.com and janedoe@gmail.com being the same
    if (!isEmail(email)) {
        res.status(400).send("The email you entered is invalid.");
        return;
    }
    // check if email existed
    if ((await req.db.collection(COLLECTION_NAME).countDocuments({ email })) > 0) {
        res.status(403).send("The email has already been used.");
    }
    // check if username existed
    if ((await req.db.collection(COLLECTION_NAME).countDocuments({ username })) > 0) {
        res.status(403).send("The username has already been taken.");
    }

    // const hashedPassword = await bcrypt.hash(originalPassword, 10);
    // password = originalPassword;
    console.log('FUNN4')
    console.log('FUNN2')

    const user = await insertUser(req.db, {
        email: email,
        password: originalPassword,
        bio: '',
        name: name,
        username: username
    });

    console.log('FUNN')

    req.logIn(user, (err) => {
        if (err) throw err;
        // when we finally log in, return the (filtered) user object
        res.status(201).json({
            user,
        });
    });
}
);

export default handler;