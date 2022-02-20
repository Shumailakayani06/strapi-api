module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '7e4f23a0667ec21452985599edbfef1d'),
  },
});
