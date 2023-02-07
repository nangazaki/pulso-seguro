import { store as auth } from "@/modules/auth"
import { store as dashboard } from "@/modules/dashboard"
import { store as medicos } from "@/modules/dashboard/pages/Medicos"
import { store as pacientes } from "@/modules/dashboard/pages/Pacientes"

export default {
    auth, 
    dashboard,
    pacientes,
    medicos
}