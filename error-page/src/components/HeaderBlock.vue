<template>
  <header class="header">
    <div class="container">
      <a class="logo" href="#">
        <img src="../assets/img/logo.svg" alt="logo" />
        Родные просторы
      </a>
      <div class="inner">
        <button class="location">
          <img src="../assets/img/location.svg" alt="loc" />
          <span>Санкт-Петербург</span>
        </button>
        <button class="show"></button>
        <button class="region"></button>
        <div class="user">
          <button class="user__offise"></button>
          <button class="menu"></button>
        </div>
      </div>
    </div>
  </header>
</template>

<script></script>

<style lang="scss">
.header {
  padding: 24px 0;
  width: 100%;
  color: #001420;
  background: #ffffff;
  border-radius: 0px 0px 8px 8px;
  .container {
    display: flex;
    justify-content: space-between;
    .logo {
      display: flex;
      align-items: center;
      gap: 12px;
      font-size: 20px;
      font-weight: 600;
    }
    .inner {
      display: flex;
      align-items: center;
      gap: 16px;
      .location,
      .show,
      .region,
      .user,
      .user__offise,
      .menu {
        background: #efefef;
        border: none;
        border-radius: 12px;
        -webkit-border-radius: 12px;
        -moz-border-radius: 12px;
        -ms-border-radius: 12px;
        -o-border-radius: 12px;
        padding: 12px 16px;
      }
      .location {
        display: flex;
        align-items: center;
        gap: 13px;
        font: 500 16px/21px Roboto;
        border: none;
        border-radius: 12px;
        -webkit-border-radius: 12px;
        -moz-border-radius: 12px;
        -ms-border-radius: 12px;
        -o-border-radius: 12px;
        padding: 12px 16px;
      }
      .show,
      .region,
      .user__offise,
      .menu {
        width: 48px;
        height: 48px;
        background-repeat: no-repeat;
        background-position: center;
      }
      .show {
        background-image: url("../assets/img/show.svg");
      }
      .region {
        background-image: url("../assets/img/RU.svg");
      }
      .user {
        padding: 0;
        .user__offise {
          background-image: url("https://im.kommersant.ru/Issues.photo/CORP/2019/03/01/KMO_111307_24199_1_t218_162046.jpg");
          background-size: cover;
        }
        .menu {
          background-image: url("../assets/img/menu-btn.svg");
          background-color: transparent;
        }
      }
    }
  }
}
</style>
