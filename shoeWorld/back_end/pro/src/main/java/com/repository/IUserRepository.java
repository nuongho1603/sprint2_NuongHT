package com.repository;

import com.model.account.Account;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import javax.transaction.Transactional;
import java.util.Optional;
@Repository
@Transactional
public interface IUserRepository extends JpaRepository<Account,Long> {
    @Query(value = "select * from `account` where username = :username", nativeQuery = true)
    Optional<Account> findByUsername(@Param("username") String username);

    @Query(value = "select * from `account` where username = :username",nativeQuery = true)
    Account userLogin(@Param("username") String username);

    @Query(value = "select * from `account` where id_account=:id",nativeQuery = true)
    Account getUserById(@Param("id") Long id);
}
