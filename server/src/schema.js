
const {gql} = require('apollo-server');
const typeDefs = gql`
# write your types here

type Query {
    "Query to get tracks array for homepage grid"
    tracksForHome: [Track!]!    
}

"A track is group of modules that teaches about a specific topic"
type Track {
    id: ID!
    "The track's title"
    title: String!
    "The track's main author"
    author: Author!
    "The track's main illustration to display in track card or track page detail"
    thumbnail: String
    "The track's approximate length to complete, in minutes"
    length: Int
    "The number of modules this track contains"
    modulesCount: Int
}

type Author {
    id: ID!
    "Author's First name and Last name"
    name: String!
    "Author's profile picture and url"
    photo: String!
}
`
module.exports = typeDefs;