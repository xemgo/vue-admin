<template>
  <div>
    <SideBar />
  
   
    <router-view></router-view>
  </div>
</template>


<script>

import Index from "./components/Index.vue"
import Main from './components/Main.vue';
import SideBar from './components/SideBar.vue';
import Signin from "./components/Signin.vue"

export default {
  setup() {
    return {
      active: trueh
    }
  },
  methods: {
    isActive () {
      this.active = !this.active;
    }
  },
  components: {
    Index,
    Signin,
    SideBar
  },
}
</script>
<style>


</style>