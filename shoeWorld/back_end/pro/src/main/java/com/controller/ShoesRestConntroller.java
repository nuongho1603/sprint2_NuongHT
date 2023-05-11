package com.controller;

import com.dto.ShoesDto;
import com.model.account.Account;
import com.model.shoeWorld.Category;
import com.model.shoeWorld.Shoes;
import com.service.impl.AccountService;
import com.service.impl.CategoryService;
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

import java.util.List;

@RestController
@RequestMapping("/api-shoes")
@CrossOrigin("*")
public class ShoesRestConntroller {
    @Autowired
    private ShoesService shoesService;
    @Autowired
    private AccountService accountService;
    @Autowired
    private CategoryService categoryService;

    @GetMapping("/s/{idCategory}")
    public ResponseEntity<Page<?>> getShoes(@PathVariable("idCategory") int idCategory, @RequestParam(defaultValue = "") String nameSearch,
                                            int totalElement) {
        Pageable pageable = Pageable.ofSize(totalElement);
        Page<Shoes> shoes = shoesService.getShoes(idCategory, nameSearch, pageable);
        if (shoes.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(shoes, HttpStatus.OK);
    }

    @GetMapping("/shoes-run")
    public ResponseEntity<Page<?>> getShoesBuyRun(int totalElement) {
        Pageable pageable = Pageable.ofSize(totalElement);
        Page<Shoes> shoes = shoesService.productRun(pageable);
        if (shoes.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(shoes, HttpStatus.OK);
    }

    @GetMapping("/category")
    public ResponseEntity<List<Category>> getCate() {
        List<Category> categories = categoryService.listCate();
        if (categories.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(categories, HttpStatus.OK);
    }

    @GetMapping("/all-shoes")
    public ResponseEntity<Page<Shoes>> getAllShoes(@PageableDefault(page = 0, size = 9) Pageable pageable) {
        Page<Shoes> shoesPage = shoesService.getAllShoes(pageable);
        if (shoesPage.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(shoesPage, HttpStatus.OK);
    }

    @GetMapping("/search")
    public ResponseEntity<Page<Shoes>> getListNewProduct(@RequestParam(defaultValue = "") String nameSearch,
                                                         @PageableDefault(size = 3) Pageable pageable) {
        Page<Shoes> jorPage;
        jorPage = shoesService.getAllSearchJordan(nameSearch, pageable);
        if (jorPage.isEmpty()) {
            return new ResponseEntity<>(jorPage, HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(jorPage, HttpStatus.OK);
    }

    @GetMapping("/name-user/{idAccount}")
    public ResponseEntity<Account> findNameUser(@PathVariable("idAccount") Long idAccount) {
        Account account = accountService.getNameUser(idAccount);
        if (account == null) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(account, HttpStatus.OK);
    }


    @GetMapping("/sneaker")
    public ResponseEntity<Page<Shoes>> getAllSneaker(@PageableDefault(page = 0, size = 4) Pageable pageable) {
        Page<Shoes> bootPage = shoesService.getAllSneaker(pageable);
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


    //    @GetMapping("/giay-suc")
//    public ResponseEntity<Page<Shoes>> getAllBoot(@PageableDefault(page = 0, size = 9) Pageable pageable) {
//        Page<Shoes> bootPage = shoesService.getAllSuc(pageable);
//        if (bootPage.isEmpty()) {
//            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
//        }
//        return new ResponseEntity<>(bootPage, HttpStatus.OK);
//    }


    //    @GetMapping("/jordan")
//    public ResponseEntity<Page<Shoes>> getAllJordan(int totalElement) {
//        Pageable pageable = Pageable.ofSize(totalElement);
//        Page<Shoes> jordanPage = shoesService.getAllJordan(pageable);
//        if (jordanPage.isEmpty()) {
//            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
//        }
//        return new ResponseEntity<>(jordanPage, HttpStatus.OK);
//    }
//
//    @GetMapping("/dior")
//    public ResponseEntity<Page<Shoes>> getAllDior(@PageableDefault(page = 0, size = 9) Pageable pageable) {
//        Page<Shoes> diorPage = shoesService.getAllDior(pageable);
//        if (diorPage.isEmpty()) {
//            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
//        }
//        return new ResponseEntity<>(diorPage, HttpStatus.OK);
//    }
//
//    @GetMapping("/sandal")
//    public ResponseEntity<Page<Shoes>> getAllSandal(@PageableDefault(page = 0, size = 9) Pageable pageable) {
//        Page<Shoes> sandalPage = shoesService.getAllSandal(pageable);
//        if (sandalPage.isEmpty()) {
//            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
//        }
//        return new ResponseEntity<>(sandalPage, HttpStatus.OK);
//    }
//
//    @GetMapping("/dep")
//    public ResponseEntity<Page<Shoes>> getAllDep(@PageableDefault(page = 0, size = 9) Pageable pageable) {
//        Page<Shoes> depPage = shoesService.getAllDep(pageable);
//        if (depPage.isEmpty()) {
//            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
//        }
//        return new ResponseEntity<>(depPage, HttpStatus.OK);
//    }
//

    //    @GetMapping("/s/{idCategory}")
//    public ResponseEntity<Page<?>> getShoes(@PathVariable("idCategory") int idCategory,@RequestParam(defaultValue = "") String nameSearch,
//                                            @PageableDefault(page = 0, size = 3) Pageable pageable) {
//        Page<Shoes> shoes = shoesService.getShoes(idCategory,nameSearch,pageable);
//        if (shoes.isEmpty()) {
//            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
//        }
//        return new ResponseEntity<>(shoes, HttpStatus.OK);
//    }

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
