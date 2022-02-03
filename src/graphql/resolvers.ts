import { getUsers } from '../uitils'

 export const resolvers =  {
        Query: {
          users: () => getUsers(),
        },
      };
