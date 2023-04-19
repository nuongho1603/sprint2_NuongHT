package com.model.order;

import com.model.shoeWorld.Shoes;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class OrderDetail {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_order_detail")
    private Integer idOrderDetail;

    @ManyToOne
    @JoinColumn(name = "id_order", referencedColumnName = "id_order")
    private Orders orders;

    @ManyToOne
    @JoinColumn(name = "id_shoes", nullable = false, referencedColumnName = "id_shoes")
    private Shoes shoes;

    private Integer quantity;
    private boolean flagDelete;
}
