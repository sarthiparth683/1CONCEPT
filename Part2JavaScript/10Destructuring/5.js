
function getData() {
    let count = 5
    let url = '127.0.0.1:8000'
    let obj = {
        count,
        url,
    }
    return obj
}

var { count, url } = getData()

