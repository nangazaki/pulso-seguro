<script>
import { computed, onMounted } from "vue";

import Header from "@/components/Header.vue";
import Search from "@/components/Search.vue";
import CardDoctor from "../components/CardDoctor.vue";
import DefaultLayout from "@/layouts/DefaultLayout.vue";

import { authStore } from "@/store/authStore";
import { doctorStore } from "@/store/doctorStore";

export default {
  components: { CardDoctor, DefaultLayout, Header, Search },
  setup() {
    const DoctorStore = doctorStore();
    const doctores = computed(() => DoctorStore.doctores);
    const isAdmin = computed(() => authStore().getIsAdmin);

    onMounted(async () => {
      await DoctorStore.PegarDoctores();
    });

    function openModal() {
      DoctorStore.openModalPesquisar();
    }

    return { doctores, isAdmin, openModal };
  },
};
</script>

<template>
  <DefaultLayout>
    <div class="w-full 2xl:container 2xl:mx-auto mb-20">
      <Header page="Doctores" />
      <Search def="Doctor" />
      <div class="px-8 flex gap-8">
        <div
          :class="`w-full h-[40px] flex ${
            isAdmin ? 'justify-between' : 'justify-end'
          }`"
        >
          <router-link
            v-if="isAdmin"
            to="/dashboard/doctores/adicionar"
            class="bg-gradient-1-lighter px-4 py-2 flex items-center gap-2 rounded-lg text-white ease-linear hover:bg-gradient-1-darker"
          >
            <i class="ph-bold ph-plus"></i>
            <span>Adicionar Doctor</span>
          </router-link>

          <div class="flex gap-4">
            <div
              @click="openModal"
              class="bg-white flex justify-center items-center rounded-lg w-10 h-full cursor-pointer shadow-card hover:text-gradient-1-lighter"
            >
              <i class="ph ph-magnifying-glass"></i>
            </div>

            <a
              href="http://localhost:8000/api/dashboard/doctores/pdf"
              target="_blank"
              download
              class="py-2 px-4 bg-white flex gap-2 justify-center items-center rounded-lg cursor-pointer shadow-card hover:text-gradient-1-lighter"
            >
              Exportar PDF
              <i class="ph ph-download-simple"></i>
            </a>
          </div>
        </div>
      </div>
      <div class="p-8 mb-20">
        <div class="flex gap-5 flex-wrap">
          <CardDoctor
            v-for="doctor in doctores"
            :key="doctor.id"
            :doctor="doctor"
          />
        </div>
      </div>
    </div>
  </DefaultLayout>
</template>

