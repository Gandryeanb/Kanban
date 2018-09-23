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
                    <div class="ui green left button" v-on:click="modalBackward(index, data)">
                        <i class="angle left icon"></i>
                    </div>
                    <div class="ui green button" v-on:click="detailTask(index)">
                        detail
                    </div>
                    <div class="ui green button" id="deleteBtn" v-on:click="modalRemove(index, data)">
                        <i class="trash alternate icon"></i>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'done',
  props: ['dataDone'],
  data () {
    return {
      selectedId: 'none'
    }
  },
  computed: {
    datas () {
      return this.dataDone
    }
  },
  methods: {
    ...mapActions(['viewDetail', 'selectTask']),
    detailTask (id) {
      this.viewDetail({ room: 'done', id })
      $('.ui.mini.modal.detail').modal('show')
    },
    modalRemove (id, dataTask) {
      this.selectTask({ id, dataTask, 'backwardPos': 'none', 'forwardPos': 'none', 'currentPos': 'done' })
      $('.ui.basic.modal.del').modal('show')
    },
    modalBackward (id, dataTask) {
      this.selectTask({ id, dataTask, 'backwardPos': 'doing', 'forwardPos': 'none', 'currentPos': 'done' })
      $('.ui.basic.modal.backward').modal('show')
    }
  }
}
</script>

<style>

</style>
