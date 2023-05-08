package com.service.impl;

import com.dto.order.IODetailDto;
import com.dto.order.OrderDetailDto;
import com.dto.order.Total;
import com.repository.IOrderDetailRepository;
import com.service.IOrderDetailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class OrderDetailService implements IOrderDetailService {
    @Autowired
    private IOrderDetailRepository iOrderDetailRepository;

    @Override
    public List<OrderDetailDto> getOrderDetailByIdOrder(Integer idOrder) {
        return iOrderDetailRepository.getOrderDetailByIdOrder(idOrder);
    }

    @Override
    public void addOrderDetail(Integer idOrder, Integer idShoes, Integer quantity) {
        iOrderDetailRepository.addOrderDetail(idOrder, idShoes, quantity);
    }

    @Override
    public void updateQuantity(Integer idOrder, Integer idShoes, Integer quantity) {
        iOrderDetailRepository.updateQuantity(idOrder, idShoes, quantity);
    }

    @Override
    public Total getTotal(Integer idUser) {
        return iOrderDetailRepository.getTotal(idUser);
    }

    @Override
    public List<IODetailDto> getOdByIdAcc(Long idAccount) {
        return iOrderDetailRepository.getOdByIdAcc(idAccount);
    }

    @Override
    public Total getTotalPay(Integer idOrder) {
        return iOrderDetailRepository.getTotalPay(idOrder);
    }

    @Override
    public void updateCart(Long idAccount) {
        iOrderDetailRepository.updateCart(idAccount);
    }

    @Override
    public void deleteOrderDetail(Integer idOrder, Integer idShoes) {
        iOrderDetailRepository.deleteOrderDetail(idOrder, idShoes);
    }
}
