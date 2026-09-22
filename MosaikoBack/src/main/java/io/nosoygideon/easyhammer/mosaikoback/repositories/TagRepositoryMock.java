package io.nosoygideon.easyhammer.mosaikoback.repositories;

import io.nosoygideon.easyhammer.mosaikoback.models.Color;
import io.nosoygideon.easyhammer.mosaikoback.models.Tag;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.context.annotation.Profile;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.List;


public class TagRepositoryMock{

    List<Tag> tags;
    TagRepositoryMock() {
        tags = new ArrayList<>();
        tags.add(new Tag("Arte", Color.ROJO));
        tags.add(new Tag("Programacion", Color.VERDE));
    }


}
