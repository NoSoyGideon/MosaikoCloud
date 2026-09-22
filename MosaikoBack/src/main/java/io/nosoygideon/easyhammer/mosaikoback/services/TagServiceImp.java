package io.nosoygideon.easyhammer.mosaikoback.services;

import io.nosoygideon.easyhammer.mosaikoback.models.Color;
import io.nosoygideon.easyhammer.mosaikoback.models.Tag;
import io.nosoygideon.easyhammer.mosaikoback.repositories.TagRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class TagServiceImp implements TagService {
    @Autowired
    TagRepository tagRepository;
    @Override
    public List<Tag> getAllTags() {
        return tagRepository.findAll();
    }



    @Override
    public Tag getByID(Integer id) {
        Tag tag = null;
        Optional<Tag> optional = tagRepository.findById(id);
      //  optional.ifPresent(t -> {t.setName("Mira mami cambie"); tagRepository.save(t);} );


        if (optional.isPresent()) {
            return  optional.get();
        }else{
            return null;
        }

    }

    @Override
    public List<Tag> findByColor(Color color) {
        return tagRepository.findByColor(color);
    }

    @Override
    public List<Tag> findLikeName(String name) {
        return tagRepository.findLikeName(name);
    }
}
