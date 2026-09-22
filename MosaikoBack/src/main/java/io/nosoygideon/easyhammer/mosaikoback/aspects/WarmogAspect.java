package io.nosoygideon.easyhammer.mosaikoback.aspects;

import org.aspectj.lang.JoinPoint;
import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.Before;
import org.aspectj.lang.annotation.Pointcut;
import org.springframework.stereotype.Component;

import java.util.logging.Logger;

@Component
@Aspect
public class WarmogAspect {



    @Before("MainPointcut.warmogPoincut()")
    public void beforewarmog(JoinPoint joinPoint) {
        Logger logger = Logger.getLogger(WarmogAspect.class.getName());
        logger.info(joinPoint.getSignature().getName() + "QUE PASA CARNAL");
    }

}
