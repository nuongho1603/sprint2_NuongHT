package com.repository;

import com.model.shoeWorld.Category;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ICategoryRepository extends JpaRepository<Category,Integer> {

    @Query(value = "select c.* from `category` c ",nativeQuery = true)
  List<Category> listCate();
}
