<script>
import { computed } from "vue";
import { authStore } from "@/store/authStore";

export default {
  props: {
    notifications: {
      type: Object,
      required: true,
    },
  },
  setup() {
    const isVisible = computed(() => authStore().getModalNotification);
    const notificationsCount = computed(() => authStore().hasNotifications());

    function showModalNotification() {
      authStore().openModalNotification(!isVisible.value);
    }

    function openNotification(id) {
      authStore().openNotification(id);
    }

    return {
      isVisible,
      showModalNotification,
      openNotification,
      notificationsCount,
    };
  },
};
</script>

<template>
  <div class="relative flex gap-3 flex-col items-end">
    <div
      @click="showModalNotification"
      class="absolute px-4 py-2 bg-white cursor-pointer rounded-xl shadow-card hover:text-primary"
    >
      <span v-if="notificationsCount !== 0" class="notification-alert">
        {{ notificationsCount }}
      </span>
      <i class="ph ph-bell" :class="`text-2xl`"></i>
    </div>
    <div
      v-if="isVisible"
      class="absolute top-14 w-64 text-sm bg-white rounded-xl shadow-card enter-menu overflow-hidden"
    >
      <div
        @click="openNotification(message.id)"
        v-for="message in notifications"
        :key="message.id"
        :class="`${message.lida ? 'read' : 'unread'}
          relative w-full py-2 px-3 cursor-pointer
          `"
      >
        {{ message.message }}
      </div>
    </div>
  </div>
</template>