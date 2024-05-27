import ArrowRightOnRectangleIcon from "@heroicons/react/24/outline/ArrowRightOnRectangleIcon";
import UserIcon from "@heroicons/react/24/outline/UserIcon";
import InboxArrowDownIcon from "@heroicons/react/24/outline/InboxArrowDownIcon";
import DocumentDuplicateIcon from "@heroicons/react/24/outline/DocumentDuplicateIcon";

const iconClasses = `h-6 w-6`;
const submenuIconClasses = `h-5 w-5`;

const routes = [
  {
    path: "/app/patient", // url
    icon: <InboxArrowDownIcon className={iconClasses} />, // icon component
    name: "Patient", // name that appear in Sidebar
  },
  {
    path: "/app/doctor", // url
    icon: <InboxArrowDownIcon className={iconClasses} />, // icon component
    name: "Doctor", // name that appear in Sidebar
  },
  {
    path: "/app/department", // url
    icon: <InboxArrowDownIcon className={iconClasses} />, // icon component
    name: "Department", // name that appear in Sidebar
  },

  {
    path: "/app/profile", //url
    icon: <UserIcon className={submenuIconClasses} />, // icon component
    name: "Profile", // name that appear in Sidebar
  },
];

export default routes;
