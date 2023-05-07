package com.service;

import com.model.order.Orders;
import org.springframework.data.repository.query.Param;

public interface IOrderService {

    Orders getOrderByIdAccount( Long idAccount);

    void addOrder(Long idAccount);
}
