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

public class Origin {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long idOrigin;
    private String nameOrigin;

}
