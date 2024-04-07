<template>
  <footer class="footer">
    <nav class="footer__nav">
      <h1 class="nav__title">Ссылки</h1>

      <a href="" class="nav__link">Discord сервер</a>

      <a href="" class="nav__link">Telegram канал</a>

      <a href="" class="nav__link">Instargam</a>

      <a href="" class="nav__link">Youtube</a>
    </nav>

    <nav class="footer__nav">
      <h1 class="nav__title">Контакты разработчика</h1>

      <a href="" class="nav__link">Telegram канал</a>

      <a href="" class="nav__link">Youtube</a>
    </nav>

    <nav class="footer__nav">
      <h1 class="nav__title">Навигация</h1>

      <a href="#main" class="nav__link">Главная</a>

      <a href="#shop" class="nav__link">Магазин</a>

      <a href="#news" class="nav__link">Новости</a>

      <a href="#download" class="nav__link">Скачать!</a>
    </nav>
  </footer>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Footer",
  props: {},
};
</script>

<style scoped lang="scss">
@import "../styles/colors.scss";

.footer {
  padding: 50px 0 50px 0;
  margin-top: 30px;
  color: #fff;
  font-weight: 100;
  display: flex;
  justify-content: space-around;
  width: 100%;
  background-color: $darkblue1;

  .footer__nav {
    display: flex;
    flex-direction: column;

    .nav__title {
      font-weight: 700;
      font-style: 24px;
      margin-bottom: 20px;
    }

    .nav__link {
      text-decoration: none;

      &:not(:last-child) {
        margin-bottom: 10px;
      }
    }

    * {
      color: #fff;
    }
  }
}
</style>
