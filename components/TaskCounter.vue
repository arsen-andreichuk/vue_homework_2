<script>
function request(theUrl) {
  var xmlHttp = new XMLHttpRequest();
  xmlHttp.open("GET", theUrl, false);
  xmlHttp.send(null);
  return JSON.parse(xmlHttp.responseText);
}

function filterLogins(logins) {
  let result = [];

  logins.forEach((e) => {
    if (e.length > 5) {
      result.push(e);
    }
  });

  return result;
}

export default {
  name: "TaskCounter",
  data() {
    return {
      count: 0,
      user: {
        email: "",
        password: "",
      },
      loginHistory: [],
    };
  },
  methods: {
    randomInput() {
      let number = Math.floor(Math.random() * 10000);
      this.user.email = `${number}@gmail.com`;
      this.user.password = `${number}`;
    },
    handleInput(event) {
      this.loginHistory.push(event.target.value);
      this.user.email = event.target.value;
    },
  },
  computed: {
    userInfo() {
      return `${this.user.email} ${this.user.password} Joke: ${
        request("https://official-joke-api.appspot.com/random_joke")["setup"]
      }`;
    },
    filteredloginHistory() {
      return filterLogins(this.loginHistory);
    },
    validatedEmail() {
      if (this.user.email.endsWith("@gmail.com")) {
        return this.user.email;
      } else {
        return "[ENTER VALID EMAIL]";
      }
    },
    validatedPassword() {
      if (this.user.password.length > 1) {
        return this.user.password;
      } else {
        return "[ENTER VALID PASSWORD]";
      }
    },
    validUserInfo() {
      return `${this.validatedEmail} ${this.validatedPassword} Joke: ${
        request("https://official-joke-api.appspot.com/random_joke")["setup"]
      }`;
    },
  },
  watch: {
    user: {
      handler(newValue, oldValue) {
        if (this.user.email === "") {
          this.user.email = "INPUT VALID EMAIL";
        }
        alert(
          `User was changed Joke: ${
            request("https://official-joke-api.appspot.com/random_joke")[
              "setup"
            ]
          }`
        );
      },
      deep: true,
      immediate: true,
    },
    "user.email": {
      handler(newValue, oldValue) {
        alert(
          `User's email was changed Joke: ${
            request("https://official-joke-api.appspot.com/random_joke")[
              "setup"
            ]
          }`
        );
      },
      deep: true,
    },
    validUserInfo: {
      handler(newValue, oldValue) {
        alert(
          `Valid User info was changed Joke: ${
            request("https://official-joke-api.appspot.com/random_joke")[
              "setup"
            ]
          }`
        );
      },
    },
  },
};
</script>

<template>
  <h1>Create Tests Vue</h1>
  <h2>Count: {{ count }}</h2>
  <button class="btn btn-primary" @click="count++">+</button>
  <br />
  <div class="mt-5 mb-5">
    User: email: {{ user.email }}, password: {{ user.password }}
    <br />
    <button class="btn btn-primary" @click="randomInput">Random input</button>
    enter login:
    <input type="text" v-model="inputText" @input="handleInput" />
    <br />
    Valid logins (length > 5):
    <br />
    <li v-for="item in filteredloginHistory">
      {{ item }}
    </li>
    <br />
    Computed:
    <br />
    User info {{ userInfo }}
    <br />
    Validated user info:
    <br />
    {{ validUserInfo }}
    <br />
  </div>
</template>
