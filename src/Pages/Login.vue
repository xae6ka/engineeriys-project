<template>
  <section class="main-lr">
    <div class="lr">
      <nav class="lr__nav">
        <router-link class="nav__link active" to="/login">Вход</router-link>
        <router-link class="nav__link" to="/reg">Регистрация</router-link>
      </nav>

      <form class="lr__data">
        <h1 class="data__title">О, это снова ты?</h1>
        <p class="data__subtitle">Залетай!</p>

        <input
          placeholder="Логин"
          v-model="login"
          type="text"
          class="data__lr"
        />
        <input
          placeholder="Пароль"
          v-model="password"
          type="password"
          class="data__password"
        />

        <button class="data__btn" @click="loginUser">Войти!</button>
        <a href="" class="data__zpassword">Тыкни, если забыл пароль</a>
      </form>

      <footer class="lr__footer">
        <a href="/" class="footer__info">Канал создателя</a>

        <span class="footer__info">2023-2024</span>

        <a href="/" class="footer__info">Канал Разработчика</a>
      </footer>
    </div>

    <div class="image"></div>
  </section>
</template>

<script>
const sha256 = require('js-sha256').sha256;
import { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';
import { getUser } from '../requests';

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Login',
  props: {},
  methods: {
    async loginUser(e) {
      e.preventDefault();

      if (this.login == '' || this.password == '') {
        toast('Вы ввели не все поля!', {
          autoClose: 3000,
        });

        return false;
      }

      const user = await getUser(this.login);

      console.log();

      if (user[0].password == sha256(this.password)) {
        toast('Вы успешно вошли!', {
          autoClose: 3000,
        });

        const userCookie = {
          id: user[0].id,
          login: this.login,
          password: user[0].password,
          email: user[0].email,
        }

        document.cookie = JSON.stringify(userCookie);
      } else {
        toast('Вы ввели неправильный пароль!', {
          autoClose: 3000,
        });
      }

      return true;
    },
  },
};
</script>

<style scoped lang="scss">
@import '../styles/colors.scss';
@import '../styles/LoginReg.scss';
</style>
