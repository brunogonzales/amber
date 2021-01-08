<template>
  <div>
    <tabs
      :tabs="categories"
      :dictionary="dictionary"
      :activeTab="activeTab"
      @tabClick="(tab) => (activeTab = tab)"
    />
    <div class="pt-6 px-4">
      <div v-for="missing in missingsToDisplay" :key="missing.id">
        <missing-preview :missing="missing" />
      </div>
    </div>
  </div>
</template>

<script>
import missingPreview from "@/components/missing-preview.vue";
import tabs from "@/components/tabs.vue";
export default {
  components: { missingPreview, tabs },
  computed: {
    missingsToDisplay() {
      return this.missings[this.activeTab];
    },
  },
  data() {
    return {
      activeTab: "people",
      categories: ["personas", "mascotas", "objetos", "encontrado"],
      dictionary: {
        personas: "people",
        mascotas: "pets",
        objetos: "things",
        encontrado: "found",
      },

      missings: {
        people: [
          {
            id: 1,
            name: "Jorge",
            found: false,
            last_seen: "Tue, Nov, 18th ⋅ 10:00am",
            location: "Calle Narciso de la Colina",
            image: "https://pbs.twimg.com/media/EUCh095XQAIXfbM.jpg",
            description: "es marron con ojos claros y una cara larga",
          },
        ],
        pets: [
          {
            id: 1,
            name: "Tobi",
            found: false,
            last_seen: "Tue, Nov, 18th ⋅ 10:00am",
            location: "Calle Inca 141",
            image:
              "https://post.greatist.com/wp-content/uploads/sites/3/2020/02/322868_1100-800x825.jpg",
            description: "es marron con ojos claros y una cara larga",
          },
        ],
        things: [
          {
            id: 1,
            name: "USB con Tesis",
            found: false,
            last_seen: "Tue, Nov, 18th ⋅ 10:00am",
            location: "Calle Inca 141",
            image:
              "https://www.agilprint.com/assets/web/img/usb_llave_producto.jpg",
            description: "12gb rojo Kingston",
          },
        ],
        found: [
          {
            id: 1,
            name: "Macbook Pro 2020",
            found: true,
            last_seen: "Tue, Nov, 18th ⋅ 10:00am",
            location: "Calle Inca 141",
            image:
              "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2251&q=80",
            description: "es marron con ojos claros y una cara larga",
          },
        ],
      },
    };
  },
};
</script>

<style>
</style>