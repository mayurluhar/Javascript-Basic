var stateList = [
    "Gujarat",
    "Assam",
    "Maharastra",
    1947,
    "delhi",
    "Bihar",

 ];
//FOR OF LOOPS
 for(const s of stateList){
    console.log(s);
 }

 var symbos = {
    guj: "Gujarat",
    as: "Assam",
    mh: "Maharastra",
    del: "delhi",
    bh: "Bihar"

 };

 //FOR IN LOOPS
 for(const s in symbos){
    console.log(`key is: ${s} and the value of that: ${symbos[s]}`);
 }

