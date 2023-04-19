package com.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class Shoes {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idFood;
    private String codePro;
    private String name;
    private int quantity;
    private double price;
    private String description;
    private String image;
    private String promotionalPrice;

    @ManyToOne
    private Category category;
    @ManyToOne
    private Size size;

    @ManyToOne
    private Origin origins;

    @Column(columnDefinition = "bit default 0")
    private boolean flagDelete=false;

}
