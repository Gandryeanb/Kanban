<template>
  <div>
    <div class="ui container text center aligned" style="margin-top: 50px;">
      <h1>Kanban</h1>
      <div class="ui big yellow button" tabindex="0" style="margin-top: 10px;" v-on:click="createModal">Create new
        task</div>
    </div>
    <div class="ui center aligned container" style="margin-top: 20px;">
      <div class="ui equal width grid segment">
        <div class="row">
          <div class="column">
            <div class="ui yellow segment">
              <h3>Backlog</h3>
            </div>
          </div>
          <div class="column">
            <div class="ui orange segment">
              <h3>Todo</h3>
            </div>
          </div>
          <div class="column">
            <div class="ui red segment">
              <h3>Doing</h3>
            </div>
          </div>
          <div class="column">
            <div class="ui green segment">
              <h3>Done</h3>
            </div>
          </div>
        </div>
      </div>
      <div class="ui equal width grid">
        <div class="row">
          <div class="column">
            <backlog v-bind:dataBacklog="data.backlog"></backlog>
          </div>
          <div class="column">
            <todo v-bind:dataTodo="data.todo"></todo>
          </div>
          <div class="column">
            <doing v-bind:dataDoing="data.doing"></doing>
          </div>
          <div class="column">
            <done v-bind:dataDone="data.done"></done>
          </div>
        </div>
      </div>
    </div>
    <detail v-bind:detail="detailTask"></detail>
    <forwardModal></forwardModal>
    <backwardModal></backwardModal>
    <delModal></delModal>
    <div class="ui tiny modal">
      <div class="header">
        Create new task
      </div>
      <div class="content">
        <div class="ui form">
          <div class="fields">
            <div class="twelve wide field">
              <h4>Title</h4>
              <input type="text" v-model="titleVal">
            </div>
            <div class="four wide field">
              <h4>Priority</h4>
              <select class="ui fluid dropdown" v-model="priorityVal">
                <option value="5">Max</option>
                <option value="4">4</option>
                <option value="3">3</option>
                <option value="2">2</option>
                <option value="1">1</option>
              </select>
            </div>
          </div>
          <div class="field">
            <h4>Description</h4>
            <textarea rows="2" v-model="descVal"></textarea>
          </div>
        </div>
      </div>
      <div class="actions">
        <div class="ui deny button">Cancel</div>
        <div class="ui deny green button" v-on:click="createTask">OK</div>
      </div>
    </div>
  </div>
</template>

<script>
import db from '../config'
import { mapActions, mapState } from 'vuex'
import backlog from '../components/Backlog'
import todo from '../components/Todo'
import doing from '../components/Doing'
import done from '../components/Done'
import detail from '../components/modalDetail'
import forwardModal from '../components/modalForward'
import backwardModal from '../components/modalBackward'
import delModal from '../components/modalDel'

export default {
  name: 'home',
  data () {
    return {
      titleVal: '',
      descVal: '',
      priorityVal: 5
    }
  },
  created () {
    this.loadData()
  },
  computed: {
    ...mapState(['allData', 'detailData', 'isDataReady', 'taskState']),
    selectedTask () {
      return this.taskState
    },
    data () {
      return this.allData
    },
    allSet () {
      return this.isDataReady
    },
    detailTask () {
      return this.detailData
    }
  },
  methods: {
    ...mapActions(['loadData']),
    formCreate () {
      $('.ui.tiny.modal').modal('show')
    },
    createTask () {
      const backLog = db.ref('db/backlog/')
      backLog.push({
        taskName: this.titleVal,
        description: this.descVal,
        priority: this.priorityVal,
        createdAt: Date(),
        updatedAt: Date()
      })
      this.titleVal = ''
      this.descVal = ''
      this.priorityVal = 5
    },
    createModal () {
      $('.ui.tiny.modal').modal('show')
    }
  },
  components: {
    backlog, todo, doing, done, detail, forwardModal, backwardModal, delModal
  }
}
</script>
