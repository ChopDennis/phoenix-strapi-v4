module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '6444718c996feebfa924519d0964d2a5'),
  },
});
