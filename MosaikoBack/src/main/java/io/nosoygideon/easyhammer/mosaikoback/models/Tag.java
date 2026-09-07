package io.nosoygideon.easyhammer.mosaikoback.models;

public class Tag {
    private String name;
    private Color color;

    public Tag() {
    }
    public Tag(String name,Color color) {
        this.color = color;
        this.name = name;
    }
}
