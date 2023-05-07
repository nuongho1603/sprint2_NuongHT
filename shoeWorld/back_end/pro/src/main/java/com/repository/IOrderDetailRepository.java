package com.repository;

import com.dto.order.OrderDetailDto;
import com.dto.order.TotalPay;
import com.model.order.OrderDetail;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import javax.transaction.Transactional;
import java.util.List;

@Repository
@Transactional
public interface IOrderDetailRepository extends JpaRepository<OrderDetail,Integer> {



    @Modifying
    @Query(value = "insert into `order_detail`(id_order, id_shoes, quantity,flag_delete) values(:idOrder, :idShoes, :quantity, false)", nativeQuery = true)
    void addOrderDetail(@Param("idOrder") Integer idOrder,
                        @Param("idShoes") Integer idShoes,
                        @Param("quantity") Integer quantity);


    @Query(value = "select `order_detail`.id_shoes as idShoes,p.name_product as nameProduct, p.price, order_detail.quantity, p.image from order_detail join shoes p on p.id_shoes = order_detail.id_shoes join `orders` o on o.id_order = order_detail.id_order where payment_status= false and o.id_order=:idOrder", nativeQuery = true)
    List<OrderDetailDto> getOrderDetailByIdOrder(@Param("idOrder") Integer idOrder);

    @Modifying
    @Query(value = "update `order_detail` set quantity =:quantity where id_order=:idOrder and id_shoes=:idShoes", nativeQuery = true)
    void updateQuantity(@Param("idOrder") Integer idOrder,
                        @Param("idShoes") Integer idShoes,
                        @Param("quantity") Integer quantity);

//    @Query(value = "select SUM(o.quantity* p.price) as totalPay, SUM(o.quantity) as totalQuantity from `order_detail` o join `shoes` p on p.id_shoes = o.id_shoes" + "where o.id_order=:idOrder", nativeQuery = true)
//    TotalPay getTotal(@Param("idOrder") Integer idOrder);

    @Query(value = "   select sum(od.quantity) as totalQuantity from order_detail od join orders o on od.id_order = o.id_order join account a on o.id_account = a.id_account where a.id_account = :idUser and o.payment_status = false and od.flag_delete = false group by o.id_order",nativeQuery = true)
  TotalPay getTotal(@Param("idUser") Integer idUser);

}
