import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    "userId": 1,
    "id": 1,
    "item": "delectus aut autem",
    "completed": false
  },
  {
    "userId": 1,
    "id": 2,
    "item": "quis ut nam facilis et officia qui",
    "completed": false
  },
  {
    "userId": 1,
    "id": 3,
    "item": "fugiat veniam minus",
    "completed": false
  },
  {
    "userId": 1,
    "id": 4,
    "item": "et porro tempora",
    "completed": true
  },
  {
    "userId": 1,
    "id": 5,
    "item": "laboriosam mollitia et enim quasi adipisci quia provident illum",
    "completed": false
  },
  {
    "userId": 1,
    "id": 6,
    "item": "qui ullam ratione quibusdam voluptatem quia omnis",
    "completed": false
  },
  {
    "userId": 1,
    "id": 7,
    "item": "illo expedita consequatur quia in",
    "completed": false
  },
  {
    "userId": 1,
    "id": 8,
    "item": "quo adipisci enim quam ut ab",
    "completed": true
  },
  {
    "userId": 1,
    "id": 9,
    "item": "molestiae perspiciatis ipsa",
    "completed": false
  },
  {
    "userId": 1,
    "id": 10,
    "item": "illo est ratione doloremque quia maiores aut",
    "completed": true
  },
  {
    "userId": 1,
    "id": 11,
    "item": "vero rerum temporibus dolor",
    "completed": true
  },
  {
    "userId": 1,
    "id": 12,
    "item": "ipsa repellendus fugit nisi",
    "completed": true
  },
  {
    "userId": 1,
    "id": 13,
    "item": "et doloremque nulla",
    "completed": false
  },
  {
    "userId": 1,
    "id": 14,
    "item": "repellendus sunt dolores architecto voluptatum",
    "completed": true
  },
  {
    "userId": 1,
    "id": 15,
    "item": "ab voluptatum amet voluptas",
    "completed": true
  },
  {
    "userId": 1,
    "id": 16,
    "item": "accusamus eos facilis sint et aut voluptatem",
    "completed": true
  },
  {
    "userId": 1,
    "id": 17,
    "item": "quo laboriosam deleniti aut qui",
    "completed": true
  },
  {
    "userId": 1,
    "id": 18,
    "item": "dolorum est consequatur ea mollitia in culpa",
    "completed": false
  },
  {
    "userId": 1,
    "id": 19,
    "item": "molestiae ipsa aut voluptatibus pariatur dolor nihil",
    "completed": true
  },
  {
    "userId": 1,
    "id": 20,
    "item": "ullam nobis libero sapiente ad optio sint",
    "completed": true
  },
  {
    "userId": 2,
    "id": 21,
    "item": "suscipit repellat esse quibusdam voluptatem incidunt",
    "completed": false
  },
  {
    "userId": 2,
    "id": 22,
    "item": "distinctio vitae autem nihil ut molestias quo",
    "completed": true
  },
  {
    "userId": 2,
    "id": 23,
    "item": "et itaque necessitatibus maxime molestiae qui quas velit",
    "completed": false
  },
  {
    "userId": 2,
    "id": 24,
    "item": "adipisci non ad dicta qui amet quaerat doloribus ea",
    "completed": false
  },
  {
    "userId": 2,
    "id": 25,
    "item": "voluptas quo tenetur perspiciatis explicabo natus",
    "completed": true
  },
  {
    "userId": 2,
    "id": 26,
    "item": "aliquam aut quasi",
    "completed": true
  },
  {
    "userId": 2,
    "id": 27,
    "item": "veritatis pariatur delectus",
    "completed": true
  },
  {
    "userId": 2,
    "id": 28,
    "item": "nesciunt totam sit blanditiis sit",
    "completed": false
  },
  {
    "userId": 2,
    "id": 29,
    "item": "laborum aut in quam",
    "completed": false
  },
  {
    "userId": 2,
    "id": 30,
    "item": "nemo perspiciatis repellat ut dolor libero commodi blanditiis omnis",
    "completed": true
  },
  {
    "userId": 2,
    "id": 31,
    "item": "repudiandae totam in est sint facere fuga",
    "completed": false
  },
  {
    "userId": 2,
    "id": 32,
    "item": "earum doloribus ea doloremque quis",
    "completed": false
  },
  {
    "userId": 2,
    "id": 33,
    "item": "sint sit aut vero",
    "completed": false
  },
  {
    "userId": 2,
    "id": 34,
    "item": "porro aut necessitatibus eaque distinctio",
    "completed": false
  },
  {
    "userId": 2,
    "id": 35,
    "item": "repellendus veritatis molestias dicta incidunt",
    "completed": true
  },
  {
    "userId": 2,
    "id": 36,
    "item": "excepturi deleniti adipisci voluptatem et neque optio illum ad",
    "completed": true
  },
  {
    "userId": 2,
    "id": 37,
    "item": "sunt cum tempora",
    "completed": false
  },
  {
    "userId": 2,
    "id": 38,
    "item": "totam quia non",
    "completed": false
  },
  {
    "userId": 2,
    "id": 39,
    "item": "doloremque quibusdam asperiores libero corrupti illum qui omnis",
    "completed": false
  },
  {
    "userId": 2,
    "id": 40,
    "item": "totam atque quo nesciunt",
    "completed": true
  },
  {
    "userId": 3,
    "id": 41,
    "item": "aliquid amet impedit consequatur aspernatur placeat eaque fugiat suscipit",
    "completed": false
  },
  {
    "userId": 3,
    "id": 42,
    "item": "rerum perferendis error quia ut eveniet",
    "completed": false
  },
  {
    "userId": 3,
    "id": 43,
    "item": "tempore ut sint quis recusandae",
    "completed": true
  },
  {
    "userId": 3,
    "id": 44,
    "item": "cum debitis quis accusamus doloremque ipsa natus sapiente omnis",
    "completed": true
  },
  {
    "userId": 3,
    "id": 45,
    "item": "velit soluta adipisci molestias reiciendis harum",
    "completed": false
  },
  {
    "userId": 3,
    "id": 46,
    "item": "vel voluptatem repellat nihil placeat corporis",
    "completed": false
  },
  {
    "userId": 3,
    "id": 47,
    "item": "nam qui rerum fugiat accusamus",
    "completed": false
  },
  {
    "userId": 3,
    "id": 48,
    "item": "sit reprehenderit omnis quia",
    "completed": false
  },
  {
    "userId": 3,
    "id": 49,
    "item": "ut necessitatibus aut maiores debitis officia blanditiis velit et",
    "completed": false
  },
  {
    "userId": 3,
    "id": 50,
    "item": "cupiditate necessitatibus ullam aut quis dolor voluptate",
    "completed": true
  },
  
];

const addTodoReducer = createSlice({
  name: "todos",
  initialState,
  reducers: {
    //here we will write our reducer
    //Adding todos
    addTodos: (state, action) => {
      state.push(action.payload);
      return state;
    },
    //remove todos
    removeTodos: (state, action) => {
      return state.filter((item) => item.id !== action.payload);
    },
    //update todos
    updateTodos: (state, action) => {
      return state.map((todo) => {
        if (todo.id === action.payload.id) {
          return {
            ...todo,
            item: action.payload.item,
          };
        }
        return todo;
      });
    },
    //completed
    completeTodos: (state, action) => {
      return state.map((todo) => {
        if (todo.id === action.payload) {
          return {
            ...todo,
            completed: true,
          };
        }
        return todo;
      });
    },
  },
});

export const {
  addTodos,
  removeTodos,
  updateTodos,
  completeTodos,
} = addTodoReducer.actions;
export const reducer = addTodoReducer.reducer;
