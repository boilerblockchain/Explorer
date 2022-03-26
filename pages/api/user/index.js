// endpoint to fetch the current user

import nc from "next-connect";
import { database, auths } from "/helpers/api";
import { ncOpts } from "/helpers/nc";

const handler = nc(ncOpts);
handler.use(database, ...auths);
handler.get(async (req, res) => res.json({ user: req.user })); // returns the current user (handled by auths middleware)
// remove the password field from req.user using the projection filtering from mongodn

export default handler;