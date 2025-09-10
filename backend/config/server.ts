import range from 'koa-range';

export default ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  app: {
    keys: env.array('APP_KEYS'),
  },
  async bootstrap({ app }) {
    // 给 Koa 实例挂上 koa-range，支持视频分片请求
    app.use(range);
  },
});
