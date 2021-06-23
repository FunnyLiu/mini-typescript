import { Token, Lexer } from './types'
const keywords = {
    "function": Token.Function,
    "var": Token.Var,
    "return": Token.Return,
}
//词法解析 ，其作用是将一行行的源码拆解成一个个token。所 谓 ，指的是语法上不可能再分的、最小的单个字符或字符串。
export function lex(s: string): Lexer {
    let pos = 0
    let text = ""
    //指定了一套内置Token
    let token = Token.BOF
    return {
        scan,
        token: () => token,
        pos: () => pos,
        text: () => text,
    }
    function scan() {
        scanForward(c => /[ \t\b\n]/.test(c))
        const start = pos
        if (pos === s.length) {
            token = Token.EOF
        }
        else if (/[0-9]/.test(s.charAt(pos))) {
            scanForward(c => /[0-9]/.test(c))
            text = s.slice(start, pos)
            token = Token.Literal
        }
        else if (/[_a-zA-Z]/.test(s.charAt(pos))) {
            scanForward(c => /[_a-zA-Z0-9]/.test(c))
            text = s.slice(start, pos)
            token = text in keywords ? keywords[text as keyof typeof keywords] : Token.Identifier
        }
        else {
            pos++
            switch (s.charAt(pos - 1)) {
                case '=': token = Token.Equals; break
                case ';': token = Token.Semicolon; break
                case ":": token = Token.Colon; break
                default: token = Token.Unknown; break
            }
        }
    }
    function scanForward(pred: (x: string) => boolean) {
        while (pos < s.length && pred(s.charAt(pos))) pos++
    }
}
export function lexAll(s: string) {
    const lexer = lex(s)
    let tokens = []
    let t
    while(true) {
        lexer.scan()
        t = lexer.token()
        switch (t) {
            case Token.EOF:
                return tokens
            case Token.Identifier:
            case Token.Literal:
                tokens.push({ token: t, text: lexer.text() })
                break
            default:
                tokens.push({ token: t })
                break
        }
    }
}
