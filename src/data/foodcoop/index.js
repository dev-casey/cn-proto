const Airtable = require('airtable');
// const { GraphQLSchema } = require('gridsome/graphql');
//
// function FoodCoopPlugin (api, options) {
//   const base = new Airtable({
//     apiKey: options.apiKey
//   }).base(options.base);
//
//   api.addSchema(({ addSchema, graphql }) => {
//     addSchema(new graphql.GraphQLSchema({
//       query: new graphql.GraphQLObjectType({
//         name: 'Posts'
//       })
//     }))
//   })
//
// }

// FoodCoopPlugin.defaultOptions = () => ({
//   apiKey: 'keyrBK5AQ6XDpRwPw',
//   base: 'appW55rTNEuyr5bpP'
// })
//
// module.exports = FoodCoopPlugin

module.exports = function (api, options) {
  const base = new Airtable({apiKey: options.apiKey}).base(options.base);

  api.loadSource(async ({ addCollection, store }) => {

    const categories = addCollection('Category')

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

    const category = categories.addNode([
      {
        id: 'a',
        title: 'a'
      },
      {
        id: 'b',
        title: 'b'
      },
      {
        id: 'c',
        title: 'c '
      }
    ]
  )

    await base('Groups')
    .select()
    .eachPage((records, fetchNextPage) => {
      records.forEach((record) => {
        const item = record._rawJson;

        groups.addNode({
          id: item.groupID,
          ...item.fields,
          category: store.createReference(category)
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
          id: item.ingredientID,
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
          id: item.productID,
          ...item.fields
        });
      });
      fetchNextPage();
    });

  });
};
