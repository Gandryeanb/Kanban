<template>
    <div class="ui basic modal del">
        <div class="ui icon header">
            <i class="trash alternate outline icon"></i>
            <h2>This task will deleted forever</h2>
            <div style="margin-top: 30px;">
                <h3>Are you sure to want delete this task ?</h3>
            </div>
            <div class="actions" style="margin-top:30px;">
            <button class="ui red small cancel button"> cancel </button>
            <button class="ui green small ok button" v-on:click="removeTask"> i'm sure </button>
            </div>
        </div>
    </div>
</template>

<script>
import db from '../config'
import { mapState } from 'vuex'
export default {
  name: 'deleteModal',
  computed: {
    ...mapState(['taskState']),
    data () {
      return { id: this.taskState.id, currentPos: this.taskState.currentPos }
    }
  },
  methods: {
    removeTask () {
      const removePath = db.ref(`db/${this.data.currentPos}/${this.data.id}`)
      removePath.remove()
    }
  }
}
</script>

<style>

</style>
