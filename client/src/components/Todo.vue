<template>
    <div class="ui cards">
        <div class="card" v-for="(data,index) in datas" :key="index">
            <div class="content">
            <div class="header">{{data.taskName}}</div>
            <div class="description">
                {{data.description}}
            </div>
            </div>
            <div class="extra content">
                <div class="ui tree buttons">
                    <div class="ui orange button" v-on:click="modalBackward(index, data)">
                        <i class="angle left icon"></i>
                    </div>
                    <div class="ui orange button" v-on:click="detailTask(index)">
                        detail
                    </div>
                    <div class="ui orange right button" v-on:click="modalForward(index, data)">
                        <i class="angle right icon"></i>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'todo',
  props: ['dataTodo'],
  computed: {
    datas () {
      return this.dataTodo
    }
  },
  methods: {
    ...mapActions(['viewDetail', 'selectTask']),
    modalBackward (id, dataTask) {
      this.selectTask({ id, dataTask, 'backwardPos': 'backlog', 'forwardPos': 'doing', 'currentPos': 'todo' })
      $('.ui.basic.modal.backward').modal('show')
    },
    detailTask (id) {
      this.viewDetail({ room: 'todo', id })
      $('.ui.mini.modal.detail').modal('show')
    },
    modalForward (id, dataTask) {
      this.selectTask({ id, dataTask, 'backwardPos': 'backlog', 'forwardPos': 'doing', 'currentPos': 'todo' })
      $('.ui.basic.modal.forward').modal('show')
    }
  }
}
</script>

<style>

</style>
