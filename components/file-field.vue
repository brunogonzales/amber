<template>
  <div class="flex flex-col space-y-2">
    <label :for="name">{{ label }}</label>
    <div class="w-20 h-20 bg-gray-400 flex items-center justify-center">
      <p v-if="!imageURL" class="text-sm">SIN FOTO</p>
      <img v-else :src="imageURL" alt="" class="h-20" />
    </div>
    <input
      :name="name"
      class="border rounded"
      type="file"
      @change="fileSelected"
    />
    <div v-if="uploadProgress && uploadProgress < 100">
      CARGANDO...{{ uploadProgress }}%
    </div>
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
      loading: false,
      uploadProgress: null,
      imageURL: "",
    };
  },
  methods: {
    fileSelected(event) {
      if (!event.target.files[0]) return;
      this.loading = true;
      const file = event.target.files[0];
      const fd = new FormData();
      fd.append("image", file, file.name);
      const storageRef = this.$fireModule
        .storage()
        .ref(`${file.name}`)
        .put(file);
      storageRef.on(
        "state_changed",
        (snapshot) => {
          this.uploadValue =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        },
        (error) => {
          console.log(error.message);
        },
        () => {
          this.uploadProgress = 100;
          storageRef.snapshot.ref.getDownloadURL().then((url) => {
            this.imageURL = url;
            console.log(url);
            this.$emit("fileUpload", url);
          });
        }
      );
    },
  },
};
</script>

<style>
</style>