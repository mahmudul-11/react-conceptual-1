import './LocalStorage.css'
const addToLoacalStorage = (id) => {
    let shoppingCart = {};
    let exist = localStorage.getItem('shoppingCart');
    if (!exist) {
        shoppingCart[id] = 1; //    jodi na thake tahole soarsori oi id dia object er vitore bosia dewa hobe and tar vaule =1 dewa hobe
    }
    else {//  r jodi thake tahole ja korte hobe
        shoppingCart = JSON.parse(exist);
        if (!shoppingCart[id]) {//  card ache but product nei tahole null ashbe
            shoppingCart[id] = 1;
        }
        else{ // card e ei id ta already ache 
            shoppingCart[id] = shoppingCart[id] + 1;
        }

    }
    localStorage.setItem("shoppingCart",JSON.stringify(shoppingCart));
}
const rmoveToLocalStorage = (id) => {
    let exist = localStorage.getItem('shoppingCart');
    // first search the shopping cart 
    console.log(exist);
    if (exist){
        // console.log(exist);
        const shoppingCart = JSON.parse(exist);
        // jodi thake tahole setake nia eshe json thek parse korte hobe 
        delete shoppingCart[id];
        // delete kora hobe sei id take 
        localStorage.setItem('shoppingCart',JSON.stringify(shoppingCart));
        // upadate korte hobe local storage er string  take 
    }
}
export { addToLoacalStorage,rmoveToLocalStorage }