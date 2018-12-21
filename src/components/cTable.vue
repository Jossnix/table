<template>
    <div>
        <div id = "firstGrid">
            <div id = "hbTable">
                <div id = "hTable" :style = "{ width: tHeadWidth }">
                    <table id = "headTable">
                        <tr>
                            <td v-for="(nameRow, iKey, indNam) in tableData.info" :width = "nameRow.sizeProc">{{ nameRow.description || nameRow.name }}</td>
                        </tr>
                        <tr v-show="filterVisible" >
                            <td  v-for="nameRow in tableData.info" :width = "nameRow.sizeProc">
                            <input type = "text" style = "width: 100%; text-align: center" :placeholder="nameRow.description || nameRow.name ">
                            </td>
                        </tr>
                    </table>
                </div>
                <div id = "bTable">
                    <table id = "cTable">
                        <tr id  = "cLine" v-for="(lineContent, indContent) in tableData.content" :key="lineContent.id" @mouseover="markBack(indContent)" @mouseout="cleanMarkBack" :class = "(markTrmMouse && markRow===indContent) ? 'trBack' : '' ">
                            <td v-for="(cell, cKey, indName) in lineContent" :width = "tableData.info[cKey].sizeProc"> {{ cell }} </td>
                        </tr>
                    </table>
                </div>
            </div>
            <div id = "panFoot">
                <button @click="showFilter()">Filter</button>
            </div>
        </div>
    </div>
</template>
    
<script>
    import Vue from 'vue'
    import {tableData1} from './tmpArray.js'
    export default {
        data () {
            return{
                tHeadWidth: "100%",
                tBodyWidth: 1920,
                startTableBody: 158,
                clientWidth: window.innerWidth,
                clientHeight: window.innerHeight,
                markRow: '',
                markTrmMouse: false,
                filterVisible: false,
                filterValue: {},
                tableData: tableData1,
            }
        },
        methods:{
            showFilter() {
                console.log(">start showFilter");
                this.filterVisible = !this.filterVisible;
                console.log("-> filter Visible: ", this.filterVisible);
                this.tHeadWidth = (this.tBodyWidth*100)/document.body.offsetWidth + "%"
            },
            async calcSizeHead(){
                console.log (">start calcSizeHead");
                let allWidth = 0,
                    arrWidthCell = [],
                    keysInfo,
                    tableInfo = this.tableData.info,
                    indKey;
                keysInfo = Object.keys(tableInfo);
                console.log("-> keysInfo: ", keysInfo);
                for(indKey = 0; indKey < keysInfo.length; indKey++) {
                    tableInfo[keysInfo[indKey]].size = Math.max(tableInfo[keysInfo[indKey]].name.length, tableInfo[keysInfo[indKey]].description.length, tableInfo[keysInfo[indKey]].size);
                    allWidth+=tableInfo[keysInfo[indKey]].size;
                    arrWidthCell.push({'name': keysInfo[indKey], 'size': tableInfo[keysInfo[indKey]].size})
                    console.log("-> tableInfo.size: ", tableInfo[keysInfo[indKey]].size);
                    console.log("-> allWidth: ", allWidth);
                }
                console.log("-> arrWidthCell: ", arrWidthCell);
                this.calcWidthProc(allWidth, arrWidthCell);
            },
            async calcWidthProc(maxWidth, arrHead){
                console.log (">start calcWidthProc");
                let indArrHead;
                console.log("=> clientWidth: ", this.clientWidth);
                if (maxWidth > this.clientWidth) {
                    console.log("=> width maxWidth: ", maxWidth);
                    for (indArrHead = 0; indArrHead < arrHead.length; indArrHead++) {
                        this.tableData.info[arrHead[indArrHead].name].sizeProc = String((arrHead[indArrHead].size));
                    }
                } else {
                    console.log("=> width clientWidth %: ", this.tBodyWidth);
                    for (indArrHead = 0; indArrHead < arrHead.length; indArrHead++) {
                        this.tableData.info[arrHead[indArrHead].name].sizeProc = String((arrHead[indArrHead].size*100)/maxWidth)+'%';
                    }
                }
            },
            markBack(idRow){
                console.log(">start markBack");
                console.log(">start idRow: ", idRow);
                this.markRow = idRow;
                this.markTrmMouse = true;
            },
            cleanMarkBack(){
                console.log(">start cleanMarkBack");
                this.markTrmMouse = false;
            },
            customResize() {
                // Определение размеров окна
                this.clientWidth = window.innerWidth;
                this.clientHeight = window.innerHeight;
                // Определение размера контента без прокрутки
                this.tBodyWidth = document.getElementById("bTable").scrollWidth;
                this.tHeadWidth = (this.tBodyWidth*100)/document.body.offsetWidth + "%"
                this.calcSizeHead();
            }
        },
        mounted(){
            this.customResize();
            console.log("===> tableData: ", this.tableData);
            window.onresize = (event) => {
                this.customResize();
            };
        }
    }
</script>
    
<style>

    .trBack {
        background-color: rgba(205, 215, 252, 0.925);
    }
    #firstGrid {
        display: grid;
        grid-template-rows: repeat (2, 1fr);
        grid-template-columns: 1fr;
        grid-gap: 0.2vw;
        height: 100%;
        width: 100%;
        background: rgba(205, 215, 252, 0.925);
        padding: 0px;
    }

    #hbTable {
        display: grid;
        position: relative;
        grid-template-rows: auto 1fr ;
        grid-template-columns: 1fr;
        grid-gap: 0.1vw;
        height: 91vh;
        overflow-x: auto;
        padding: 0px;
    }

    #hTable{
        background: rgba(221, 228, 253, 0.925);
        overflow-x: visible;
        /* font-size: 20px; */
        /* font-style: italic; */
        /* font-weight: bold; */
        font-family: 'Merriweather', serif;
    }

    #bTable{
        width: 100%;
        background: rgb(255, 255, 255);
        overflow-y: scroll;
        overflow-x: visible;
        padding: 0px;
    }
    
    #panFoot{
        vertical-align: middle;
        width: 100%;
        background: rgba(221, 228, 253, 0.925);
    }
    #headTable{
        text-align: center;
        padding: 0px;
        width: 100%;
    }
    #cTable{
        width: 100%;
        text-align: center;
        border: 1px solid grey;
        padding: 0px;
    }
    /* #cLine{
        border: 1px solid grey;
    } */
    td{
        border: 1px solid grey;
    }
</style>

