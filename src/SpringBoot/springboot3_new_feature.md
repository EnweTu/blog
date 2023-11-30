# Spring Boot 3 新特性

## HttpExchange 声明式客户端

## Java Record
在 Java 中，Record 是一种特殊类型的 Java 类。可用来创建不可变类，语法简短。任何时候创建 Java 类，都会创建大量的样板代码，我们可能做如下：
- 每个字段的 set，get 方法
- 公共的构造方法
- 重写 hashCode, toString(), equals()方法

Java Record 避免上述的样板代码，如下特点：
- 带有全部参数的构造方法
- public 访问器
- toString(),hashCode(),equals()
- 无 set，get 方法。没有遵循 Bean 的命名规范
- final 类，不能继承 Record，Record 为隐士的 final 类。除此之外与普通类一样
- 不可变类，通过构造创建 Record
- final 属性，不可修改
- 不能声明实例属性，能声明 static 成员
