const Airtable = require('airtable');

function hmmmPlugin (api, options) {
  const base = new Airtable({apiKey: options.apiKey}).base(options.base);

  api.loadSource(async ({ addCollection, store }) => {

    const groups = addCollection({
      camelCasedFieldNames: true,
      typeName: 'Group',
      templates: {
        Group: [{ path: options.path }]
      }
    })
    const ingredients = addCollection({
      camelCasedFieldNames: true,
      typeName: 'Ingredient',
      templates: {
        Ingredient: [{ path: options.path }]
      }
    })
    const products = addCollection({
      camelCasedFieldNames: true,
      typeName: 'Product',
      templates: {
        Product: [{ path: options.path }]
      }
    })

    await base('Groups')
    .select()
    .eachPage((records, fetchNextPage) => {
      records.forEach((record) => {
        const item = record._rawJson;

        groups.addNode({
          id: item.id,
          ...item.fields
        });
      });
      fetchNextPage();
    });

    await base('Ingredients')
      .select()
      .eachPage((records, fetchNextPage) => {
      records.forEach((record) => {
        const item = record._rawJson;

        ingredients.addNode({
          id: item.id,
          ...item.fields
        });
      });
      fetchNextPage();
    });

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

  });
};

DataPlugin.defaultOptions = () => {
  apiKey: 'keyrBK5AQ6XDpRwPw',
  base: 'appW55rTNEuyr5bpP'
}

module.exports = DataPlugin
