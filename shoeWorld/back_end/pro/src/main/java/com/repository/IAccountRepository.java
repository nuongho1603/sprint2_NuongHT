package com.repository;

import com.model.account.Account;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface IAccountRepository extends JpaRepository<Account,Long> {

    @Query(value = "select * from account where id_account = :idAccount",nativeQuery = true)
    Account getNameUser(@Param("idAccount") Long idAccount);
}
