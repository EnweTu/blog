import { defineConfig } from 'vitepress'

export default defineConfig ({
    // 网站元数据
    // 网站的lang属性
    lang: 'zh-CN',
    // 显示在浏览器标签栏里的内容
    title: '屠伟伟的博客空间',
    // 显示在浏览器标签栏里的后缀，false表示不启用后缀
    titleTemplate: false,
    // 这将在页面HTML中呈现为<meta>标签
    description: '人生，不过是一场体验。',
    // 如果您计划将站点部署到https://foo.github.io/bar/，那么您应该将base设置为'/bar/'。它应该总是以斜杠开头和结尾。
    base: '/blog/',

    // 网站路由配置
    // 当设置为true，VitePress将从URL中删除尾随的.html，需要服务器支持
    cleanUrls: true,
    // 定义自定义目录<-> URL映射
    rewrites: {
        'source/:page': 'destination/:page'
    },

    // 网站build设置
    // The directory where your markdown pages are stored, relative to project root
    srcDir: './src',
    // srcExclude: ['', ''],
    outDir: './.vitepress/dist',
    cacheDir: './.vitepress/cache',
    // VitePress 不会因死链接而构建失败
    ignoreDeadLinks: true,

    // 网站主题配置
    // 根据系统自动决定是否使用dark模式
    appearance: true,
    // 获取每个页面的最后更新时间
    lastUpdated: true,
    // 使用VitePress的默认主题作为主题配置
    themeConfig: {

    },

    // 自定义配置
    // markdown 相关配置
    // markdown: {
    //     // 在代码块中启用行号
    //     lineNumbers: true,
    // },
})