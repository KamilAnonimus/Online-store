<template>
  <div class="loaderTrue"
       :class="{'loaderFalse':this.$store.state.visibilityLoader}"></div>
</template>

<script>
export default {
}
</script>
  
<style scoped>
.loaderTrue {
  width: 100px;
  height: 100px;
  position: absolute;
  top: 50%;
  margin: -25px auto 0;
  border-radius: 50%;
  background: #08B1D6;;
  background: -moz-linear-gradient(left, #08B1D6 10%, rgba(255, 255, 255, 0) 50%);
  background: -webkit-linear-gradient(left, #08B1D6 10%, rgba(255, 255, 255, 0) 50%);
  background: -o-linear-gradient(left, #08B1D6 10%, rgba(255, 255, 255, 0) 50%);
  background: -ms-linear-gradient(left, #08B1D6 10%, rgba(255, 255, 255, 0) 50%);
  background: linear-gradient(to right, #08B1D6 10%, rgba(255, 255, 255, 0) 50%);
  position: relative;
  -webkit-animation: loaderTrue 1.5s infinite linear;
  animation: loaderTrue 1.5s infinite linear;
  -webkit-transform: translateZ(0);
  -ms-transform: translateZ(0);
  transform: translateZ(0);
}

.loaderTrue:before {
  content: '';
  width: 50px;
  height: 50px;
  position: absolute;
  top: 0;
  left: 0;
  background: #08B1D6;
  border-radius: 100% 0 0 0;
}

.loaderTrue:after {
  content: '';
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: #ffffff;
  margin: auto;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
}

@-webkit-keyframes loaderTrue {
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}

@keyframes loaderTrue {
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}

.loaderFalse {
  display: none;
}
</style>