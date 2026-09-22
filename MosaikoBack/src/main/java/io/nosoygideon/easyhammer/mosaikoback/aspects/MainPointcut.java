package io.nosoygideon.easyhammer.mosaikoback.aspects;

import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.Pointcut;
import org.springframework.stereotype.Component;

@Component
@Aspect
public class MainPointcut {
    @Pointcut("execution(* io.nosoygideon.easyhammer.mosaikoback.controllers.*.*(..))")
    public void warmogPoincut(){}

}
