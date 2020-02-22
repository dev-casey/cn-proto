// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'cn-proto',
  plugins: [
    {
      use: '~/src/sources/products',
      options: {
        apiKey: 'keyrBK5AQ6XDpRwPw',
        base: 'appJZsfZmYaICRUig'
      }
    }
  ]
}
