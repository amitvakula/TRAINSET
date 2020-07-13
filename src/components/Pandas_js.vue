<template>
    <div class='pandas'>
<!--         {{ ds_1 }} -->
    </div>
</template>

<script>
// import { Series, DataFrame } from 'pandas-js';
import * as d3 from 'd3'
import DataFrame, { Row } from 'dataframe-js';
    
export default {
    data() {
        return {
//             ds_1,
//             ds_2,
        }
    }
}

// var series = require('pandas-js').Series;
// var dataframe = require('pandas-js').DataFrame;
var dataframe = require('dataframe-js').DataFrame;
    
// const ds_1 = new series([1, 2, 3, 4], {name: 'My Data 1'});
// console.log('This is a Series');
// console.log(ds_1.toString());
// console.log(`Sum: ${ds_1.sum()}`);
// console.log(`Standard deviation: ${ds_1.std()}`);
    
// const ds_2 = new series([2, 3, 4, 5], {name: 'My Data 2'});
// console.log('Summing two Series:');
// console.log(ds_1.plus(ds_2).toString());
    
// console.log("load trainset_patient7.csv")
// d3.csv("/Users/harebar/Downloads/trainset_patient7.csv").then(function(data) {
//     console.log(data[0]);
// });
    
    
// console.log("loading attempt two for trainset_patient7.csv")
// d3.csv("/Users/harebar/Downloads/trainset_patient7.csv",function(data){
//     console.log("meow");
//     console.log(data[0]);
// },function(error, rows){
//     console.log(error.toString());
//    console.log("woof")
//    console.log(rows); 
// });

// dataframe.fromCSV('/Users/harebar/Downloads/trainset_patient7_201704').then(df => df);
dataframe.fromCSV('https://ucsf.box.com/shared/static/7bnsdyjbypbjsk9ado1jhf63iez1ao6o.csv').then(df => df);
</script>

<style scoped>


</style>
