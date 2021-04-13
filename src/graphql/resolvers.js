import { getTimetable } from "./db";

const resolvers = {
    Query: {
        week: (_, { weekday }) => getTimetable(weekday),
    },
};

export default resolvers;
