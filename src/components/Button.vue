<template>
  <div class="button-group">
    <div>
        <input type="radio" id="label" value="Sleep" v-model="sleep">
        <label for="one">Sleep</label>
        <br>
        <input type="radio" id="label" value="Awake" v-model="sleep">
        <label for="two">Awake</label>
        <br>
        <span class='result'>Picked: {{ sleep }}</span>
    </div>
      
    <div>
        <input type="radio" id="label" value="Device On" v-model="device">
        <label for="one">Device On</label>
        <br>
        <input type="radio" id="label" value="Device Off" v-model="device">
        <label for="two">Device Off</label>
        <br>
        <span class='result'>Picked: {{ device }}</span>
    </div>
      
    <div>
        <input type="radio" id="label" value="Activity 1" v-model="activity">
        <label for="one">Activity 1</label>
        <br>
        <input type="radio" id="label" value="Activity 2" v-model="activity">
        <label for="two">Activity 2</label>
        <br>
        <span class='result'>Picked: {{ activity }}</span>
    </div> 
  </div>
</template>

<script>
  export default {
    data() {
      return {
        sleep: '',
        device: '',
        activity: '',
      }
    }
  }
</script>

<style scoped>
    
.result {
  margin-top: 30px;
  text-align: left;
}

.button-group {
  margin-top: 50px;
  text-align: auto;
}
    
</style>
