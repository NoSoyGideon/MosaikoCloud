package io.nosoygideon.easyhammer.mosaikoback.models;


import jakarta.persistence.*;

@Entity
@Table(name="Items")
public class Item {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    long id;


}
