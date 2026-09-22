package io.nosoygideon.easyhammer.mosaikoback.models;


import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Entity
@Table(name = "etiquetas")
@Getter
@Setter
public class Tag {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    private String name;

    @Enumerated(EnumType.STRING)
    private Color color;

    public Tag() {
    }
    public Tag(String name,Color color) {
        this.color = color;
        this.name = name;
    }
}
