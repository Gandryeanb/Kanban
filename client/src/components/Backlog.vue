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
                    <div class="ui yellow button" id="deleteBtn" v-on:click="modalRemove(index, data)">
                        <i class="trash alternate icon"></i>
                    </div>
                    <div class="ui yellow button" v-on:click="detailTask(index)">
                        detail
                    </div>
                    <div class="ui yellow right button" v-on:click="modalForward(index, data)">
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
  name: 'backlog',
  props: ['dataBacklog'],
  data () {
    return {
      selectedId: 'none'
    }
  },
  computed: {
    datas () {
      return this.dataBacklog
    }
  },
  methods: {
    ...mapActions(['viewDetail', 'selectTask']),
    detailTask (id) {
      this.viewDetail({ room: 'backlog', id })
      $('.ui.mini.modal.detail').modal('show')
    },
    modalRemove (id, dataTask) {
      this.selectTask({ id, dataTask, 'backwardPos': 'none', 'forwardPos': 'none', 'currentPos': 'backlog' })
      $('.ui.basic.modal.del').modal('show')
    },
    modalForward (id, dataTask) {
      this.selectTask({ id, dataTask, 'backwardPos': 'none', 'forwardPos': 'todo', 'currentPos': 'backlog' })
      $('.ui.basic.modal.forward').modal('show')
    }
  }
}
</script>

<style>

</style>
