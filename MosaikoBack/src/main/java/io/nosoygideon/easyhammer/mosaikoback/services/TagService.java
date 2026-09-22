package io.nosoygideon.easyhammer.mosaikoback.services;

import io.nosoygideon.easyhammer.mosaikoback.models.Color;
import io.nosoygideon.easyhammer.mosaikoback.models.Tag;

import java.util.List;

public interface TagService {
    public List<Tag> getAllTags();
    public Tag getByID(Integer id);
    public List<Tag> findByColor(Color color);

    public List<Tag> findLikeName(String name);
}
