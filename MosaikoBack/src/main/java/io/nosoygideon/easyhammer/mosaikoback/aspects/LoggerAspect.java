package io.nosoygideon.easyhammer.mosaikoback.aspects;

import jakarta.annotation.PostConstruct;
import org.aspectj.lang.ProceedingJoinPoint;
import org.aspectj.lang.annotation.Around;
import org.aspectj.lang.annotation.Aspect;
import org.springframework.stereotype.Component;

import java.util.logging.Level;
import java.util.logging.Logger;

@Component
@Aspect
public class LoggerAspect {

    Logger logger;

    @PostConstruct
    public void init() {
        this.logger = Logger.getLogger(LoggerAspect.class.getName());
    }

    @Around("execution(* io.nosoygideon.easyhammer.mosaikoback.components.*.*(..))")
    public Object around(ProceedingJoinPoint joinPoint) throws Throwable
    {



        String name  = joinPoint.getSignature().getName();
        logger.info("Se esta ejecutando la funcion: " + name);
        try {
            Object result = joinPoint.proceed();
            return result;
        }catch (Throwable e){
            logger.info("Error al ejecutar la funcion: " + name);
            return null;
        }

    }
}
