package com.repository;

import com.model.order.Orders;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import javax.transaction.Transactional;

@Repository
@Transactional
public interface IOrderRepository extends JpaRepository<Orders,Integer> {

    @Query(value = "select * from `orders` o join `account` a on o.id_account = a.id_account where o.payment_status = false and a.id_account= :idAccount limit 1", nativeQuery = true)
    Orders getOrderByIdAccount(@Param("idAccount") Long idAccount);



    @Modifying
    @Query(value = "insert into `orders`(payment_status,flag_delete,id_account) values( false,false,:idAccount)",nativeQuery = true)
    void addOrder(@Param("idAccount") Long idAccount);

}
