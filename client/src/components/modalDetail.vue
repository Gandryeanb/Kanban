<template>
    <div class="ui mini modal detail">
        <div class="header">
            Detail Task
        </div>
        <div class="content">
            <h4>Task Name :</h4> {{detail.taskName}}
            <h4>Description :</h4> {{detail.description}}
            <h4>Created :</h4> {{new Date(detail.createdAt).getDate()}} - {{new Date(detail.createdAt).getMonth() + 1}} - {{new Date(detail.createdAt).getFullYear()}}
            <h4>Priority :</h4> {{detail.priority}}
        </div>
        <div class="actions">
            <div class="ui deny green button">Dismiss</div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'detailTask',
  props: ['detail']
}
</script>

<style>

</style>
