import React from "react";
import { Modal, Button } from "antd";
import { MinusOutlined, PlusOutlined, DeleteOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import { addItem, removeItem } from "../features/cart/cartSlice";

interface CartModalProps {
  open: boolean;
  onClose: () => void;
}

const CartModal: React.FC<CartModalProps> = ({ open, onClose }) => {
  const dispatch = useDispatch();
  const items = useSelector((state: RootState) => state.cart.items);

  const totalPrice = items.reduce(
    (acc, item) => acc + parseFloat(item.price) * item.quantity,
    0
  );

  const handleRemoveItem = (id: number) => {
    dispatch(removeItem(id));
  };

  return (
    <Modal
      title="Корзина"
      open={open}
      onCancel={onClose}
      footer={null}
      width="90%"
      className="custom-cart-modal max-w-7xl"
      centered
    >
      <div className="flex flex-col gap-6 mt-6">
        <table className="table-fixed  w-full">
          <colgroup>
            <col
              span={1}
              style={{ width: "70%" }}
            />
            <col
              span={1}
              style={{ width: "20%" }}
            />
            <col
              span={1}
              style={{ width: "10%" }}
            />
          </colgroup>
          <tbody>
            {items.length === 0 && (
              <tr>
                <td
                  colSpan={4}
                  className="text-center"
                >
                  Корзина пуста
                </td>
              </tr>
            )}
            {items.map((item) => (
              <tr
                key={item.id}
                className="border-b"
              >
                <td className="flex space-x-4 items-center">
                  <img
                    src={item.image_link}
                    alt={item.name}
                    className="w-24 h-24 object-cover my-4"
                  />
                  <div>
                    <h2 className="text-lg font-semibold">{item.name}</h2>
                    <p className="text-gray-500 text-sm">
                      {item?.color?.colour_name}
                    </p>
                    <p className="text-gray-500 text-sm">
                      {item?.price_sign || "$"}
                      {item?.price} {item?.currency || "USD"}
                    </p>
                  </div>
                </td>
                <td className="space-x-2">
                  <Button
                    icon={<MinusOutlined />}
                    onClick={() => dispatch(addItem({ ...item, quantity: -1 }))}
                    className="border rounded px-2 py-1 text-sm"
                  />
                  <span className="text-base">{item.quantity}</span>
                  <Button
                    icon={<PlusOutlined />}
                    onClick={() => dispatch(addItem({ ...item, quantity: 1 }))}
                    className="border rounded px-2 py-1 text-sm"
                  />
                </td>
                <td className="text-lg font-semibold">
                  {item.price_sign || "$"}
                  {(
                    parseFloat(item.price) * item.quantity
                  ).toLocaleString()}{" "}
                  {item.currency || "USD"}
                </td>
                <td className="w-12">
                  <Button
                    icon={<DeleteOutlined />}
                    onClick={() => handleRemoveItem(item.id)}
                    className="border-none text-gray-500 hover:text-red-500"
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="flex flex-col gap-2 justify-center items-end">
          <div className="flex justify-between text-lg gap-6">
            <span>Сумма заказа</span>
            <span>
              {items[0]?.price_sign || "$"}
              {totalPrice.toLocaleString()} {items[0]?.currency || "USD"}
            </span>
          </div>
          <div className="flex justify-between text-xl font-semibold gap-6">
            <span>Общая сумма</span>
            <span>
              {items[0]?.price_sign || "$"}
              {totalPrice.toLocaleString()} {items[0]?.currency || "USD"}
            </span>
          </div>
          <button className="bg-black text-white py-4 px-10 mt-4">
            Оформить заказ
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default CartModal;
