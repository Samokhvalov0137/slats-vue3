<template>
  <div class="hr__container">
    <div class="hr__content">
      <h2 class="hr__title">Соискатель</h2>
      <div class="hr__input">
        <form class="form" name="form-edit">
          <fieldset class="form__set">
              <input
                class="form__input"
                type="text"
                placeholder="ФИО"
                v-model="todoName"
                required
              />
              <input
                class="form__input"
                type="tel"
                placeholder="Номер телефона"
                v-model="todoPhone"
                required
              />
              <input
                class="form__input"
                type="text"
                placeholder="Должность"
                v-model="todoPosition"
                required
              />
              <input
                class="form__input"
                type="text"
                placeholder="Дата собеседования"
                v-model="todoDate"
                required
              />
              <input
                class="form__input"
                type="text"
                placeholder="ФИО сотрудника"
                v-model="todoWorker"
                required
              />
              <input
                class="form__input"
                type="text"
                placeholder="Срок выполнения"
                v-model="todoDeadline"
                required
              />
            <button class="submit-btn" type="submit" @click="storeTodo">
              Отправить
            </button>
          </fieldset>
        </form>
      </div>
    </div>

    <div class="hr__item">
      <h2 class="hr__title">Список</h2>
      <div class="item" v-for="(todo, index) in computed_items" :key="index">
        <p class="itemText"> {{todo.name}} - {{todo.position}} </p>
            <p class="itemText">{{todo.phone}} - {{todo.date}}</p>
            <p class="itemText">{{todo.deadline}} - {{todo.worker}}</p>
            <p class="itemText" :class="{'jobDone': todo.toggleCheck == true}"></p>
            <button class="submit-btn" :class="{'not-active-submit-btn': todo.toggleCheck == true}" @click="doneTodo(index)">Работа сдана</button>
          <button class="submit-btn" @click="removeTodo(index)">Переместить в корзину</button>
        </div>
      </div>
      
      <div class="hr__trash">
      <h2 class="hr__title">Корзина</h2>
      <div class="sub-container">
          <div class="removedItem" v-for="(todo, index) in removedTodos" :key="index">
        <p class="itemText">{{todo.name}}</p>
         <p class="itemText">{{todo.position}}</p>   
            <button class="submit-btn" @click="deleteTodo(index)">Удалить</button>
          </div>
      </div>
       </div>


  </div>
</template>



<script>
export default {
  name: "TodoApp",
  data(){
    return {
      todoName: "",
      todoPhone: "",
      todoPosition: "",
      todoDate: "",
      todoWorker: "",
      todoDeadline: "",
      todos: [{
        name: "Vlad Samokhvalov",
        phone: "89526391756",
        position: "Web-developer",
        date: "16.09.2022",
        worker: "Daria",
        deadline: "15.09.2022"
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
      if (this.todoName != "" && this.todoPhone != "" && this.todoPosition != "" && this.todoDate != "" && this.todoWorker != "" && this.todoDeadline != "")
      {
        this.todos.push({name: this.todoName, 
        phone: this.todoPhone, 
        position: this.todoPosition, 
        date: this.todoDate, 
        worker: this.todoWorker, 
        deadline: this.todoDeadline, 
        toggleCheck: false});

        this.todoName = "";
        this.todoPhone = "";
        this.todoPosition = "";
        this.todoDate = "";
        this.todoWorker = "";
        this.todoDeadline = "";
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
.hr__container {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
}

.sub-container {
 min-width: 200px;
}
.hr__content {
  width: 100%;
  max-width: 300px;
  background: white;
  box-shadow: 0px 0px 25px rgba(0, 0, 0, 0.15);
  padding: 34px 28px;
  position: relative;
  box-sizing: border-box;
}
.hr__input {
  display: flex;
  flex-direction: column;
  margin-top: 25px;
}
.hr__title{
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

.item {
  padding: 0.5rem;
  margin-bottom: 1.5rem;
  border: 2px solid rgb(0, 0, 0);
  width: 500px;
}

.item:hover {
  box-shadow: 0 0 10px 3px #007e39;
  transition: 0.5s;
}

.removedItem {
  padding: 0.5rem;
  margin-bottom: 1.5rem;
  border: 2px solid rgb(0, 0, 0);
}

.itemText {
  color: rgb(0, 0, 0);
  width: 100%;
  font-size: 18px;
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
