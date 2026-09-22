package io.nosoygideon.easyhammer.mosaikoback.components;

import io.minio.BucketExistsArgs;
import io.minio.MakeBucketArgs;
import io.minio.MinioClient;
import io.minio.PutObjectArgs;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

import java.io.ByteArrayInputStream;
import java.util.logging.Level;
import java.util.logging.Logger;

@Component
public class WarmogComponent {
    MinioClient minioClient;
    private final String MAIN_BUCKET = "usuarios";
    @Value("${config.production}")
    private boolean production;


    public WarmogComponent() {
        this.minioClient = MinioClient.builder().endpoint("http://localhost:9000").credentials("Mosaiko","easyHammer").build();
        try {
            if(!this.minioClient.bucketExists(BucketExistsArgs.builder().bucket(MAIN_BUCKET).build())) {
                this.minioClient.makeBucket(
                        MakeBucketArgs
                                .builder()
                                .bucket(MAIN_BUCKET)
                                .build());
            }
        }catch (Exception e){
            if(!this.production) {

                this.minioClient = null;
            }else{
                e.printStackTrace();
            }
        }


    }

    public boolean createCarpeta(String nombre){
        byte[] emptyData = new byte[0];
        try {
            minioClient.putObject(PutObjectArgs.builder().bucket(MAIN_BUCKET).object("/"+nombre+"/").stream(new ByteArrayInputStream(emptyData), 0, -5).build());
            return true;
        }catch (Exception e){
            Logger logger = Logger.getLogger(WarmogComponent.class.getName());
            logger.log(Level.WARNING, "Error al crear el archivo de carpeta "+nombre, e);
            return false;
        }
        }




}
