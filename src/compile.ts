import { Error, Module } from "./types"
import { errors } from './error'
import { lex } from "./lex"
import { parse } from "./parse"
import { bind } from "./bind"
import { check } from "./check"
import { transform } from "./transform"
import { emit } from "./emit"

export function compile(s: string): [Module, Error[], string] {
    errors.clear()
    //经过词法解析和语法解析
    const tree = parse(lex(s))
    console.log(`tree`)
    console.log(tree)
    bind(tree)
    //判断类型
    check(tree)
    //将AST转成js
    const js = emit(transform(tree.statements))
    return [tree, Array.from(errors.values()), js]
}
