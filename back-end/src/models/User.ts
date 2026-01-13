import mongoose from 'mongoose';

export interface UserI {
  email: string;
  password: string;
  googleId?: string;
  avatarUrl?: string;
}

const userSchema = new mongoose.Schema<UserI>({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  googleId: { type: String, unique: true },
  avatarUrl: { type: String },
});

export const User = mongoose.model<UserI>('User', userSchema);
