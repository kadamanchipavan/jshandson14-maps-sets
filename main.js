function removeDuplicate(str,n){	
    var s = new Set();	
    for (var i = 0;i < n;i++)
    s.add(str[i]);
    for (const i of s) {
    console.log(i);
    }
    }
    var str= "abcadeecfb"
    var n = str.length
    removeDuplicate(str,n);

    //2Q
    let str1="abcadeecfb"
        let map=new Map();
        for(let i=0;i < str.length;i++){
            if(map.has(str1[i])){
                let value = map.get(str1[i])
                map.set(str[i],value+1)
            }
            else{
                map.set(str1[i],1)
            }
        }
            for (let [k,v] of map){
                console.log(k+"-->"+v);
            }