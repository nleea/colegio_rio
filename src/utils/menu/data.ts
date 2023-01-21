import {
  AdminPanel,
  UserIcon,
  RolesIcon,
  SchoolIcon,
  WizardIcon,
  HistoryEduIcon,
} from "@/components/sidebar/icons/Icons";

interface Imenu {
  id: number;
  name: string;
  path: string;
  icon: any;
  children?: Array<any>;
}

export const Menu: Imenu[] = [
  {
    id: 1,
    name: "administracion",
    path: "administracion",
    icon: AdminPanel,
    children: [
      {
        id: 2,
        name: "colegio",
        path: "colegio",
        icon: SchoolIcon,
      },
      {
        id: 3,
        name: "roles",
        path: "roles",
        icon: RolesIcon,
      },
      {
        id: 4,
        name: "modulos",
        path: "modulos",
        icon: WizardIcon,
      },
      {
        id: 5,
        name: "usurios",
        path: "usuarios",
        icon: UserIcon,
      },
    ],
  },
  {
    id: 6,
    name: "Academico",
    path: "academico",
    icon: HistoryEduIcon,
  },
];
