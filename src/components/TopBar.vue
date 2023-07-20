<template>
    <div class="topper">
      <div class="logo">
        <img src="@/assets/logo.png" alt="Logo" class="logo-image" />
      </div>
      <div class="text">
        <span class="website-name">Der Prufung</span>
        <span class="user-name">Ashrey Chauhan</span>
      </div>
      <button class="logout-button">Logout</button>
    </div>
  </template>

<script>
export default {
  methods: {
    logout() {
      // Perform logout logic here
      // Example: emit a "logout" event to be handled by the parent component
      this.$emit("logout");
    },
  },
};
</script>

<style scoped>
.topper {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #30a2ff;
  color: white;
  padding: 10px;
}

.logo-image {
  max-width: 100%;
  height: 40px;
}

.text {
  flex: 1;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

.website-name {
  font-size: 20px;
}

.user-name {
  font-size: 14px;
}

.logout-button {
  background-color: #30a2ff;
  color: rgb(72, 3, 3);
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
}

.logout-button:hover {
  color: rgb(255, 2, 2);
}

</style>
