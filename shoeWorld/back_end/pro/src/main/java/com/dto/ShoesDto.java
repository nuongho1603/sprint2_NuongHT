package com.dto;

import com.model.shoeWorld.Category;
import com.model.shoeWorld.Size;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class ShoesDto {
    private Integer idShoes;
    private String code;
    private String nameProduct;
    private String description;
    private double price;
    private String promotionalPrice;
    private String image;
    private Boolean flagDelete;
    private String origin;

    private Category category;

    private Size size;
}
