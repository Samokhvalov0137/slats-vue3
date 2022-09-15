<template>
  <div class="direct__container">
    <div class="direct__content">
      <h2 class="direct__title">Соискатель</h2>
      <div class="direct__input">
        <form class="form" name="form-edit">
          <fieldset class="form__set">
              
              <input
                class="form__input"
                type="datetime-local"
                placeholder="Дата собеседования"
                v-model="todoDateTime"
                required
              />
              <input
                class="form__input"
                type="text"
                placeholder="Имя сотрудника"
                v-model="todoName"
                required
              />

            <button class="submit-btn" type="submit" @click="storeTodo">
              Отправить
            </button>
          </fieldset>
        </form>
      </div>
      
    </div>

    <div class="direct__content">
      <h2 class="direct__title">Список</h2>
      <div class="direct__item" v-for="(todo, index) in computed_items" :key="index">
        <p class="direct__itemText"> {{todo.name}} </p>
            <p class="direct__itemText">{{todo.datetime}}</p>
            <p class="direct__itemText" :class="{'jobDone': todo.toggleCheck == true}"></p>
            <button class="submit-btn" :class="{'not-active-submit-btn': todo.toggleCheck == true}" @click="doneTodo(index)">Работа проверена</button>
          <button class="submit-btn" @click="removeTodo(index)">Переместить в корзину</button>
        </div>
      </div>

  </div>
</template>



<script>
export default {
  name: "TodoApp",
  data(){
    return {
      todoDateTime: "",
      todos: [{
        name:"Vlad",
        datetime:"15.09.2022"
      },
      {
        name:'Boris',
        datetime:"14.09.2022"
      }],
      removedTodos: [],
    }
},
computed: {
      computed_items: function () {
          return this.todos;
      },
    },
  methods: 
  {
    storeTodo() 
    {
      if (this.todoName != "" && this.todoDateTime != "" )
      {
        this.todos.push({name: this.todoName, 
        datetime: this.todoDateTime,
        toggleCheck: false});

        this.todoName = "";
        this.todoDateTime = "";
      }
    },
    removeTodo(index) 
    {
      this.removedTodos.push(...this.todos.splice(index, 1));
    },
    deleteTodo(index) 
    {
      this.removedTodos.splice(index,1)
    },
    doneTodo(index)
    {
        this.todos[index].toggleCheck=true;
    },

  },
};
</script>





<style>
.direct__container {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
}

.direct__content {
  width: 100%;
  max-width: 420px;
  background: white;
  box-shadow: 0px 0px 25px rgba(0, 0, 0, 0.15);
  position: relative;
  padding: 34px 28px;
  box-sizing: border-box;
}
.direct__input {
  display: flex;
  flex-direction: column;
  margin-top: 25px;
}
.direct__title{
  font-size: 25px;
  text-align: center;
}
.form {
  box-sizing: border-box;
}

.form__set {
  border-style: none;
  padding: 0;
  margin: 0;
}

.form__field {
  position: relative;
  display: flex;
  flex-direction: column;
  margin: 0;
}

.form__input {
  border-radius: 0;
  border: none;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  width: 100%;
  box-sizing: border-box;
  margin-bottom: 30px;
  font-family: "Inter", ‘Arial’, sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  color: #000000;
  padding-bottom: 13px;
}

.submit-btn {
  margin-top: 15px;
  border: 1px solid #2a2f36;
  font-size: 12px;
  border: 2px solid #2a2f36;
  background-color: #333333;
  color: #fff;
  font-weight: 700;
  text-transform: uppercase;
  padding: 5px 10px;
  font-size: 12px;
  width: 100%;
}
.not-active-submit-btn{
  background-color: #b6b6b6;
  pointer-events: none;
  user-select: none;
}
.submit-btn:hover {
  background-color: #535151;
  border-color: #535151;
}

.direct__item {
  padding: 0.5rem;
  margin-bottom: 1.5rem;
  border: 2px solid rgb(0, 0, 0);
}

.direct__item:hover {
  box-shadow: 0 0 10px 3px #007e39;
  transition: 0.5s;
}

.removedItem {
  padding: 0.5rem;
  margin-bottom: 1.5rem;
  border: 2px solid rgb(0, 0, 0);
}

.direct__itemText {
  background: none;
  outline: none;
  color: rgb(0, 0, 0);
  border: none;
  font-size: 15px;
  text-align: center;
}

.jobDone{
  background-image: url(../images/accept.png);
  width: 50px;
  height: 50px;
  background-repeat: no-repeat;
  background-size: contain;
  margin: 0 auto;
}

</style>
