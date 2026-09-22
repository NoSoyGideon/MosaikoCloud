package io.nosoygideon.easyhammer.mosaikoback.repositories;

import io.nosoygideon.easyhammer.mosaikoback.models.Color;
import io.nosoygideon.easyhammer.mosaikoback.models.Tag;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface TagRepository extends CrudRepository<Tag, Integer> {
    List<Tag> findAll();

    List<Tag> findByColor(Color color);


    @Query(value = "select * from etiquetas where name like :name", nativeQuery = true)
    List<Tag> findLikeName(@Param("name") String name);
}
