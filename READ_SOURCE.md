
# 源码分析

## 文件结构

``` bash
/Users/liufang/openSource/FunnyLiu/mini-typescript
├── LICENSE
├── README.md
├── baselines
|  └── reference
|     ├── basicLex.lex.baseline
|     ├── firstLex.lex.baseline
|     ├── newlineLex.lex.baseline
|     ├── redeclare.errors.baseline
|     ├── redeclare.js.baseline
|     ├── redeclare.tree.baseline
|     ├── semicolonLex.lex.baseline
|     ├── singleIdentifier.errors.baseline
|     ├── singleIdentifier.js.baseline
|     ├── singleIdentifier.tree.baseline
|     ├── singleTypedVar.errors.baseline
|     ├── singleTypedVar.js.baseline
|     ├── singleTypedVar.tree.baseline
|     ├── singleVar.errors.baseline
|     ├── singleVar.js.baseline
|     ├── singleVar.tree.baseline
|     ├── twoStatements.errors.baseline
|     ├── twoStatements.js.baseline
|     ├── twoStatements.tree.baseline
|     ├── twoTypedStatements.errors.baseline
|     ├── twoTypedStatements.js.baseline
|     ├── twoTypedStatements.tree.baseline
|     ├── underscoreLex.lex.baseline
|     └── varLex.lex.baseline
├── package-lock.json
├── package.json
├── src
|  ├── bind.ts
|  ├── check.ts
|  ├── compile.ts
|  ├── emit.ts
|  ├── error.ts
|  ├── index.ts
|  ├── lex.ts
|  ├── parse.ts
|  ├── test.ts
|  ├── transform.ts
|  └── types.ts
├── tests
|  ├── redeclare.ts
|  ├── singleIdentifier.ts
|  ├── singleTypedVar.ts
|  ├── singleVar.ts
|  ├── twoStatements.ts
|  └── twoTypedStatements.ts
└── tsconfig.json

directory: 4 file: 46

ignored

```

## 外部模块依赖

![img](./outer.svg)

## 内部模块依赖

![img](./inner.svg)
  