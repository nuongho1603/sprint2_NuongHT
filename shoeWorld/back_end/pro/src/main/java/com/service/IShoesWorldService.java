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
    Page<Shoes> getAllSneaker(Pageable pageable);
    Page<Shoes> getAllShoes(Pageable pageable);
    Page<Shoes> getAllSuc(Pageable pageable);
    Page<Shoes> getShoes(int idCategory,String nameSearch, Pageable pageable);

    Page<Shoes> getAllSearchJordan(String nameSearch,Pageable pageable);

    Shoes getShoesByID( int idShoes);

    void deleteShoesById( int idShoes);

    void updateShoes(String code, String nameProduct, String description, double price, String promotionalPrice, String image, String origin,int idCategory, int idSize, int idShoes);
}
