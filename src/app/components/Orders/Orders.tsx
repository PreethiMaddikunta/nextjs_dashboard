import React from "react";
import css from "./Orders.module.css";
import { groupNumber, ordersData } from "@/app/data";
import OrdersPieChart from "../OrdersPieChart/OrdersPieChart";

function Orders() {
  return (
    <div className={`${css.container} theme-container`}>
      <div className={css.head}>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWY5rn8FaJp50KSQFUtXw78YtBXCnlstLxWw&usqp=CAU"
          alt="logo"
          className={css.logo}
        />
        <span>Orders today</span>
      </div>
      <div className={`grey-container ${css.stat}`}>
        <span>Amount</span>
        <span>$ {groupNumber(4560)}</span>
      </div>

      <div className={css.orders}>
        {ordersData.map((order,index) => (
            <div key={index} className={css.order}>
                <div>
                    <span>{order.name}</span>
                    <span>{order.change}</span>
                </div>
                <div>
                    <span>{order.type}</span>
                    <span>Items: {order.items}</span>
                </div>
            </div>
        ))}
      </div>

      <div className={css.orderChart}>
                <span>Split by orders</span>
                <OrdersPieChart/>
            </div>
    </div>
  );
}

export default Orders;
