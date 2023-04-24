package com.service;

import com.model.shoeWorld.Shoes;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.repository.query.Param;

public interface IShoesWorldService {
    Page<Shoes> getAllJordan(Pageable pageable);
    Page<Shoes> getAllDior(Pageable pageable);
    Page<Shoes> getAllSandal(Pageable pageable);
    Page<Shoes> getAllDep(Pageable pageable);
    Page<Shoes> getAllBoot(Pageable pageable);
    Page<Shoes> getAllShoes(Pageable pageable);


    Shoes getShoesByID( int idShoes);

    void deleteShoesById(@Param("idShoes") int idShoes);

    void updateShoes(String code, String nameProduct, String description, double price, String promotionalPrice, String image, String origin,int idCategory, int idSize, int idShoes);
}
