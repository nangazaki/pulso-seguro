<template>
  <div class="bg-white w-1/3 rounded-xl p-4 shadow-card">
    <div class="text-center mb-4">
      {{ currentMonth }}
    </div>
    <div class="grid grid-cols-7 gap-2">
      <div
        v-for="(day, index) in days"
        :key="index"
        class="text-sm text-gray-500"
      >
        {{ day }}
      </div>
      <div v-for="date in dates" :key="date.value" :class="dateClasses(date)">
        <div
          class="flex items-center justify-center h-6 w-6 rounded-full cursor-pointer"
          @click="selectDate(date)"
        >
          {{ date.date }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  name: "Calendar",
  setup() {
    const today = new Date();
    const currentMonth = ref(
      today.toLocaleString("default", { month: "long" })
    );
    const dates = ref([]);
    const selectedDate = ref(null);

    const days = ["Seg", "Ter", "Qua", "Qui", "Sex", "Sáb", "Dom"];

    const generateDates = () => {
      const year = today.getFullYear();
      const month = today.getMonth();
      const daysInMonth = new Date(year, month + 1, 0).getDate();

      for (let i = 1; i <= daysInMonth; i++) {
        const date = new Date(year, month, i);
        dates.value.push({
          value: date.getTime(),
          date: i,
          isToday: date.toDateString() === today.toDateString(),
        });
      }
    };

    const dateClasses = (date) => {
      const classes = ["text-center"];
      if (date.isToday) {
        classes.push("bg-gradient-1-lighter text-white rounded");
      }
      if (date.value === selectedDate.value) {
        classes.push("bg-gray-100 rounded");
      }
      return classes.join(" ");
    };

    const selectDate = (date) => {
      selectedDate.value = date.value;
    };

    generateDates();

    return { currentMonth, days, dates, selectedDate, dateClasses, selectDate };
  },
};
</script>

