package io.nosoygideon.easyhammer.mosaikoback.controllers;

import io.nosoygideon.easyhammer.mosaikoback.components.WarmogComponent;
import jakarta.annotation.PostConstruct;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Collection;
import java.util.Collections;
import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/files")
public class FileController {
    @Autowired
    WarmogComponent warmog;


    @GetMapping
    public ResponseEntity<?> saludar(){
        return ResponseEntity.ok("ola");
    }

    @PostMapping("/folder/create")
    public ResponseEntity<?> createFolder(@RequestBody Map<String ,Object> request) {
        Map<Object, Object> response = new HashMap<>();


        if(warmog.createCarpeta(request.get("name").toString())){
            response.put("success", true);
            response.put("message", "Carpeta created");
            response.put("name", request.get("name"));
            return ResponseEntity.ok().body(response);

        }else {
            response.put("success", false);
            response.put("message", "Carpeta creation failed");
            response.put("name", request.get("name"));
            return ResponseEntity.badRequest().body(response);
        }
    }

}
