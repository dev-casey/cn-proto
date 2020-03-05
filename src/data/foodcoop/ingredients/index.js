const Airtable = require('airtable');

module.exports = function (api, options) {
  const base = new Airtable({apiKey: options.apiKey}).base(options.base);

  api.loadSource(async actions => {
    const addCollection = actions.addCollection || actions.addContentType

    const collection = addCollection({
      camelCasedFieldNames: true,
      typeName: 'Ingredient',
      templates: {
        Ingredient: [{ path: options.path }]
      }
    })

    await base('Products')
      .select()
      .eachPage((records, fetchNextPage) => {
      records.forEach((record) => {
        const item = record._rawJson;

        collection.addNode({
          id: item.ingredientID,
          ...item.fields
        });
      });
      fetchNextPage();
    });
  });

};

// --------------------------------------- Extra code
const posts = addCollection('Post')
const tags = addCollection('Tag')

const tag = tags.addNode(
  { id: '1', title: 'Tag 1' },
  { id: '2', title: 'Tag 2' })

const post = posts.addNode({
  id: '1',
  title: 'Post 2',
  tag: store.createReference(tag)
})

const categories = addCollection('Category')

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
