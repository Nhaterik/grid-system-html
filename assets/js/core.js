export default function html([first,...strings],...values) {
    return values.reduce(
        (acc,cur) =>acc.concat(cur,strings.shift()),[first]
    ).filter(x=>{return x && x!==true|| x==0}).join('')
}