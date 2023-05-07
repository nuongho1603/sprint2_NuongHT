package com.service.impl;

import com.model.order.Orders;
import com.repository.IOrderRepository;
import com.service.IOrderService;
import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.stereotype.Service;

@Service
public class OrderService implements IOrderService {
    @Autowired
    private IOrderRepository iOrderRepository;


    @Override
    public Orders getOrderByIdAccount(Long idAccount) {
        return iOrderRepository.getOrderByIdAccount(idAccount);
    }

    @Override
    public void addOrder( Long idAccount) {
        iOrderRepository.addOrder( idAccount);
    }
}
