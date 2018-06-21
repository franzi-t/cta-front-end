<template>
  <div class="hello">
    <TheNavbar />
    <MainText />
    <div class="blocks">
      <Playground />
      <Documentation />
    </div>
  </div>
</template>

<script>
import TheNavbar from '@/components/TheNavbar'
import MainText from '@/components/MainText'
import Playground from '@/components/Playground'
import Documentation from '@/components/Documentation'

export default {
  components: {
    TheNavbar,
    MainText,
    Playground,
    Documentation
  },

  data () {
    return {
    }
  }
}
</script>


<style>

.hello {
  padding: 0px 35px 0px 20px;
}

.blocks {
  display: inline-flex;
  position: relative;
  top: 55px;
}
</style>
