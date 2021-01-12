<template>
  <div>
    <div class="flex">
      <input
        id="searchTextField"
        type="text"
        placeholder="Lugar"
        @input="$emit('input', $event.target.value)"
        :value="location"
        class="w-full px-3 py-2 border rounded h-8 pl-1"
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
    new google.maps.places.Autocomplete(
      document.getElementById("searchTextField"),
      {
        bounds: new google.maps.LatLngBounds(
          new google.maps.LatLng(-12.046374, -77.042793)
        ),
      }
    );
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
      console.log(e);
    },
  },
};
</script>

<style>
</style>
