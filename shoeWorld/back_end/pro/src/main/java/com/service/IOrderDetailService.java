package com.service;


import com.dto.order.IODetailDto;
import com.dto.order.OrderDetailDto;
import com.dto.order.Total;
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

    Total getTotal(Integer idUser);

    List<IODetailDto> getOdByIdAcc( Long idAccount);

    Total getTotalPay( Integer idOrder);

    void updateCart( Long idAccount);

    void deleteOrderDetail(Integer idOrder, Integer idShoes);
}
