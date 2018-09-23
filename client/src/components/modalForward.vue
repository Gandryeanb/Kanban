<template>
    <div class="ui basic modal forward">
        <div class="ui icon header">
            <i class="angle double right icon"></i>
            <h2>Better Check twice</h2>
            <div style="margin-top: 30px;">
                <h3>Are you sure this task was completed ?</h3>
            </div>
            <div class="actions" style="margin-top:30px;">
            <button class="ui red small cancel button"> cancel </button>
            <button class="ui green small ok button" v-on:click="forwardTask"> Of course! </button>
            </div>
        </div>
    </div>
</template>

<script>
import db from '../config'
import { mapActions, mapState } from 'vuex'
export default {
  name: 'forwardModal',
  computed: {
    ...mapState(['taskState']),
    selectedTask () {
      return {
        id: this.taskState.id,
        task: this.taskState.dataTask,
        forward: this.taskState.forwardPos,
        backward: this.taskState.backwardPos,
        current: this.taskState.currentPos
      }
    }
  },
  methods: {
    ...mapActions(['selectTask']),
    forwardTask () {
      const delPath = db.ref(`db/${this.selectedTask.current}/${this.selectedTask.id}`)
      const movePath = db.ref(`db/${this.selectedTask.forward}/`)
      delPath.remove()
      movePath.push({
        taskName: this.selectedTask.task.taskName,
        description: this.selectedTask.task.description,
        priority: this.selectedTask.task.priority,
        createdAt: Date()
      })
      this.selectTask({ 'id': 'none', 'dataTask': 'none', 'backwardPos': 'none', 'forwardPos': 'none', 'currentPos': 'none' })
    }
  }
}
</script>

<style>

</style>
