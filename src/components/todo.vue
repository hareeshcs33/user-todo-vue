<template>
  <div
    class="w-100 tbl-row table table-responsive table-striped table-bordered"
  >
    <tbody class="w-100">
      <tr class="d-flex">
        <td class="check-box tbl-row-content">
          <input
            type="checkbox"
            id="checkbox"
            v-model="item.isCompleted"
          />
          <label for="checkbox">{{ item.todoName }}</label>
          <span>{{ item.isCompleted }}</span>
          <!-- <i class="fa fa-shopping-cart" aria-hidden="true"></i> -->
        </td>
        <td class="date-box tbl-row-content">
          <input
            type="date"
            class="form-control"
            id="createdDate"
            name="createdDate"
            v-model="item.createdDate"
            :disabled="item.isDisabled"
          />
        </td>
        <td class="date-box tbl-row-content">
          <input
            type="date"
            class="form-control"
            id="dueDate"
            name="dueDate"
            v-model="item.dueDate"
            :disabled="item.isDisabled"
          />
        </td>
        <td class="edit-box tbl-row-content">
          <button
            class="btn btn-primary"
            @click="editFields"
            :disabled="!item.isDisabled"
          >
            <i class="fa fa-pencil fa-fw"></i>
          </button>
          <button
            class="btn btn-success mx-2"
            @click="saveFields"
            :disabled="item.isDisabled"
          >
            <i class="fa fa-floppy-o" aria-hidden="true"></i>
          </button>
          <button
            class="btn btn-danger"
            @click="deleteFields"
            :disabled="!item.isDisabled"
          >
            <i class="fa fa-trash-o" aria-hidden="true"></i>
          </button>
        </td>
      </tr>
    </tbody>
  </div>
</template>
<script>
export default {
  props: ["item"],
  data() {
    return {
    };
  },
  methods: {
    editFields() {
      this.item.isDisabled = false;
    },
    saveFields() {
        console.log(this.item);
        this.$emit('updateEditTodoItem',this.item);
        this.item.isDisabled = true;
    },
    deleteFields(index) {
      var dval = prompt("Please confirm", "yes");
      if (dval != null) {
        this.$emit("deleteRow");
      } else {
        alert("Good Decision !!!");
      }
    }
  }
};
</script>
<style>
.tbl-row {
  display: flex;
  align-items: center;
  align-content: space-between;
}
.tbl-row-content {
  width: 25%;
  text-align: center;
}
</style>
