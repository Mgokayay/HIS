// All components mapping with path for internal routes

import { lazy } from "react";

const Patient = lazy(() => import("../pages/protected/Patient"));
const Doctor = lazy(() => import("../pages/protected/Doctor"));
const Department = lazy(() => import("../pages/protected/Department"));
const Profile = lazy(() => import("../pages/protected/Profile"));

const routes = [
  {
    path: "/patient",
    component: Patient,
  },
  {
    path: "/doctor",
    component: Doctor,
  },
  {
    path: "/department",
    component: Department,
  },
  {
    path: "/profile",
    component: Profile,
  },
];

export default routes;
