<template>
  <section class="main-lr">
    <div class="lr">
      <nav class="lr__nav">
        <router-link class="nav__link" to="/login">Вход</router-link>
        <router-link class="nav__link active" to="/reg"
          >Регистрация</router-link
        >
      </nav>

      <form class="lr__data">
        <h1 class="data__title">О, новенький?</h1>
        <p class="data__subtitle">Регайся!</p>

        <input
          placeholder="Почта"
          v-model="email"
          type="text"
          class="data__lr"
        />
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

        <button class="data__btn" @click="regUser">Зарегистрироваться!</button>
        <router-link class="data__zpassword" to="/login">
          Есть аккаунт
        </router-link>
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
import { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';
import { addUser } from '../requests';

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Reg',
  props: {},
  methods: {
    async regUser(e) {
      e.preventDefault();

      if (this.login == '' || this.password == '' || this.email == '') {
        toast('Нужно ввести всё!', {
          autoClose: 3000,
        });

        return false;
      }

      const resCode = await addUser(this.login, this.password, this.email);

      if (resCode == 'Error01') {
        toast('Логин уже занят', {
          autoClose: 3000,
        });
      } else if (resCode == 'ok') {
        toast('Молодчик, зарегался, теперь войди', {
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
