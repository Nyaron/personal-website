var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue!',
    todos: [
      {text: 'Create design'},
      {text: 'Find pictures'},
      {text: 'Create awesome animations'}
    ]
  },
  methods: {
    reverseMessage: function() {
      this.message = this.message.split('').reverse().join('')
    }
  }
})