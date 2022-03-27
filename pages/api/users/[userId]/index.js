import { findUserById } from '/helpers/api';
import { database } from '/helpers/api';
import { nc } from 'next-connect';

const handler = nc();

handler.use(database);

handler.get(async (req, res) => {
    const user = await findUserById(req.db, req.query.userId);
    res.json({ user });
});

export default handler;