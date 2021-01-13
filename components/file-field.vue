<template>
  <div class="flex flex-col space-y-2">
    <label :for="name">{{ label }}</label>
    <input
      :name="name"
      class="border rounded"
      type="file"
      @change="fileSelected"
    />
    <button @click="uploadFile"></button>
  </div>
</template>

<script>
export default {
  props: {
    label: String,
    name: String,
  },
  data() {
    return {
      selectedFile: "",
    };
  },
  methods: {
    fileSelected(event) {
      this.selectedFile = event.target.files[0];
    },
    uploadFile(file) {},
  },
};
</script>

<style>
</style>