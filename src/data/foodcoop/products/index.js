const Airtable = require('airtable');

module.exports = function (api, options) {
  const base = new Airtable({apiKey: options.apiKey}).base(options.base);

  api.loadSource(async actions => {
    const addCollection = actions.addCollection || actions.addContentType

    const collection = addCollection({
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

        collection.addNode({
          id: item.productID,
          ...item.fields
        });
      });
      fetchNextPage();
    });
  });
};
