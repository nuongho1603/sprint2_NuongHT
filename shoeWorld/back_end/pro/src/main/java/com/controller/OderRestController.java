package com.controller;

import com.dto.order.*;
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

    @PostMapping("/update-cart/{idAccount}")
    public ResponseEntity<?> updateCart(@PathVariable("idAccount") Long idAccount) {

        orderDetailService.updateCart(idAccount);
        return new ResponseEntity<>(HttpStatus.OK);

    }


    @PostMapping("/update-detail")
    public ResponseEntity<?> update(@RequestBody OrdersDetailAdd ordersDetailAdd) {
        orderDetailService.updateQuantity(ordersDetailAdd.getIdOrder(), ordersDetailAdd.getIdShoes(), ordersDetailAdd.getQuantity());
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @GetMapping("/total/{idUser}")
    public ResponseEntity<Total> getTotalByIdOrder(@PathVariable("idUser") Integer idUser) {
        Total total = orderDetailService.getTotal(idUser);
        return new ResponseEntity<>(total, HttpStatus.OK);
    }

    @GetMapping("/{idAccount}")
    public ResponseEntity<?> getOrderById(@PathVariable Long idAccount) {
        Orders orders = orderService.getOrderByIdAccount(idAccount);
        return new ResponseEntity<>(orders, HttpStatus.OK);
    }


    @GetMapping("/list-order-detail/{idAccount}")
    public ResponseEntity<?> getListOrderDetail(@PathVariable("idAccount") Long idAccount) {
        List<IODetailDto> orderDetailList = orderDetailService.getOdByIdAcc(idAccount);
        if (orderDetailList.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(orderDetailList, HttpStatus.OK);
    }

    @GetMapping("/total-pay/{idOrder}")
    public ResponseEntity<Total> getTotalPay(@PathVariable("idOrder") Integer idOrder) {
        Total total = orderDetailService.getTotalPay(idOrder);
        return new ResponseEntity<>(total, HttpStatus.OK);
    }


    @DeleteMapping("/delete")
    public ResponseEntity<?> removeOrderDetail(@RequestParam Integer idOrder, @RequestParam Integer idShoes) {
        orderDetailService.deleteOrderDetail(idOrder, idShoes);
        return new ResponseEntity<>(HttpStatus.OK);
    }

}
