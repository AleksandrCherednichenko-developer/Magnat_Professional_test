<template>
  <main class="error-block">
    <div class="container">
      <div class="inner">
        <img src="../assets/img/404.svg" alt="404" />
        <h5>Нам жаль, но страница не найдена.</h5>
        <a href="#">Перейти на главную</a>
      </div>
    </div>
  </main>
</template>

<style lang="scss">
.error-block {
  padding: 30px 0 64px;
  .inner {
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 100%;
    overflow: hidden;
    background-image: url("../assets/img/error-bg.jpg");
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    border-radius: 16px;
    padding: 40px;
    img {
      width: 486px;
      height: 284px;
      margin: 100px 0 10px;
    }
    h5 {
      text-align: center;
      max-width: 360px;
      font: 500 32px/40px Roboto;
      color: #ffffff;
      margin-bottom: 67px;
    }
    a {
      text-align: center;
      width: 100%;
      font: 700 16px/16px Roboto;
      color: #ffffff;
      background: #005399;
      border-radius: 16px;
      padding: 20px 0;
    }
  }
}
</style>
