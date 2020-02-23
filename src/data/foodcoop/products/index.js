const Airtable = require('airtable');

module.exports = function (api, opts) {
  const base = new Airtable({apiKey: opts.apiKey}).base(opts.base);

  api.loadSource(async actions => {
    const addCollection = actions.addCollection || actions.addContentType

    const collection = addCollection({
      camelCasedFieldNames: true,
      typeName: 'Product',
      templates: {
        'Product': '/product/:title'
      }
    })

    await base('Products')
      .select()
      .eachPage((records, fetchNextPage) => {
      records.forEach((record) => {
        const item = record._rawJson;

        collection.addNode({
          id: item.id,
          ...item.fields
        });
      });
      fetchNextPage();
    });
  });
};
