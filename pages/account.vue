<template>
  <div>account: {{ $auth.user.given_name }}</div>
</template>

<script>
export default {
  middleware: "auth",
};
</script>