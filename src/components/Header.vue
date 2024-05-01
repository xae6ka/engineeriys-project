<template>
  <header class="header">
    <nav class="header__nav">
      <a href="#main" class="nav__link"> Главная </a>

      <a href="#shop" class="nav__link"> Магазин </a>

      <a href="#news" class="nav__link"> Новости </a>

      <a href="#download" class="nav__link"> Скачать Лаунчер </a>
    </nav>

    <RouterLink to="/profile" class="user">
      <span class="user__username">
        {{ username }}
      </span>

      <img src="../assets/user_avatar.png" alt="" class="user__avatar" />
    </RouterLink>
  </header>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Header',
  data() {
    return {
      username: 'Еще не вошел :(',
    };
  },
  mounted() {
    console.log(document.cookie);
    if (document.cookie) {
      const cookieArr = document.cookie.split(';');
      const userCookie = JSON.parse(cookieArr.reverse()[0]);

      if (typeof userCookie == 'object') {
        this.username = userCookie.login;
      }
    }
  },
};
</script>

<style scoped lang="scss">
@import '../styles/colors.scss';

.header {
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: $darkblue1;
  width: 100%;
  height: 90px;
}

.header__nav {
  min-width: 50%;
  max-width: 1000px;
  display: flex;
  justify-content: space-between;

  .nav__link {
    color: #fff;
    font-weight: 100;
    font-size: 20px;
    text-decoration: none;
    transition: 0.3s ease-in-out all;

    &:hover {
      color: $yellow;
    }
  }
}

.user {
  text-decoration: none;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .user__username {
    color: #fff;
    font-size: 20px;
    margin-right: 30px;
  }
}
</style>
