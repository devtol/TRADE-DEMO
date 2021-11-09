import { ViewInAr, StorefrontOutlined } from "@mui/icons-material";

const icons = {
  trade: <StorefrontOutlined />,
  items: <ViewInAr />,
};

export const menuItems = [
  {
    id: 1,
    name: "Trades",
    to: "/trades",
    icon: icons.trade,
  },
  {
    id: 2,
    name: "Items",
    to: "/item2",
    icon: icons.items,
  },
];

const item = {};

const option = {};

export const tradeItem = {
  user: "devtol",
  cellItem: 1,
  needItem: [
    {
      itemId: 2,
      quantity: 1,
    },
  ],
};
