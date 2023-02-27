import { api } from '@/service'
import * as types from './mutation-types'

export const ActionSetDoctorsList = ({ commit }) => (
  api.get("/api/estatisticas/geral").then(res => {
    commit(types.SET_DOCTORS_LIST, res.data)
  })
)
