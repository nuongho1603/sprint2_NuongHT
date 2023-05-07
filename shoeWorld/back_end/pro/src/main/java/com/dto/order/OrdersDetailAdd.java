package com.dto.order;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class OrdersDetailAdd {
    private Integer idOrder;
    private Integer idShoes;
    private Integer quantity;
    private String dateOrder;
}
