<script>
import DefaultLayout from "@/layouts/DefaultLayout.vue";

export default {
  components: { DefaultLayout },
  setup() {},
};
</script>

<template>
  <DefaultLayout>
    <div class="container mx-auto mb-20">
      <div
        class="w-full h-[calc(100vh-200px)] py-8 flex items-center justify-center"
      >
        <div
          class="bg-white flex flex-col items-center justify-center px-20 py-16 rounded-lg shadow-card"
        >
          <p
            class="text-9xl font-montserrat font-semibold tracking-wider text-gray-500"
          >
            404
          </p>
          <p class="text-3xl font-montserrat tracking-wider text-cinza-3 mt-4">
            Página não encontrada
          </p>
          <p class="mt-4 pb-4 border-b text-center text-cinza-2">
            Desculpe, a página que estás a procurar não pode ser encontrada.
          </p>

          <router-link
            to="/dashboard"
            class="flex items-center space-x-2 bg-gradient-1-lighter hover:bg-gradient-1-darker text-white px-4 py-2 mt-6 rounded-lg transition duration-150"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                ard-shadow
                fill-rule="evenodd"
                d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
            <span>Voltar na Página inicial</span>
          </router-link>
        </div>
      </div>
    </div>
  </DefaultLayout>
</template>

