package io.nosoygideon.easyhammer.mosaikoback.repositories;

import io.nosoygideon.easyhammer.mosaikoback.models.Color;
import io.nosoygideon.easyhammer.mosaikoback.models.Tag;
import org.springframework.context.annotation.Profile;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.List;

@Repository
public class TagRepositoryMock implements TagRepository {

    List<Tag> tags;
    TagRepositoryMock() {
        tags = new ArrayList<>();
        tags.add(new Tag("Arte", Color.ROJO));
        tags.add(new Tag("Programacion", Color.VERDE));
    }

    @Override
    public List<Tag> getAllTags() {
        return tags;
    }
}
