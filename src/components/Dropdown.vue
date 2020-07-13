<template>
  <div class="filters">

    <!-- Our various filter implementations will go here -->
    <div class="filter">
      <label for="basic-dropdown">Labels: </label>
      <select name="basic-dropdown" v-model="selectedLabel">
        <option>Sleep</option>
        <option>Device</option>
        <option>Activity Level</option>
      </select>
    </div>

    <div class="dropdown-result">
      Selected: <strong>{{ selectedLabel }}</strong>
    </div>
      
    <div class="buttons">
        <div v-if="selectedLabel === 'Sleep'">
            <input type="radio" id="label" value="Sleep" v-model="sleep">
            <label for="one">Sleep</label>
            <br>
            <input type="radio" id="label" value="Awake" v-model="sleep">
            <label for="two">Awake</label>
            <br>
            <span class='button-result'>Picked: {{ sleep }}</span>
        </div>
        <div v-if="selectedLabel === 'Device'">
            <input type="radio" id="label" value="Device On" v-model="device">
            <label for="one">Device On</label>
            <br>
            <input type="radio" id="label" value="Device Off" v-model="device">
            <label for="two">Device Off</label>
            <br>
            <span class='button-result'>Picked: {{ device }}</span>
        </div>
        <div v-if="selectedLabel === 'Activity Level'">
            <input type="radio" id="label" value="Activity 1" v-model="activity">
            <label for="one">Activity 1</label>
            <br>
            <input type="radio" id="label" value="Activity 2" v-model="activity">
            <label for="two">Activity 2</label>
            <br>
            <span class='button-result'>Picked: {{ activity }}</span>
        </div>    
    </div>
  </div>
</template>

<script>
export default {
    data () {
        return {
            selectedLabel: '',
            sleep: '',
            device: '',
            activity: '',
                }
            }
}
</script>

<style scoped>

.filters {
    width: 800px;
    margin: 0 auto;
}

.filter {
    text-align: left;
}

.dropdown-result {
    margin-top: 30px;
    text-align: left;
}
    
.buttons {
    margin-top: 30px;
    text-align: left;
    display: block;
}
    
.button-result {
    margin-top: 30px;
    text-align: left;
}

label {
    display: block;
}

</style>
