import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  antd: {},
  chainWebpack: (config) => {
    const oneOfsMap = config.module.rule('sass').oneOfs.values();
    oneOfsMap.forEach((item) => {
      item
        .use('sass-resources-loader')
        .loader('sass-resources-loader')
        .options({
          resources: [
            './src/assets/scss/variable.scss',
            './src/assets/scss/mixin.scss',
          ],
        })
        .end();
    });
  },
  routes: [
    {
      path: '/',
      component: '@/layouts/BasicLayout',
      routes: [
        {
          path: '/',
          component: '@/pages/home',
        },
        {
          path: '/category',
          component: '@/pages/category',
        },
        {
          path: '/cart',
          component: '@/pages/cart',
        },
        {
          path: '/my',
          component: '@/pages/my',
        },
        {
          path: '/learning',
          component: '@/pages/learning',
        },
        {
          path: '/use-state-page',
          component: '@/pages/learning/useStatePage',
        },
        {
          path: '/use-effect-page',
          component: '@/pages/learning/useEffectPage',
        },
        {
          path: '/use-ref-page',
          component: '@/pages/learning/useRefPage',
        },
        {
          path: '/react-slot',
          component: '@/pages/learning/reactSlotPage',
        },
        {
          path: '/use-memo-page',
          component: '@/pages/learning/useMemoPage',
        },
      ],
    },
  ],
  fastRefresh: {},
});