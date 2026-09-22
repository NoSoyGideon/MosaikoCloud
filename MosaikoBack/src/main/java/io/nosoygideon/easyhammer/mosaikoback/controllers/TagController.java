package io.nosoygideon.easyhammer.mosaikoback.controllers;

import io.nosoygideon.easyhammer.mosaikoback.models.Color;
import io.nosoygideon.easyhammer.mosaikoback.models.Tag;
import io.nosoygideon.easyhammer.mosaikoback.services.TagService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/tag")
public class TagController {
    @Autowired
    TagService tagService;

    @GetMapping
    public ResponseEntity<List<Tag>> getTags(@RequestParam(required = false) Color color) {
        if (color == null ) {
            return ResponseEntity.ok(tagService.getAllTags());
        }else{
            return ResponseEntity.ok(tagService.findByColor(color));
        }

    }

    @GetMapping("/like")
    public ResponseEntity<List<Tag>> getTagsLike(@RequestBody Map<String , Object> body) {
        if(body.containsKey("like")) {
            return ResponseEntity.ok(tagService.findLikeName(body.get("like").toString()));
        }else {
            return ResponseEntity.badRequest().build();
        }

    }


    @GetMapping("/{id}")
    public ResponseEntity<Tag> getTagById(@PathVariable int id) {
        Tag tag = tagService.getByID(id);
        return ResponseEntity.ok(tag);

    }


}
