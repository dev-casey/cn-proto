const Airtable = require('airtable');

module.exports = function (api, options) {
  const base = new Airtable({apiKey: options.apiKey}).base(options.base);

  api.loadSource(async ({ addCollection, store }) => {

    const products = addCollection({
      camelCasedFieldNames: true,
      typeName: 'Product',
      templates: {
        Product: [{ path: options.path }]
      }
    })

    await base('Products')
      .select()
      .eachPage((records, fetchNextPage) => {
      records.forEach((record) => {
        const item = record._rawJson;

        products.addNode({
          id: item.id,
          ...item.fields
        });
      });
      fetchNextPage();
    });
  })
}
