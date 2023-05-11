package com.dto.order;

public interface PurchaseHistoryView {
    String getNameProduct();
    Integer getQuantity();
    String getDateOrder();
    Double getTotal();
    Integer getPrice();
}
