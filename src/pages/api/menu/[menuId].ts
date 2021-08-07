import { menu } from "../../../../data/menu";

export default function handler(req, res) {
  const { menuId } = req.query;
  const menuItem = menu.find((item) => item.id === parseInt(menuId));

  res.status(200).json(menuItem);
}
