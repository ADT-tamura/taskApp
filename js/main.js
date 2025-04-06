const app = Vue.createApp({
    data: () => ({
      newItem:'',
      /* タスク格納する配列 */
      todos: []
    }),
    /* Addボタンを押したとき発生するイベント処理 */
    methods: {
      addItem: function(event){
        // console.log(`clicked!`)
        // 未入力の場合、配列にデータを追加しない
        if(this.newItem === '') return
        // インプット内容とデータバインディングされている [newItem] の値を配列に追加する
        let todo = {
          item: this.newItem,
          isDone: false
        }
        this.todos.push(todo)
        /* Addボタンを押したとき 入力欄に文字が残らないようにする */
        this.newItem = ''
      },
      deleteItem: function(index){
        console.log('Delete!')
        console.log(index)
        this.todos.splice(index, 1)

      }
    }
  })
  app.mount('#app')