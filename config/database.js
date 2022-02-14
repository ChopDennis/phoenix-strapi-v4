module.exports = ({ env }) => ({
  connection: {
    client: 'mysql',
    connection: {
      host: env('DATABASE_HOST', 'phoenixgroup.asia'),
      port: env.int('DATABASE_PORT', 3306),
      database: env('DATABASE_NAME', 'strapi'),
      user: env('DATABASE_USERNAME', 'phoenix'),
      password: env('DATABASE_PASSWORD', '033586567'),
      ssl: env.bool('DATABASE_SSL', false),
    },
  },
});
