export default function appendArgs(args, maxLength){
    return Array.from(args).reduce((result, arg, i) => {
        return (i < maxLength) ? result + " " + arg : result
    })
}