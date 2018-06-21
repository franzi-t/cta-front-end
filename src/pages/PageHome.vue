<template>
  <div id="hello">
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

#hello {
  position: relative;
  height: 100vh;
  padding: 0px 31px 0px 31px;
}

.blocks {
  padding-bottom: 33px;
  display: inline-flex;
  position: relative;
  top: 55px;
}
</style>
