package com.model.order;

import com.fasterxml.jackson.annotation.JsonManagedReference;
import com.model.account.Account;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.Set;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Orders {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_order")
    private Integer idOrder;
    private String codeOrder;
    private String dateOrder;
    private Boolean paymentStatus;
    @Column(columnDefinition = "bit default false")
    private Boolean flagDelete;

    @ManyToOne()
    @JsonManagedReference
    @JoinColumn(name = "id_account", referencedColumnName = "id_account")
    private Account account;

}
