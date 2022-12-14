<template>
  <nav
    class="
      sidebar-nav
      fixed
      top-0
      left-0
      h-full
      w-sidebar
      bg-sidebar-color
      py-3
      px-4
      shadow-xl
    "
  >
    <header>
      <div class="flex items-center justify-start mb-8">
        <span class="image-logo sidebar-open">
          <img src="@/assets/logo-inline-gradient.png" alt="" />
        </span>
        <span class="image-logo w-full sidebar-close"> </span>
        <div
          class="
            w-8
            h-8
            -right-4
            cursor-pointer
            bg-primary
            rounded-full
            absolute
            flex
            items-center
            justify-center
            text-white
          "
          @click="toggleSidebar"
        >
          >
        </div>
      </div>

      <div>
        <li
          class="h-12 mt-3 flex items-center bg-body rounded-lg overflow-hidden"
        >
          <fa
            :icon="['fas', 'search']"
            class="flex items-center justify-center text-xl min-w-icon"
          />
          <input
            type="text"
            placeholder="Pesquisar..."
            class="w-full h-full outline-none border-none bg-body pr-2"
          />
        </li>
        <div class="menu border-b-2 border-b-stone-200 pb-6">
          <ul class="menu-links">
            <li>
              <a
                href=""
                class="
                  h-12
                  mt-3
                  flex
                  items-center
                  rounded-lg
                  hover:bg-body hover:shadow-md"
              >
                <fa :icon="['fas', 'house']" 
                  class="flex items-center justify-center text-xl min-w-icon"
                />
                <span>Dashboard</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                class="
                  h-12
                  mt-3
                  flex
                  items-center
                  rounded-lg
                  hover:bg-body hover:shadow-md
                "
              >
                <fa
                  :icon="['fas', 'chart-column']"
                  class="flex items-center justify-center text-xl min-w-icon"
                />
                <span class="text nav-text">Revenue</span>
              </a>
            </li>

            <li>
              <a
                href="#"
                class="
                  h-12
                  mt-3
                  flex
                  items-center
                  rounded-lg
                  hover:bg-body hover:shadow-md
                "
                ><fa
                  :icon="['fas', 'bell']"
                  class="flex items-center justify-center text-xl min-w-icon"
                />
                <span class="text nav-text">Notifications</span>
              </a>
            </li>

            <li>
              <a
                href="#"
                class="
                  h-12
                  mt-3
                  flex
                  items-center
                  rounded-lg
                  hover:bg-body hover:shadow-md
                "
              >
                <fa
                  :icon="['fas', 'chart-alt']"
                  class="flex items-center justify-center text-xl min-w-icon"
                />
                <span class="text nav-text">Analytics</span>
              </a>
            </li>

            <li>
              <a
                href="#"
                class="
                  h-12
                  mt-3
                  flex
                  items-center
                  rounded-lg
                  hover:bg-body hover:shadow-md
                "
              >
                <fa
                  :icon="['fas', 'heart']"
                  class="flex items-center justify-center text-xl min-w-icon"
                />
                <span class="text nav-text">Likes</span>
              </a>
            </li>

            <li>
              <a
                href="#"
                class="
                  h-12
                  mt-3
                  flex
                  items-center
                  rounded-lg
                  hover:bg-body hover:shadow-md
                "
              >
                <fa
                  :icon="['fas', 'wallet']"
                  class="flex items-center justify-center text-xl min-w-icon"
                />
                <span class="text nav-text">Wallets</span>
              </a>
            </li>
          </ul>
        </div>

        <div class="bottom-content">
          <li class="list-none">
            <a href="#" class="h-12 mt-3 flex items-center">
              <i class="bx bx-log-out icon"></i>
              <span class="text nav-text">Logout</span>
            </a>
          </li>
        </div>
      </div>
    </header>
  </nav>
</template>

<script>
export default {
  methods: {
    toggleSidebar() {
      const sidebar = document.querySelector(".sidebar-nav");

      console.log(sidebar.classList.contains("close"));
      if (!sidebar.classList.contains("close")) {
        sidebar.classList.remove("w-sidebar");
        sidebar.classList.add("w-20", "close");
        sidebar.innerHTML += "<p>Olá</p>";
      } else if (sidebar.classList.contains("close")) {
        sidebar.classList.add("w-sidebar");
        sidebar.classList.remove("close");
        sidebar.classList.remove("w-10");
      }
      console.log(sidebar.classList.contains("close"));
    },
  },
};
</script>
