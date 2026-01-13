import passport from 'passport';
import { Strategy as GoogleStrategy } from 'passport-google-oauth20';
import { User } from '../models/User';

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID || '',
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || '',
      callbackURL: process.env.GOOGLE_CALLBACK_URL || '',
    },
    async (_, __, profile, cb) => {
      try {
        const user = await User.findOneAndUpdate({ googleId: profile.id });

        if (!user) {
          const newUser = await User.create({
            googleId: profile.id,
            email: profile.emails?.[0].value,
            avatarUrl: profile.photos?.[0].value,
          });
        }
      } catch {}
    }
  )
);
