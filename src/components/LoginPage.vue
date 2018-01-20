<template>
  <div>
    <el-row>
      <el-col :span="12">

        <el-input
                type="input"
                placeholder="Username"
                v-model="username">
        </el-input>
        <div style="margin: 20px 0;"></div>
        <el-input
                type="password"
                placeholder="Password"
                v-model="password">
        </el-input>

      </el-col>
      <el-col :span="12"><div class="grid-content bg-purple-light"></div></el-col>

    </el-row>
  </div>
</template>

<script>
export default {
  name: 'LoginPage',
  data () {
    return {
      username: null,
      password: null,
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {
    decipherPasswords () {
      return 'passwords'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
