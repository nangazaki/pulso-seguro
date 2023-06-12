<script>
import { reactive } from "vue";
import Monitor from "./Monitor.vue";
import { useRoute } from "vue-router";

export default {
  components: { Monitor },
  setup() {
    const route = useRoute();
    const state = reactive({ bpm: 0, temperatura: 0 });

    // const client = mqtt.connect("wss://io.adafruit.com", {
    //   username: import.meta.env.VITE_ARDAFRUIT_USER,
    //   password: import.meta.env.VITE_ARDAFRUIT_KEY,
    // });

    // client.on("connect", () => {
    //   client.subscribe(`ClaudioCanga/feeds/bpm${route.params.id}`);
    //   client.subscribe(`ClaudioCanga/feeds/temObjecto${route.params.id}`);
    //   console.log("Conectado!");
    // });

    // client.on("message", (topic, message) => {
    //   if (topic == `ClaudioCanga/feeds/bpm${route.params.id}`) {
    //     const dados = JSON.parse(message.toString());
    //     console.log(dados);
    //     state.bpm = dados;
    //   }
    // });

    // client.on("message", (topic, message) => {
    //   if (topic == `ClaudioCanga/feeds/temObjecto${route.params.id}`) {
    //     const dados = JSON.parse(message.toString());
    //     console.log(dados);
    //     state.temperatura = dados;
    //   }
    // });

    return { state };
  },
};
</script>

<template>
  <section class="w-full">
    <div class="mb-6">
      <h2 class="text-primary mb-3">Estado</h2>
      <div class="flex gap-6 flex-nowrap">
        <div class="w-[230px] h-full select-none px-1">
          <div
            :class="`shadow-card bg-white flex flex-col rounded-xl !border-b-4 ${
              state.temperatura >= 36 && state.temperatura <= 37.6
                ? 'border-gradient-1'
                : 'border-red-600'
            }`"
          >
            <div class="p-8 flex flex-col justify-between items-center">
              <div
                class="w-16 h-16 rounded-full flex justify-center items-center border border-gradient-1-lighter"
              >
                <i class="ph ph-thermometer-simple" :class="`text-lg`"></i>
              </div>
              <div class="text-center mb-0 h-16 flex items-center">
                Temperatura <br />
                Corporal
              </div>
              <div
                class="text-gradient-1-lighter font-montserrat text-2xl font-light"
              >
                {{ state.temperatura }}
              </div>
            </div>
          </div>
        </div>
        <div class="w-[230px] h-full select-none px-1 overflow-hidden">
          <div
            :class="`relative shadow-card bg-white flex flex-col rounded-xl !border-b-4 ${
              state.bpm >= 60 && state.bpm <= 100
                ? 'border-gradient-1'
                : 'border-red-600'
            }`"
          >
            <div class="p-8 flex flex-col justify-between items-center">
              <div
                class="w-16 h-16 rounded-full flex justify-center items-center border border-gradient-1-lighter"
              >
                <i class="ph ph-heart" :class="`text-lg`"></i>
              </div>
              <div class="text-center mb-0 h-16 flex items-center">
                Batimento <br />
                Cardíaco
              </div>
              <div
                class="text-gradient-1-lighter font-montserrat text-2xl font-light"
              >
                {{ state.bpm }}
              </div>
            </div>
          </div>
        </div>
        <div class="w-[230px] h-full select-none px-1">
          <div
            :class="`shadow-card bg-white flex flex-col rounded-xl !border-b-4 ${
              state.bpm >= 60 && state.bpm <= 100
                ? 'border-gradient-1'
                : 'border-red-600'
            }`"
          >
            <div class="p-8 flex flex-col justify-between items-center">
              <div
                class="w-16 h-16 rounded-full flex justify-center items-center border border-gradient-1-lighter"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="acorn-icons acorn-icons-blood text-graborder-gradient-1-lighter"
                >
                  <ellipse
                    cx="6.49996"
                    cy="5.99999"
                    rx="4.5"
                    ry="4"
                    transform="rotate(-30 6.49996 5.99999)"
                  ></ellipse>
                  <path
                    d="M7.799 5.25C8.07515 5.72829 7.7174 6.45181 6.99997 6.86603C6.28253 7.28024 5.47707 7.22829 5.20093 6.75"
                  ></path>
                  <ellipse
                    cx="13.3819"
                    cy="14.0284"
                    rx="4.5"
                    ry="4"
                    transform="rotate(15 13.3819 14.0284)"
                  ></ellipse>
                  <path
                    d="M14.8308 14.4166C14.6879 14.9501 13.9233 15.2087 13.1231 14.9943C12.3229 14.7799 11.7901 14.1736 11.933 13.6401"
                  ></path>
                </svg>
              </div>
              <div class="text-center mb-0 h-16 flex items-center">
                Pressão <br />
                Arterial
              </div>
              <div
                class="text-gradient-1-lighter font-montserrat text-2xl font-light"
              >
                115/74
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>