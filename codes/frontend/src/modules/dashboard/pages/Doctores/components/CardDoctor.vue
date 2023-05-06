<script>
import { useRouter } from "vue-router";
import { computed, reactive } from "vue";
import { authStore } from "@/store/authStore";
import { doctorStore } from "@/store/doctorStore";
import { swalConfirmMixin, swalGlobal } from "@/utils/swal";

export default {
  props: {
    doctor: {
      type: Object,
      required: true,
    },
  },
  setup() {
    const router = useRouter();
    const state = reactive({ doctor: null });
    const DoctorStore = doctorStore();
    const isAdmin = computed(() => authStore().getIsAdmin);

    function deleteDoctor(id) {
      swalGlobal
        .fire({
          title: "Eliminar Doctor!",
          text: "Não poderá reverter essa ação. Desejas continuar?",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#d33",
          cancelButtonColor: "#a3a3a3",
          confirmButtonText: "Sim, eliminar",
          cancelButtonText: "Cancelar",
        })
        .then(async (result) => {
          if (result.isConfirmed) {
            await DoctorStore.selectDoctorDelete(id);
            state.doctor = computed(() => DoctorStore.modalDelete.doctor);

            if (!!state.doctor.pacientes.length) {
              swalConfirmMixin.fire({
                icon: "error",
                title: "Oops...",
                text: `Não é possível eliminar este Doctor, pois ele possui pacientes sob sua tutela!`,
                confirmButtonText: "<i class='ph ph-arrow-left'></i>  Voltar",
              });
              return;
            }

            await DoctorStore.doctorDelete();

            swalConfirmMixin
              .fire({
                icon: "success",
                title: "Ação concluída!",
                text: "Doctor eliminado com sucesso.",
                confirmButtonText:
                  "<i class='ph ph-arrow-clockwise'></i> Recarregar",
              })
              .then((res) => {
                if (res.isConfirmed) {
                  router.go();
                }
              });
          }
        });
    }

    return { deleteDoctor, isAdmin };
  },
};
</script>

<template>
  <div
    class="w-[360px] h-auto flex flex-col min-w-0 bg-white rounded-xl overflow-hidden shadow-card"
  >
    <router-link :to="`/dashboard/doctores/${doctor.id}/info`">
      <img
        :src="`http://localhost:8000/storage/${doctor.imagem}`"
        class="w-full h-60 object-cover"
        alt="card image"
      />
    </router-link>
    <div class="p-6">
      <router-link
        :to="`/dashboard/doctores/${doctor.id}/info`"
        class="font-montserrat text-gray-800 text-lg text-primaria-claro"
      >
        {{ doctor.name }} {{ doctor.sobrenome }}
      </router-link>
      <div class="font-montserrat text-cinza-3 mb-4">
        {{ doctor.especialidade }}
      </div>
      <div class="">
        <div class="mb-6">
          <span class="font-montserrat text-gray-500 uppercase text-xs mb-4"
            >Informações de contacto</span
          >
          <div class="mt-2">
            <div class="flex items-center gap-2 mb-2">
              <div class="col-auto">
                <div class="w-4">
                  <i class="ph ph-phone" :class="`text-primary`"></i>
                </div>
              </div>
              <div class="text-cinza-2">{{ doctor.telefone }}</div>
            </div>

            <div class="flex items-center gap-2 mb-2">
              <div class="col-auto">
                <div class="w-4">
                  <i class="ph ph-envelope-simple" :class="`text-primary`"></i>
                </div>
              </div>
              <div class="text-cinza-2">{{ doctor.email }}</div>
            </div>

            <div class="flex items-center gap-2 mb-2">
              <div class="col-auto">
                <div class="w-4">
                  <i class="ph ph-map-pin" :class="`text-primary`"></i>
                </div>
              </div>
              <div class="text-cinza-2">
                {{ doctor.provincia }}, {{ doctor.municipio }},
                {{ doctor.bairro }}
              </div>
            </div>
          </div>
        </div>
        <div class="mt-4 flex flex-col items-center justify-center">
          <div v-if="isAdmin" class="w-full flex justify-center gap-3 mb-3">
            <router-link
              :to="`/dashboard/doctores/${doctor.id}/editar`"
              class="w-[40%] flex items-center justify-center gap-2 bg-white px-2 py-[6px] border border-gray-500 text-gray-600 rounded-lg hover:bg-gray-100"
            >
              Editar
              <i class="ph ph-note-pencil" :class="`text-lg`"></i>
            </router-link>

            <button
              @click="deleteDoctor(doctor.id)"
              class="w-[40%] flex items-center justify-center gap-2 rounded-lg border border-red-600 py-[6px] px-2 text-red-600 transition duration-300 hover:bg-red-600 hover:text-white"
            >
              Eliminar
              <i class="ph ph-trash" :class="`text-lg`"></i>
            </button>
          </div>

          <router-link
            :to="`/dashboard/doctores/${doctor.id}/info`"
            :class="`w-[calc(80%+16px)] flex items-center justify-center gap-2 border border-gradient-1-lighter text-gradient-1-lighter nunito rounded-lg py-[6px] transition duration-300 hover:bg-gradient-1-darker hover:text-white`"
          >
            Ver perfil
            <i class="ph ph-user" :class="`text-lg`"></i>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>