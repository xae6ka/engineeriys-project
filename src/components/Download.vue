<template>
  <section class="download" id="download">
    <div class="download__info">
      <img src="../images/download-2.png" alt="" class="info__img" />

      <h1 class="info__title">Контакты владельца</h1>

      <p class="info__subtitle">
        Дискорд/tg каналы владельца и проекта в один клик.
        <a href="" class="subtitle__link">Кликай!</a>
      </p>
    </div>

    <div class="download__hr"></div>

    <div class="download__info">
      <img src="../images/download-1.png" alt="" class="info__img" />

      <h1 class="info__title">Скачать Лаунчер</h1>

      <p class="info__subtitle">
        Еще не играешь с лучшим лаунчером в снг?
        <a href="" class="subtitle__link">Кликай!</a>
      </p>
    </div>
  </section>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Download",
  props: {},
};
</script>

<style scoped lang="scss">
@import "../styles/colors.scss";

.download {
  margin-top: 100px;
  display: flex;
  justify-content: space-around;
  align-items: center;

  .download__info {
    width: 90%;
    align-items: center;
    display: flex;
    justify-content: space-between;
    flex-direction: column;

    .info__img {
      opacity: 0.6;
      width: 320px;
      height: 320px;
      border-right: 20px;
    }

    .info__title {
      margin-top: 20px;
      font-size: 40px;
      font-weight: 700;
      color: $black1;
    }

    .info__subtitle {
      margin-top: 20px;
      font-size: 20px;
      font-weight: 200;
      color: $black2;

      .subtitle__link {
        color: inherit;
      }
    }
  }

  .download__hr {
    width: 2px;
    height: 500px;
    border-radius: 5px;
    background-color: $black3;
  }
}

@media (max-width: 1200px) {
  .download {
    height: 1000px;
    justify-content: space-around;
    flex-direction: column;
    .download__hr {
      display: none;
    }
  }
}

@media (max-width: 800px) {
  .download {
    .download__info {
      .info__img {
        width: 240px;
        height: 240px;
      }
    }
  }
}
</style>
