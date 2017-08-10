<template lang="html">
  <div id="inputArea">
    <hr>
    <md-input-container>
    <label>Write and Press Enter</label>
      <md-input placeholder="What to do" v-model="newItem" @keyup.enter.native='addItem()'></md-input>
    </md-input-container>
  </div>
</template>

<script type="text/javascript">
  export default {
    data() {
      return { newItem: '' }
    },
    methods: {
      addItem () {
        console.log("TodoInput.addItem()")
        // why do I us this.newItem
        console.log("newItem : ", this.newItem)
        this.$eventBus.$emit('addItemFromInput', this.newItem)
        this.newItem = ''
      }
    }
  }
</script>

<style lang="css">
  #inputArea {
    margin: 20px;
  }
</style>
