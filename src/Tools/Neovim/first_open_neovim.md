# Neovim-01 入门

### 介绍

Neovim 是基于Vim开发的多模态文本编辑器。所谓多模态，就是在不同的模式下，按键的作用不一样。更多特性介绍以及和Vim的比较，请参考官网：https://neovim.io/

### 模式以及模式转换

Neovim有7种模式：普通模式、插入模式、

普通模式转到插入模式：a，i，o，O

插入模式转到普通模式：Esc

TODO：补充剩余模式以及模式转换流程图

```mermaid
stateDiagram-v2
	direction LR
	普通模式 --> 插入模式: 输入：a\i\o\O
	插入模式 --> 普通模式: 输入：Esc
```







