<template>
  <HeaderBlock />
  <ErrorBlock />
  <FooterBlock />
</template>

<script>
import HeaderBlock from "@/components/HeaderBlock";
import ErrorBlock from "@/components/ErrorBlock";
import FooterBlock from "@/components/FooterBlock";
export default {
  name: "App",
  components: {
    HeaderBlock,
    ErrorBlock,
    FooterBlock,
  },
};
</script>

<style lang="scss">
@import "./assets/css/reset.css";
@import "./assets/css/media.css";

*,
*::before,
*::after {
  box-sizing: border-box;
}
html,
body {
  height: 100%;
}
body {
  position: relative;
  font-family: "Roboto", sans-serif;
  color: #0f0e0e;
  background: #eff1f4;
}
.container {
  max-width: 1320px;
  padding: 0 15px;
  margin: 0 auto;
}
#app {
  display: flex;
  flex-direction: column;
  min-height: 100%;
}
.error-block {
  flex: 1 1 auto;
}
</style>
