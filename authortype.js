const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLList
} = require('graphql')

const BookType = require('./booktype')

module.exports = new GraphQLObjectType({
    name: 'Author',
    description: '...',

    fields: () => ({
        name: {
            type: GraphQLString,
            resolve: xml => 
                xml.GoodreadsResponse.author[0].name[0]
        },
        books: {
            type: new GraphQLList(BookType),
            resolve: xml => 
                xml.GoodreadsResponse.author[0].books[0].book
        }
    })
})
