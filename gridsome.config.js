module.exports = {
  siteName: 'Gridsome & NetlifyCMS',
  plugins: [
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'articles/**/*.md',
        typeName: 'Articles',
        remark: {}
      }
    }
  ],
  transformers: {
    remark: {}
  }
}
