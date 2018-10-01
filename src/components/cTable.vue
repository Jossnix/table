<template>
  <div class="hello">
    Hi
    <table border = "1">
      <tr>
        <td v-for = "dataHead in arrHead">
          {{ dataHead }}
        </td>
      </tr>
      <tr v-for = "(dataRow, indexRow) in arrData" :key = item>
        <td v-for = "(dataCell, keyCell, indexCell) in dataRow">
          {{dataCell}}
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data: function() {
    return{
      arrData: [
        {text1: "value 1", text2: "value 2"},
        {text1: "value 11", text2: "value 21"},
        {text1: "value 12", text2: "value 22"},
        {text1: "value 13", text2: "value 23"},
        {text1: "value 14", text2: "value 24"},
        {text1: "value 15", text2: "value 25"},
      ],
      arrHead: ["text1", "text2"]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
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
