const fetch = require('node-fetch')
const util = require('util')
const parseXML = util.promisify(require('xml2js').parseString)

const {
    GraphQLSchema,
    GraphQLObjectType,
    GraphQLInt
} = require('graphql')

const AuthorType = require('./authortype')

module.exports = new GraphQLSchema({
    query: new GraphQLObjectType({
        name: 'Query',
        description: '...',

        fields: () => ({
            author: {
                type: AuthorType,
                args: {
                    id: { 
                        type: GraphQLInt
                    }
                },
                resolve: (root, args) => fetch(
                    `https://www.goodreads.com/author/show.xml?id=${args.id}&key=HIpepXDrkyUtdGeORlo70w`
                )
                .then(response => response.text())
                .then(parseXML)
            }
        })
    })
})