// middlware to authenticate users including the db session, passport initialization, and passport session
import { passport } from '/helpers/auth/';
import session from './session';

const auths = [session, passport.initialize(), passport.session()];

export default auths;