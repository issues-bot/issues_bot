import fs from 'fs';

const twitterCredentialFile = `${__dirname}/config/twitterCredentials.json`;
const credFileExists = fs.existsSync(twitterCredentialFile, 'utf8');

const twitterCredentials =
  credFileExists && process.env.NODE_ENV !== 'development' ?
  JSON.parse(fs.readFileSync(twitterCredentialFile)) :
  {
    consumer_key: process.env.TWITTER_CONSUMER_KEY,
    consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
    access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY,
    access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET,
  };

const config = {
  mongoURL: process.env.MONGO_URL || 'mongodb://localhost:27017/mern-starter',
  port: process.env.PORT || 8000,
  twitterCredentials,
};

export default config;
