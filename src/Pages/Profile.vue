<template>
  <section class="profile" onclick="this.hello">
    <div class="profile__info">
      <h1 class="info__name">{{ this.name }}</h1>

      <span class="info__id">id: {{ id }}</span>

      <span class="info__status">Статус: {{ status }}</span>

      <span class="info__mail">Почта: {{ mail }}</span>

      <RouterLink to="/" class="info__download">Скачать лаунчер!</RouterLink>
    </div>

    <div class="profile__skin">
      <div class="skin__image"></div>

      <span class="skin__change">Поменять скин</span>
    </div>
  </section>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Profile',
  data() {
    return {
      name: 'name',
      id: 1,
      status: 'Не в бане',
      mail: 'vasyapypkin228@mail.ru',
    };
  },
  mounted() {
    if (document.cookie) {
      let cookieArr = document.cookie.split(';');

      const userCookie = JSON.parse(cookieArr.reverse()[0]);

      if (typeof userCookie == 'object') {
        this.name = userCookie.login;
        this.id = userCookie.id;
        this.mail = userCookie.email;
      }
    }
  },
  methods: {
    hello() {
      console.log('feee');
    },
  },
};
</script>

<style scoped lang="scss">
@import '../styles/colors.scss';

.profile {
  margin-top: 100px;
  align-items: center;
  display: flex;
  justify-content: space-around;
  min-height: 400px;

  .profile__info {
    max-height: 400px;
    color: #fff;
    display: flex;
    justify-content: space-between;
    flex-direction: column;

    .info__name {
      font-size: 80px;
      font-weight: 700;
    }

    span {
      font-weight: 200;
      font-size: 30px;
    }

    .info__download {
      margin-top: 100px;
      display: flex;
      justify-content: center;
      align-items: center;
      color: $gray;
      text-decoration: none;
      font-weight: 700;
      font-size: 20px;
      width: 300px;
      height: 50px;
      background-color: $yellow;
      border-radius: 50px;
    }
  }

  .profile__skin {
    height: 750px;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    align-items: center;

    .skin__image {
      background-color: #fff;
      border-radius: 20px;
      width: 400px;
      height: 700px;
    }

    .skin__change {
      color: #fff;
      font-size: 20px;
    }
  }
}
</style>
