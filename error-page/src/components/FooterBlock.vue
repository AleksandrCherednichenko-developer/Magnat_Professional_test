<template>
  <footer class="footer">
    <div class="container">
      <div class="footer__info">
        <div class="footer__info-inner">
          <a href="#" class="logo">
            <img src="../assets/img/logo.svg" alt="logo" />
            Родные просторы
          </a>
          <p>
            RT360.RU – это возможность увидеть памятные места, музеи,
            императорские дворцы, театры, древние и современные города, храмовые
            комплексы и уникальные природные достопримечательности
            многонациональной и такой разной России.
          </p>
        </div>
        <div class="footer__info-inner">
          <div class="list">
            <p class="list__title">Основное</p>
            <ul>
              <li><a href="#">Главная</a></li>
              <li><a href="#">Интересные места</a></li>
              <li><a href="#">Подбери себе виртуальный тур</a></li>
              <li><a href="#">Топ посещаемых регионов</a></li>
              <li><a href="#">Идеи для 3D тура</a></li>
              <li><a href="#">Журнал</a></li>
              <li><a href="#">Наш инстаграм</a></li>
            </ul>
          </div>
          <div class="list">
            <p class="list__title">О нас</p>
            <ul>
              <li><a href="#">О проекте</a></li>
              <li><a href="#">FAQ</a></li>
              <li><a href="#">Связаться с нами</a></li>
            </ul>
          </div>
          <div class="list">
            <p class="list__title">Соц сети</p>
            <ul>
              <li>
                <a href="#"
                  ><img src="../assets/img/facebok.svg" alt="facebok"
                /></a>
              </li>
              <li>
                <a href="#"
                  ><img src="../assets/img/yandex.svg" alt="yandex"
                /></a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="footer__copyright">
        <p class="footer__copyright-text">
          © 2021 Rodnye prostory. All rights reserved
        </p>
        <div class="footer__copyright-contact">
          <p>+7 (999) 232 - 1 - 111</p>
          <p>+7 (921) 888 - 22 - 32</p>
          <p>rodniyeprostory@gmail.ru</p>
        </div>
      </div>
    </div>
  </footer>
</template>

<style lang="scss">
.footer {
  &__info {
    display: grid;
    grid-template-columns: 1fr 1fr;
    border-top: 1px solid rgba(129, 141, 164, 0.3);
    border-bottom: 1px solid rgba(129, 141, 164, 0.3);
    &-inner:first-child {
      padding: 64px 75px 64px 0px;
      .logo {
        display: flex;
        align-items: center;
        gap: 10px;
        font: 700 20px/24px Roboto;
        margin-bottom: 32px;
      }
      p {
        font: 400 16px/28px Inter;
        color: #818da4;
      }
    }
    &-inner:last-child {
      display: flex;
      justify-content: space-between;
      gap: 30px;
      padding: 64px 0 64px 40px;
      .list {
        &:last-child {
          ul {
            display: flex;
            flex-direction: row;
            gap: 13px;
          }
        }
        &__title {
          font: 400 17px/20px Roboto;
          color: #818da4;
          margin-bottom: 24px;
        }
        ul {
          display: flex;
          flex-direction: column;
          gap: 16px;
          font: 400 15px/18px Roboto;
        }
      }
    }
    .footer__info-inner + .footer__info-inner {
      border-left: 1px solid rgba(129, 141, 164, 0.3);
    }
  }
  &__copyright {
    display: flex;
    justify-content: space-between;
    gap: 20px;
    font: 400 16px/24px Roboto;
    color: #818da4;
    padding: 32px 0;
    &-text {
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
    }
    &-contact {
      display: flex;
      flex-direction: column;
      gap: 8px;
      align-items: flex-end;
    }
  }
}
</style>
