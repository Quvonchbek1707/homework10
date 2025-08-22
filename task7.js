function removeEntry(obj, str){
    delete obj[str];
    console.log(obj);
}
removeEntry({ piano: 300, tv: 100, skate: 50 }, "skate")
