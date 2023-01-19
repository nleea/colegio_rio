import { HomeIcon } from "@/components/sidebar/icons/Icons";

export const Menu = [
  {
    id: 1,
    name: "Main",
    path: "/",
    icon: HomeIcon,
  },
  {
    id: 2,
    name: "Main2",
    path: "/",
    icon: HomeIcon,
    children: [
      {
        id: 3,
        name: "Main",
        path: "/",
        icon: HomeIcon,
      },
      {
        id: 4,
        name: "Main",
        path: "/",
        icon: HomeIcon,
        children: [
          {
            id: 5,
            name: "Main",
            path: "/",
            icon: HomeIcon,
            children: [
              {
                id: 6,
                name: "Main",
                path: "/",
                icon: HomeIcon,
                children: [
                  {
                    id: 7,
                    name: "Main",
                    path: "/",
                    icon: HomeIcon,
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
];
