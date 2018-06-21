<template>
  <div class="main-page-text">
    <div class="header-text">
      <img @click="toggle" 
          class="btn-bg"
          :class="{ 'open': !visible }"
          src="../assets/icon expand.svg">
      
      <h2 class="headlien-h-2-strong">Level</h2>
    </div>

    <div v-if="visible" class="question-div">
      <p class="question">
        You have only one allowed endpoint - Product Projections. Some information resource told you that the company X created a product with radioactive ingredients called "Eggplant". 
Which radioactive category belongs this product to?
      </p>
    </div>
    <div class="input-container">
      <input class="input" placeholder="Your answer" type="text">
      <img src="../assets/Button Answer default.svg" class="oval-29-copy">    
    </div>

  </div> 

</template>

<script>
export default {
  data () {
    return {
      visible: true
    }
  },
  methods: {
    toggle () {
      this.visible = !this.visible
    }
  }
}
</script>


<style lang="scss">
.main-page-text{
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  position: relative;
  left: 10%;
}

.header-text{
  display: inline-flex;
  text-align: left;
  margin-top: 20px;
}

.btn-bg {
  margin-top: 9px;
	height: 26px;
	width: 26px;
  &:hover{
    cursor: pointer;
  }
  &.open {
    transform: rotate(-90deg);
  }
}

.headlien-h-2-strong {
	color: #FFFFFF;
	font-family: "Open Sans";
	font-size: 16px;
  font-weight: bold;
  padding-left: 16px;
}

.question {
	height: 72px;
	width: 777px;
	color: #FFFFFF;
	font-family: "Open Sans";
	font-size: 18px;
	line-height: 24px;
  text-align: left;
}


.input-container{
  display: flex;
  justify-self: flex-start;
}

input{
  height: 32px;	
  width: 355px;	
  border: 1px solid #AFAFAF;	
  border-radius: 6px;
  background-color: transparent;
  margin-right: 10px;
}

input::placeholder {
  height: 18px;
  width: 77px;	
  color: #B0B0B0;	
  font-family: "Open Sans";	
  font-size: 13px;	
  line-height: 18px;
  padding-left: 10px;
  
}

input:focus { 
  outline: none;
  border: 1px solid #52CEBF;
  font-size: 16px;
  color: white;
  padding-left: 10px;
}

.oval-29-copy {
	height: 32px;
	width: 32px;
  &:hover{
    cursor: pointer;
  }
}


</style>
