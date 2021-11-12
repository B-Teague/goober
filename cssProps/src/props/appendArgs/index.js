export default function appendArgs(args){
    return Array.from(args).reduce((result, arg) => {
        return result + " " + arg
    })
}