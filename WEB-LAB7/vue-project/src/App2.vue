<template>
  <div class="wrapper">


    <form class="reg-form">

      <div class="form-element">
        <label for="login">Login</label>
        <input v-model="login" id="login">
        <p class="error-text" v-if="!loginValid">Check your login</p>
      </div>

      <div class="form-element">
        <label>Password</label>
        <input class="password"
               v-model="password"
               type="password">
        <p class="error-text" v-if="!passwordValid">Password too short</p>
      </div>

      <div class="form-element">
        <label>Number</label>
        <input class="number"
               v-model="phoneNumber"
               v-mask="'38(0##)###-##-##'"
               placeholder="38(0__)___-__-__">
        <p class="error-text" v-if="!numberValid">Check your number</p>
      </div>

      <div class="form-element">
        <label>Name</label>
        <input class="name"
               v-model="name">
        <p class="error-text" v-if="!nameValid">This field must be not empty</p>
      </div>

      <div class="form-element">
        <label>Date of birth</label>
        <input class="date-of-birth"
               type="date"
               v-model="dateOfBirth">
        <p class="error-text" v-if="!dateValid">Enter valid date</p>
      </div>

      <div class="form-element">
        <label>Group</label>
        <v-select :options="groups"
                  v-model="group"
        ></v-select>
        <p class="error-text" v-if="!groupValid">Choose a groop</p>
      </div>

      <div class="form-element">
        <label>Gender</label>
        <div class="genders">
          <p>Male <input type="radio" name="gender" value="Male" v-model="gender" checked></p>
          <p>Female <input type="radio" name="gender" value="Female" v-model="gender"></p>
        </div>
      </div>
    </form>

    <button class="btn" @click="tableAdd">
      Register
    </button>

    <template v-if="isClick">
      <table>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Gender</th>
          <th>Email</th>
          <th>Number</th>
          <th>Date of birth</th>
          <th>Group</th>
        </tr>
        <tr v-for="(element, index) in inputs">
          <td>
            <input type="checkbox" :value="index" v-model="checks">
          </td>
          <td>
            {{ element["name"] }}
          </td>
          <td>
            {{ element["gender"] }}
          </td>
          <td>
            {{ element["login"] }}
          </td>
          <td>
            {{ element["phoneNumber"] }}
          </td>
          <td>
            {{ element["dateOfBirth"] }}
          </td>
          <td>
            {{ element["group"] }}
          </td>

        </tr>
      </table>
      <div>
      <button class="btn" @click="tableRemove">Delete</button>

      <button class="btn" @click="tableDuplicate">Duplicate</button>
      </div>
    </template>

  </div>


</template>

<script>
import {defineComponent} from 'vue'
import vSelect from "vue-select";
import 'vue-select/dist/vue-select.css'
import {mask} from "vue-the-mask";


export default defineComponent(
    {
      components: {
        vSelect,
      },
      data: () => (
          {
            checks: [],
            inputs: [],
            groups: [
              "IA-11",
              "IA-12",
              "IA-13",
              "IA-14"
            ],
            isClick: false,
            login: "",
            phoneNumber: '',
            dateOfBirth: "",
            password: '',
            name: '',
            group: '',
            gender: 'Male',


            loginValid: false,
            numberValid: false,
            dateValid: false,
            passwordValid: false,
            nameValid: false,
            groupValid: false


          }
      ),
      directives: {
        mask
      },

      watch: {
        login() {
          this.loginValid = this.isLoginValid()
        },

        phoneNumber() {
          this.numberValid = this.isNumberValid()
        },

        dateOfBirth() {
          this.dateValid = this.isDateValid()
        },

        password() {
          this.passwordValid = this.isPasswordValid()
        },

        name() {
          this.nameValid = this.isNameValid()
        },

        group() {
          this.groupValid = this.isGroupValid()
        }

      },


      methods: {
        tableAdd() {
          if (!this.isNameValid() ||
              !this.isDateValid() ||
              !this.isGroupValid() ||
              !this.isLoginValid() ||
              !this.isNumberValid() ||
              !this.isPasswordValid()) {
            alert("Check your data and try again")
            return
          }

          this.isClick = true
          this.inputs.push({
            "login": this.login,
            "phoneNumber": this.phoneNumber,
            "dateOfBirth": this.dateOfBirth,
            "gender": this.gender,
            "name": this.name,
            "group": this.group
          })
          
        },

        tableRemove() {
          this.inputs = this.inputs.filter((_, index) => {
                return !this.checks.includes(index)
              }
          )
          this.checks = []
        },

        tableDuplicate() {
          let dupItems = this.inputs.filter((_, index) => {
            return this.checks.includes(index)
          })
          for (let item of dupItems) {
            this.inputs.push(item)
          }
        },

        // validation methods

        isLoginValid() {
          let emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}])|(([a-zA-Z\-\d]+\.)+[a-zA-Z]{2,}))$/
          return emailRegex.test(this.login)
        },

        isPasswordValid() {
          let passwordRegex = /^(.{6,})/
          return passwordRegex.test(this.password)
        },

        isNumberValid() {
          let numberRegex = /^(38)([(]0\d{2}[)])(\d{3})-(\d{2})-(\d{2})/
          return numberRegex.test(this.phoneNumber)
        },

        isNameValid() {
          let nameRegex = /^(\w)/
          return nameRegex.test(this.name)
        },

        isDateValid() {
          let today = new Date()
          let inputDate = new Date(this.dateOfBirth)
          return today > inputDate
        },

        isGroupValid() {
          return this.group !== null
        }
      }
    })


</script>

<style scoped>


</style>