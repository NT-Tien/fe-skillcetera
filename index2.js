function fun1() {
    var arr =[ 1, 2, 3, 4, 5];

    // remove item
    const remove = (arr, item) => {
        const index = arr.indexOf(item);
        if (index !== -1) {
            arr.splice(index, 1);
        }
    }

    console.log(arr);
}

fun1();