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
                    <div class="ui red button" v-on:click="modalBackward(index, data)">
                        <i class="angle left icon"></i>
                    </div>
                    <div class="ui red button" v-on:click="detailTask(index)">
                        detail
                    </div>
                    <div class="ui red right button" v-on:click="modalForward(index, data)">
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
  name: 'doing',
  props: ['dataDoing'],
  computed: {
    datas () {
      return this.dataDoing
    }
  },
  methods: {
    ...mapActions(['viewDetail', 'selectTask']),
    modalBackward (id, dataTask) {
      this.selectTask({ id, dataTask, 'backwardPos': 'todo', 'forwardPos': 'done', 'currentPos': 'doing' })
      $('.ui.basic.modal.backward').modal('show')
    },
    detailTask (id) {
      this.viewDetail({ room: 'doing', id })
      $('.ui.mini.modal.detail').modal('show')
    },
    modalForward (id, dataTask) {
      this.selectTask({ id, dataTask, 'backwardPos': 'todo', 'forwardPos': 'done', 'currentPos': 'doing' })
      $('.ui.basic.modal.forward').modal('show')
    }
  }
}
</script>

<style>

</style>
