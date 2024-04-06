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

        <input placeholder="Логин" type="text" class="data__lr" />
        <input placeholder="Пароль" type="password" class="data__password" />

        <button class="data__btn">Войти!</button>
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
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Login",
  props: {},
};
</script>

<style scoped lang="scss">
@import "../styles/colors.scss";
@import "../styles/LoginReg.scss";
</style>
