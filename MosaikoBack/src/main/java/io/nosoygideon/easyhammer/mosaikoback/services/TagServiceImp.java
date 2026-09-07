package io.nosoygideon.easyhammer.mosaikoback.services;

import io.nosoygideon.easyhammer.mosaikoback.models.Tag;
import io.nosoygideon.easyhammer.mosaikoback.repositories.TagRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TagServiceImp implements TagService {
    @Autowired
    TagRepository tagRepository;
    @Override
    public List<Tag> getAllTags() {
        return tagRepository.getAllTags();
    }
}
