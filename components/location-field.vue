<template>
  <div>
    <div class="flex">
      <input
        id="searchTextField"
        type="text"
        placeholder="Lugar"
        class="w-full px-3 py-2 border rounded h-8 pl-1"
        :value="location"
        @input="$emit('input', $event.target.value)"
      />
    </div>
  </div>
</template>

<script>
export default {
  props: { location: String },
  data() {
    return {
      center: { lat: 0, lng: 0 },
      autocomplete: null,
    };
  },
  mounted() {
    const input = document.getElementById("searchTextField");
    const options = {
      bounds: new google.maps.LatLngBounds(
        new google.maps.LatLng(-12.046374, -77.042793)
      ),
      types: ["establishment"],
    };

    this.autocomplete = new google.maps.places.Autocomplete(input, options);
    this.autocomplete.addListener("place_changed", () => {
      this.$emit("input", this.autocomplete.getPlace().name);
    });
  },

  methods: {
    centerChange(e) {
      console.log(e);
      const [lat, lng] = [
        parseFloat(e.map.center.lat()),
        parseFloat(e.map.center.lng()),
      ];
      console.log(lat, lng);
      this.center = { lat, lng };
    },

    updateLocation(e) {
      console.log(this.autocomplete);
      // this.$emit('input', )
    },
  },
};
</script>

<style>
</style>
