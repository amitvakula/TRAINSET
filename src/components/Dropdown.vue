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

    <div class="result">
      Selected: <strong>{{ selectedLabel }}</strong>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      selectedLabel: ''
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

.result {
  margin-top: 30px;
  text-align: left;
}

label {
  display: block;
}

</style>