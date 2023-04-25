package com.service.impl;

import com.model.shoeWorld.Shoes;
import com.repository.IShoesRepository;
import com.service.IShoesWorldService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

@Service
public class ShoesService implements IShoesWorldService {
    @Autowired
    private IShoesRepository iShoesRepository;

    @Override
    public Page<Shoes> getAllJordan(Pageable pageable) {
        return iShoesRepository.getAllJordan(pageable);
    }

    @Override
    public Page<Shoes> getAllDior(Pageable pageable) {
        return iShoesRepository.getAllDior(pageable);
    }

    @Override
    public Page<Shoes> getAllSandal(Pageable pageable) {
        return iShoesRepository.getAllSandal(pageable);
    }

    @Override
    public Page<Shoes> getAllDep(Pageable pageable) {
        return iShoesRepository.getAllDep(pageable);
    }

    @Override
    public Page<Shoes> getAllSneaker(Pageable pageable) {
        return iShoesRepository.getAllSneaker(pageable);
    }

    @Override
    public Page<Shoes> getAllShoes(Pageable pageable) {
        return iShoesRepository.getAllShoes(pageable);
    }

    @Override
    public Page<Shoes> getAllSuc(Pageable pageable) {
        return iShoesRepository.getAllSuc(pageable);
    }

    @Override
    public Shoes getShoesByID(int idShoes) {
        return iShoesRepository.getShoesByID(idShoes);
    }

    @Override
    public void deleteShoesById(int idShoes) {
        iShoesRepository.deleteShoesById(idShoes);
    }

    @Override
    public void updateShoes(String code, String nameProduct, String description, double price, String promotionalPrice, String image, String origin, int idCategory, int idSize, int idShoes) {
        iShoesRepository.updateShoes(code, nameProduct, description, price, promotionalPrice, image, origin, idCategory, idSize, idShoes);
    }
}
