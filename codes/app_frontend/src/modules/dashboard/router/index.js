import routesHome from "../pages/Home/routes.home";
import routesPerfil from "../pages/Perfil/routes.perfil";
import routesDoctores from "../pages/Doctores/routes.doctores";
import routesPacientes from "../pages/Pacientes/routes.pacientes";
import routesApontamentos from "../pages/Apontamentos/routes.apontamentos";
import routesEstatisticas from "../pages/Estatisticas/routes.estatisticas";
import routesErrors from "../pages/Error/routes.errors";

export const routesDashboard = [
  ...routesHome,
  ...routesDoctores,
  ...routesPacientes,
  ...routesApontamentos,
  ...routesEstatisticas,
  ...routesPerfil,
  ...routesErrors,
]