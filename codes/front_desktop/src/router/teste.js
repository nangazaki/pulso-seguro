import api from "@/service";
import { config } from "@/modules/auth/storage.js";

console.log('teste')

async function main() {
  await api.get('me', config).then((res) => {
    console.log(res)
  }).catch((error) => {
    console.error(error)
  })
}

main()

