package com.model.shoeWorld;

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
public class Shoes {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_shoes")
    private Integer idShoes;
    private String code;
    private String nameProduct;
    @Column(columnDefinition = "LONGTEXT")
    private String description;
    private double price;
    private String promotionalPrice;
    @Column(columnDefinition = "LONGTEXT")
    private String image;
    private Boolean flagDelete;
    private String origin;

    @ManyToOne()
    @JoinColumn(name = "id_category", nullable = false, referencedColumnName = "id_category")
    private Category category;

    @ManyToOne()
    @JoinColumn(name = "id_size", nullable = false, referencedColumnName = "id_size")
    private Size size;
}
