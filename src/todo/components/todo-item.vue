<template>
  <div class="card">
    <div>todo item</div>
  </div>
</template>
<script>
export default {
  props: {
    usersData: {
      type: Array,
      required: true
    },
    index: {
      type: Number,
      required: true
    }
  }
};
</script>
