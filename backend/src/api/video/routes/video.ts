export default {
  routes: [
    {
      method: 'GET',
      path: '/video/:filename',
      handler: 'video.stream',
      config: {
        auth: false,
      },
    },
  ],
};