package com.repository;

import com.dto.order.IODetailDto;
import com.dto.order.OrderDetailDto;
import com.dto.order.PurchaseHistoryView;
import com.dto.order.Total;
import com.model.order.OrderDetail;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import javax.transaction.Transactional;
import java.util.List;

@Repository
@Transactional
public interface IOrderDetailRepository extends JpaRepository<OrderDetail, Integer> {

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

    @Query(value = "select SUM(o.quantity* p.price) as totalPay, SUM(o.quantity) as totalQuantity from `order_detail` o join `shoes` p on p.id_shoes = o.id_shoes where o.id_order=:idOrder", nativeQuery = true)
    Total getTotalPay(@Param("idOrder") Integer idOrder);

    @Query(value = "   select sum(od.quantity) as totalQuantity from order_detail od join orders o on od.id_order = o.id_order join account a on o.id_account = a.id_account where a.id_account = :idUser and o.payment_status = false and od.flag_delete = false group by o.id_order", nativeQuery = true)
    Total getTotal(@Param("idUser") Integer idUser);

    @Query(value = "select od.id_order_detail as idOrderDetail," +
            "s.id_shoes as idShoes," +
            "s.image as image," +
            "s.name_product as nameProduct," +
            "s.price as price," +
            "c.id_category as idCategory ," +
            "c.name_category as nameCategory," +
            "od.quantity as quantity from order_detail od " +
            "join orders o on o.id_order = od.id_order " +
            "join account a on a.id_account = o.id_account " +
            "join shoes s on od.id_shoes = s.id_shoes " +
            "join category c on s.id_category = c.id_category " +
            "where s.flag_delete = false and a.id_account = 2 " +
            "and od.flag_delete = false and o.payment_status = false", countQuery = "select od.id_order_detail as idOrderDetail,s.id_shoes as idShoes,s.image as image,s.name_product as nameProduct,s.price as price,c.id_category as idCategory ,c.name_category as nameCategory,od.quantity as quantity from order_detail od join orders o on o.id_order = od.id_order join account a on a.id_account = o.id_account join shoes s on od.id_shoes = s.id_shoes join category c on s.id_category = c.id_category where s.flag_delete = false and a.id_account = 2 and od.flag_delete = false and o.payment_status = false", nativeQuery = true)
    List<IODetailDto> getOdByIdAcc(@Param("idAccount") Long idAccount);

    @Modifying
    @Query(value = "update orders o " +
            "join order_detail od on o.id_order = od.id_order " +
            "join account a on o.id_account = a.id_account " +
            "set o.payment_status = true, od.flag_delete = true,o.date_order = current_timestamp()" +
            "where a.id_account = :idAccount and o.date_order is null",nativeQuery = true)
    void updateCart(@Param("idAccount") Long idAccount);

    @Modifying
    @Query(value = "delete from `order_detail` where id_order=:idOrder and id_shoes=:idShoes", nativeQuery = true)
    void deleteOrderDetail(@Param("idOrder") Integer idOrder, @Param("idShoes") Integer idShoes);


    @Query(value = "select p.name_product as nameProduct ," +
            "od.quantity, " +
            " o.date_order as dateOrder ," +
            "(od.quantity* p.price) as total, " +
            "a.address from `shoes` p " +
            "join `order_detail` od on p.id_shoes = od.id_shoes " +
            "join `orders` o on od.id_order = o.id_order " +
            "join `account` a on a.id_account = o.id_account " +
            "where payment_status = true and a.id_account= :idAccount order by od.id_order desc", nativeQuery = true)
    Page<PurchaseHistoryView> pagePurchase(@Param("idAccount") Long idAccount, Pageable pageable);


}
