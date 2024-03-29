import {
  AdminPanel,
  UserIcon,
  RolesIcon,
  SchoolIcon,
  WizardIcon,
  ListAlt,
  BoyIcon,
  CastForEducation,
} from "@/components/sidebar/icons/Icons";

export interface Imenu {
  id: number;
  name: string;
  path: string;
  icon: any;
  children?: Array<any>;
}

export const iconsMenu: any = {
  AdminPanel: AdminPanel,
  UserIcon: UserIcon,
  RolesIcon: RolesIcon,
  SchoolIcon: SchoolIcon,
  WizardIcon: WizardIcon,
  BoyIcon: BoyIcon,
  CastForEducation: CastForEducation,
  ListAlt
};
