import { passport } from "/helpers/api/auth";
import nc from "next-connect";
import { auths, database } from "/helpers/api/";

const handler = nc();

handler.use(database, ...auths);

handler.post(passport.authenticate("local"), (req, res) => {
    res.json({ user: req.user });
});

handler.delete(async (req, res) => {
    await req.session.destroy();
    // or use req.logOut();
    res.status(204).end();
});

export default handler;