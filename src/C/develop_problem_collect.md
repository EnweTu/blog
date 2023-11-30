# C 语言开发问题汇总



### vscode 远程开发时未定义 __USE_MISC 宏问题

找到vscode设置 -》工作区 -〉扩展 -》c/c++ -〉IntelliSense -》

在 `C_Cpp>Default:Compiler Args`设置项添加 `-D _DEFAULT_SOURCE`

解释：`__USE_MISC`宏在`/usr/include/features.h`文件中定义，源代码如下：

```c
#if defined _DEFAULT_SOURCE
# define __USE_MISC	1
#endif
```

