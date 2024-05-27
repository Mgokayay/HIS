// All components mapping with path for internal routes

import { lazy } from "react";

const Leads = lazy(() => import("../pages/protected/Leads"));
const ProfileSettings = lazy(() =>
  import("../pages/protected/ProfileSettings")
);

const routes = [
  {
    path: "/leads",
    component: Leads,
  },
  {
    path: "/settings-profile",
    component: ProfileSettings,
  },
];

export default routes;
