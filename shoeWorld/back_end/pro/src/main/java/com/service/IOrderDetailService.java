package com.service;


import com.dto.order.OrderDetailDto;
import com.dto.order.TotalPay;
import org.springframework.data.repository.query.Param;


import java.util.List;

public interface IOrderDetailService {

    List<OrderDetailDto> getOrderDetailByIdOrder(Integer idOrder);

    void addOrderDetail( Integer idOrder,
                         Integer idShoes,
                         Integer quantity);

    void updateQuantity( Integer idOrder,
                        Integer idShoes,
                        Integer quantity);

    TotalPay getTotal( Integer idUser);
}
