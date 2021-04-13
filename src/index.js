import { GraphQLServer } from "graphql-yoga";
import resolvers from "./graphql/resolvers";

const server = new GraphQLServer({
    typeDefs: `type day {
      grade: Int!
      class: Int!
      weekday: Int!
      weekdayString: String!
      classTime: Int!
      teacher: String
      subject: String
    } 
    
    type Query {
      week(weekday: Int!): [day]!
    }
  `,
    resolvers,
});

server.start(() => console.log("Graphql Server Running"));
