<script>
import { reactive } from "vue";

export default {
  setup() {
    const state = reactive({ img: "@/assets/teste.jpg" });

    return { state };
  },
};
</script>

<template>
  <div>
    <section class="relative w-full h-screen overflow-x-hidden">
      <div class="container py-6 mx-auto flex flex-col gap-[180px]">
        <div class="px-6">
          <img
            src="@/assets/logo-inline-gradient.png"
            alt="Logotipo"
            class="relative z-30 w-[250px]"
          />
        </div>
        <div class="px-6">
          <div class="relative z-30 max-w-[500px]">
            <h1
              class="font-montserrat text-4xl uppercase font-medium text-primary mb-6"
            >
              Monitoramento de Saúde Cardiovascular de Idosos
            </h1>
            <p class="text-lg text-neutral-700 mb-6">
              Proporcione paz de espírito aos familiares e uma saúde cardíaca
              monitorada de perto para os idosos em nosso lar com nosso sistema
              de monitoramento especializado.
            </p>

            <div class="flex gap-4">
              <router-link to="/login" class="p-4 bg-primary rounded-lg"
                >Acessar o Sistema</router-link
              >
              <a href="" class="p-4 border border-primary rounded-lg"
                >Saber mais</a
              >
            </div>
          </div>
          <div
            class="absolute -top-2 right-6 rounded-b-3xl w-[300px] h-[500px] md:w-[600px] md:h-[850px] border-2 border-gradient-1-lighter"
          ></div>
          <div
            class="absolute top-0 right-0 rounded-b-3xl w-[300px] h-[500px] md:w-[600px] md:h-[800px] flex items-center justify-center overflow-hidden"
          >
            <img src="/teste.jpg" class="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </section>
    <section class="h-[700px]">SOBRE</section>
    <section class="h-[700px]">CONTACTO</section>
    <section class="h-[700px]">FOOTER</section>
  </div>
</template>