<template>
  <div class="hello">
    Hi
    <table id = "tableGlobal" border = '1' width = "100%">
      <tr v-show="showFilterFlag">
        <td  v-for="nameRow in tableData.info" :width = "nameRow.size">
          <input type = "text" :placeholder=" nameRow.description || nameRow.name ">
        </td>
      </tr>
      <tr>
        <td v-for="nameRow in tableData.info" :width = "nameRow.size">{{ nameRow.description || nameRow.name }}</td>
      </tr>
      <!-- <tr>
        <td :colspan="tableData.info.length"> {{ tableData.info.length }}
        <table id = "tableData" border = '1'> -->
          <tr v-for="lineContent in tableData.content" :key="lineContent.id">
            <td v-for="(cell, cKey) in lineContent"> {{ cell }}</td>
          </tr>
        <!-- </table>
        </td>
      </tr> -->
      <tr>
        <td>
          <button @click="showFilter()">Filter</button>
        </td>
        <td>кнопка + управление</td>
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
      showFilterFlag: false,
      filterValue: {},
      tableData: {
        info:{
          cId: {
            'name': 'cId',
            'description': 'Идентификатор',
            'size': 10,
            'visible': true
          },
          cName: {
            'name': 'cName',
            'description': 'Имя',
            'size': 10,
            'visible': true
          },
          cComment: {
            'name': 'cComment',
            'description': '',
            'size': 10,
            'visible': true
          }
        },
        content: [
          {
            'cId': 1,
            'cName': 'name1',
            'cComment': 'comment 1'
          },
          {
            'cId': 2,
            'cName': 'name2',
            'cComment': 'comment 2'
          },
          {
            'cId': 3,
            'cName': 'name3',
            'cComment': 'comment 3'
          },
          {
            'cId': 4,
            'cName': 'name4',
            'cComment': 'comment 4'
          }
        ]
      }
    }
  },
  methods: {
    // показать/скрыть фильтры
    showFilter(){
      console.log (">start showFilter");
      this.showFilterFlag =! this.showFilterFlag;
    },
    // изменить размер ширины ячейки
    calcSizeHead(){
      console.log (">start calcSizeHead");
      let keysInfo,
          tableInfo = this.tableData.info,
          indKey;
      keysInfo = Object.keys(tableInfo);
      console.log("-> keysInfo: ", keysInfo);
      for(indKey = 0; indKey < keysInfo.length; indKey++) {
        tableInfo[keysInfo[indKey]].size = Math.max(tableInfo[keysInfo[indKey]].name.length, tableInfo[keysInfo[indKey]].description.length, tableInfo[keysInfo[indKey]].size);
        console.log("-> tableInfo.size: ", tableInfo[keysInfo[indKey]].size);
      }
    }
  },
  created(){
    this.calcSizeHead();
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
