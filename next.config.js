require('dotenv').config();

module.exports = {
  env: {},
  serverRuntimeConfig: {
    // Will only be available on the server side
    postUrl: `${process.env.SEVER_POST_URL}/v1/posts`
  },
  publicRuntimeConfig: {
    // Will be available on both server and client
    postUrl: `${process.env.PUBLIC_POST_URL}/v1/posts`
  }
};
