module.exports = ({ env }) => ({
  email: {
    config: {
      provider: "sendgrid",
      providerOptions: {
        apiKey: env("SENDGRID_API_KEY"),
      },
      settings: {
        defaultFrom: "dennis.huang@phoenixgroup.asia",
        defaultReplyTo: "dennis.huang@phoenixgroup.asia",
        testAddress: "chop.chop.dennis@gmail.com",
      },
    },
  },
});
