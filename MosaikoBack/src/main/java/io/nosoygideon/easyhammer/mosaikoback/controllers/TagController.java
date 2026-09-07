package io.nosoygideon.easyhammer.mosaikoback.controllers;

import io.nosoygideon.easyhammer.mosaikoback.models.Tag;
import io.nosoygideon.easyhammer.mosaikoback.services.TagService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/tag")
public class TagController {

    TagService tagService;
    public ResponseEntity<List<Tag>> getTags() {
        return ResponseEntity.ok(tagService.getAllTags());
    }
}
