import dotenv from 'dotenv';

// Load .env into process.env once. Other modules should import this file
// and use the exported `env` object instead of accessing process.env directly.
dotenv.config();

type Env = {
	NODE_ENV: string;
	PORT: number;
	MONGO_URI?: string;
	JWT_SECRET?: string;
	[key: string]: any;
};

const env: Env = {
	NODE_ENV: process.env.NODE_ENV ?? 'development',
	PORT: Number(process.env.PORT ?? 3000),
	MONGO_URI: process.env.MONGO_URI ,
	JWT_SECRET: process.env.JWT_SECRET,
};

export function requireEnv(key: keyof Env): string | number {
	const value = env[key];
	if (value === undefined || value === null || value === '') {
		throw new Error(`Missing required env variable: ${String(key)}`);
	}
	return value;
}

export default env;

