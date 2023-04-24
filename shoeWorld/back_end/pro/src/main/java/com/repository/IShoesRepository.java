package com.repository;

import com.model.shoeWorld.Shoes;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import javax.transaction.Transactional;


@Repository
public interface IShoesRepository extends JpaRepository<Shoes,Integer> {

    @Query(value = "select s.* from  `shoes` s where s.id_category = 1 and s.flag_delete = false",nativeQuery = true)
    Page<Shoes> getAllJordan(Pageable pageable);

    @Query(value = "select s.* from  `shoes` s where s.id_category = 2 and s.flag_delete = false",nativeQuery = true)
    Page<Shoes> getAllDior(Pageable pageable);

    @Query(value = "select s.* from  `shoes` s where s.id_category = 4 and s.flag_delete = false",nativeQuery = true)
    Page<Shoes> getAllSandal(Pageable pageable);


    @Query(value = "select s.* from  `shoes` s where s.id_category = 5 and s.flag_delete = false",nativeQuery = true)
    Page<Shoes> getAllDep(Pageable pageable);

    @Query(value = "select s.* from  `shoes` s where s.id_category = 3 and s.flag_delete = false",nativeQuery = true)
    Page<Shoes> getAllBoot(Pageable pageable);

    @Query(value = "select s.* from  `shoes` s where s.flag_delete = false",nativeQuery = true)
    Page<Shoes> getAllShoes(Pageable pageable);

    @Query(value = "select * from shoes s where s.id_shoes = :idShoes and s.flag_delete = false",nativeQuery = true)
    Shoes getShoesByID(@Param("idShoes") int idShoes);

    @Transactional
    @Modifying
    @Query(value = "update shoes s set s.flag_delete = true where s.id_shoes = :idShoes",nativeQuery = true)
    void deleteShoesById(@Param("idShoes") int idShoes);

    @Transactional
    @Modifying
    @Query(value = "update shoes s join category c on s.id_category = c.id_category join size s2 on s.id_size = s2.id_size set s.code= :code,s.name_product = :nameProduct,s.description = :description,s.price = :price,s.promotional_price = :promotionalPrice,s.image = :image,s.flag_delete = 'false', s.origin = :origin,s.id_category = :idCategory,s.id_size = :idSize  where s.id_shoes = :idShoes",nativeQuery = true)
    void updateShoes(@Param("code") String code,@Param("nameProduct") String nameProduct,@Param("description") String description,@Param("price") double price,@Param("promotionalPrice") String promotionalPrice,@Param("image") String image,@Param("origin") String origin,@Param("idCategory") int idCategory,@Param("idSize") int idSize,@Param("idShoes") int idShoes);
}
