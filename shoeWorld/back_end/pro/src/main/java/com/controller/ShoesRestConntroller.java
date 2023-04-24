package com.controller;

import com.dto.ShoesDto;
import com.model.shoeWorld.Shoes;
import com.service.impl.ShoesService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api-shoes")
@CrossOrigin("*")
public class ShoesRestConntroller {
    @Autowired
    private ShoesService shoesService;

    @GetMapping("/all-shoes")
    public ResponseEntity<Page<Shoes>> getAllShoes(@PageableDefault(page = 0, size = 9) Pageable pageable) {
        Page<Shoes> shoesPage = shoesService.getAllJordan(pageable);
        if (shoesPage.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(shoesPage, HttpStatus.OK);
    }

    @GetMapping("/jordan")
    public ResponseEntity<Page<Shoes>> getAllJordan(@PageableDefault(page = 0, size = 3) Pageable pageable) {
        Page<Shoes> jordanPage = shoesService.getAllJordan(pageable);
        if (jordanPage.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(jordanPage, HttpStatus.OK);
    }

    @GetMapping("/dior")
    public ResponseEntity<Page<Shoes>> getAllDior(@PageableDefault(page = 0, size = 3) Pageable pageable) {
        Page<Shoes> diorPage = shoesService.getAllDior(pageable);
        if (diorPage.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(diorPage, HttpStatus.OK);
    }

    @GetMapping("/sandal")
    public ResponseEntity<Page<Shoes>> getAllSandal(@PageableDefault(page = 0, size = 3) Pageable pageable) {
        Page<Shoes> sandalPage = shoesService.getAllSandal(pageable);
        if (sandalPage.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(sandalPage, HttpStatus.OK);
    }

    @GetMapping("/dep")
    public ResponseEntity<Page<Shoes>> getAllDep(@PageableDefault(page = 0, size = 3) Pageable pageable) {
        Page<Shoes> depPage = shoesService.getAllDep(pageable);
        if (depPage.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(depPage, HttpStatus.OK);
    }

    @GetMapping("/boot")
    public ResponseEntity<Page<Shoes>> getAllBoot(@PageableDefault(page = 0, size = 3) Pageable pageable) {
        Page<Shoes> bootPage = shoesService.getAllBoot(pageable);
        if (bootPage.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(bootPage, HttpStatus.OK);
    }

    @GetMapping("/{idShoes}")
    public ResponseEntity<Shoes> findShoesById(@PathVariable("idShoes") int idShoes) {
        Shoes shoes = shoesService.getShoesByID(idShoes);
        if (shoes == null) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(shoes, HttpStatus.OK);
    }

    @DeleteMapping("/delete/{idShoes}")
    public ResponseEntity<Shoes> deleteStudent(@PathVariable("idShoes") int idShoes) {
        Shoes shoes = shoesService.getShoesByID(idShoes);
        if (shoes == null) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        shoesService.deleteShoesById(idShoes);
        return new ResponseEntity<>(shoes, HttpStatus.OK);
    }

    @PatchMapping("/update/{idShoes}")
    public ResponseEntity updateFoot(@PathVariable("idShoes") int idShoes, @Validated @RequestBody ShoesDto shoesDto, BindingResult bindingResult) {
        Shoes shoes = shoesService.getShoesByID(idShoes);
        if (shoes == null) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        shoesService.updateShoes(shoesDto.getCode(),
                shoes.getNameProduct(),
                shoesDto.getDescription(),
                shoesDto.getPrice(),
                shoesDto.getPromotionalPrice(),
                shoesDto.getImage(), shoesDto.getOrigin(),
                shoesDto.getCategory().getIdCategory(),
                shoesDto.getSize().getIdSize(),
                shoesDto.getIdShoes());
        return new ResponseEntity(HttpStatus.OK);
    }
}
