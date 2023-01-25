
  const { createApp } = Vue

  createApp({
    data() {
      return {
        todos: [
            {
                text: 'a',
                done: false,
            },
            {
                text: 'b',
                done: true,
            },
            {
                text: 'c',
                done: false,
            },

        ]
      }
    },
    methods: {
        checkDone: function(todo){
            if (todo.done) {
                    return 'done'} 
            else {
                    return  ''}
        },
        removeTodo: function(index){
            this.todos.splice(index, 1)
        }
    }
}).mount('#app')