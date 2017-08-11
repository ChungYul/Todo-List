<template lang="html">
  <div id="showArea">
    <md-list>
      <md-list-item v-for="(item,index) in itemLists" :key="index" >

        <template v-if="!item.isEdit">
          <span>{{item.message}}</span>
        </template>
        <template v-else>
          <input type="text" v-model="item.message" @keyup.enter="doneEdit(index)"/>
        </template>
        <span>
          <md-button class="md-icon-button md-raised" v-on:click="editItem(index)">
            <md-icon class="md-primary">edit</md-icon>
          </md-button>

          <md-button class="md-icon-button md-raised" v-on:click="deleteItem(index)">
            <md-icon class="md-accent">delete</md-icon>
          </md-button>
        </span>

      </md-list-item>
    </md-list>
    {{itemLists}}
  </div>
</template>

<script>
export default {
  data() {
    return {
      itemLists: [],
      keyIndex : 0
    }
  },
  created() {
    this.$eventBus.$on('addItemFromInput',this.addItem)
  },
  methods: {
    addItem(newItem) {
      console.log("TodoList.addItem", newItem)
      var newTodo = {
        key : this.keyIndex,
        message : newItem,
        isEdit : false
      }
      this.itemLists.push(newTodo)
      this.keyIndex++
    },
    editItem(index) {
      console.log("TodoList.editItem item.index", index)
      this.itemLists[index].isEdit=true
      // item.isEdit = true
    },
    deleteItem(index) {
      console.log("TodoList.deleteItem", index)
      this.itemLists.splice(index, 1)
    },
    doneEdit(index) {
      console.log("TodoList.doneEdit item.index", index)
      this.itemLists[index].isEdit=false
    }
  }
}
</script>

<style lang="css">
</style>
