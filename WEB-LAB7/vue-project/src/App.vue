<template>
  <div>
    <p>Country: {{ name }}</p>
    <p>Age: {{ age }}</p>
    <p>Population: {{ population }}</p>
    <p>Currency: {{ currency }}</p>
    <p>Capital: {{ capital }}</p>
    <p>Budget: ${{ budget }} billion</p>

    <template v-if="isClick">
      <p v-if="budget % 2">🔥🔥🔥</p>
      <p v-else>💪💪💪</p>
    </template>

    <button @click="budgetPlus()">
      Click me 🔥
    </button>

    <p>Largest cities in Ukraine:</p>
    <ul>
      <!--   Детальніше про списки   https://ua.vuejs.org/guide/essentials/list.html#v-for-->
      <li v-for="(city, index) in largestCities">{{ city }}</li>
    </ul>

    <v-select :options="largestCities"
              v-model="largestCity"
              @update:modelValue="changeLargestCity($event)"
    ></v-select>

    <input class="form-control"
           @input="changePhone()"
           v-model="phoneNumber"
           v-mask="'38(0##)###-##-##'"
           placeholder="38(0__)___-__-__"
    >
  </div>
</template>

<script>
import {defineComponent} from 'vue'

import vSelect from "vue-select";
import 'vue-select/dist/vue-select.css'
import {mask} from 'vue-the-mask'


export default defineComponent({
  props: {
    //Реквізити - https://ua.vuejs.org/guide/components/props.html#props-declaration
  },
  components: {
    //Локальна реєстрація компонентів
    // https://ua.vuejs.org/guide/components/registration.html#local-registration
    vSelect,
  },
  directives: {
    //Локальна реєстрація директив
    mask
  },
  data: () => ({
    //змінні компонету
    name: 'Ukraine',
    age: 31,
    population: 41167336,
    currency: 'Hryvnia',
    capital: 'Kyiv',
    largestCities: [
      'Kyiv',
      'Kharkiv',
      'Odesa',
      'Dnipro',
      'Donetsk',
      'Lviv',
    ],
    budget: 588,
    isClick: false,
    largestCity: '',
    phoneNumber: '',
  }),
  watch: {
    //Спостерігачі
    variableName: function (variableVale) {
      //більш детально https://ua.vuejs.org/guide/essentials/watchers.html#base-example
    }
  },
  methods: {
    //Викликається коли тиснемо на кнопку
    budgetPlus() {
      this.budget++;
      this.isClick = true;
    },
    //Викликається коли змінюємо вибір міста в v-select
    changeLargestCity(value) {
      alert('New select city ' + value);
    },
    //Викликається коли вводжимо номер телефона
    changePhone() {
      console.log(this.phoneNumber)
    },
  },
})
</script>