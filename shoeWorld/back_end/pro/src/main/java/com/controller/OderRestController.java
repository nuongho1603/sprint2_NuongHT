package com.controller;

import com.dto.order.OrderDetailDto;
import com.dto.order.OrdersDetailAdd;
import com.dto.order.OrdersDto;
import com.dto.order.TotalPay;
import com.model.order.Orders;
import com.service.impl.OrderDetailService;
import com.service.impl.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api-order")
@CrossOrigin("*")
public class OderRestController {
    @Autowired
    private OrderDetailService orderDetailService;

    @Autowired
    private OrderService orderService;


    @PostMapping("/add")
    public ResponseEntity<?> createOrder(@RequestBody OrdersDto ordersDto) {
        Orders orders = orderService.getOrderByIdAccount(ordersDto.getIdAccount());
        if (orders == null) {
            orderService.addOrder(ordersDto.getIdAccount());
        }
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @PostMapping("/add-order-detail")
    public ResponseEntity<?> addOrderDetail(@RequestBody OrdersDetailAdd ordersDetailAdd) {
        List<OrderDetailDto> list = orderDetailService.getOrderDetailByIdOrder(ordersDetailAdd.getIdOrder());
        for (OrderDetailDto o : list) {
            if (o.getIdShoes().equals(ordersDetailAdd.getIdShoes())) {
                orderDetailService.updateQuantity(ordersDetailAdd.getIdOrder(), ordersDetailAdd.getIdShoes(), ordersDetailAdd.getQuantity() + o.getQuantity());
                return new ResponseEntity<>(HttpStatus.OK);
            }
        }
        orderDetailService.addOrderDetail(ordersDetailAdd.getIdOrder(), ordersDetailAdd.getIdShoes(), ordersDetailAdd.getQuantity());
        return new ResponseEntity<>(HttpStatus.OK);
    }


    @GetMapping("/total/{idUser}")
    public ResponseEntity<TotalPay> getTotalByIdOrder(@PathVariable("idUser") Integer idUser) {
        TotalPay totalPay = orderDetailService.getTotal(idUser);
        return new ResponseEntity<>(totalPay, HttpStatus.OK);
    }

    @GetMapping("/{idAccount}")
    public ResponseEntity<?> getOrderById(@PathVariable Long idAccount) {
        Orders orders = orderService.getOrderByIdAccount(idAccount);
        return new ResponseEntity<>(orders, HttpStatus.OK);
    }


}
