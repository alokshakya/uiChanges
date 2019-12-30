function returnValue(url,cb){
    // if(url == 'aa' || url == 'cc'){
    //     setTimeout(() => {
    //         let a='url returning '+url;
    //         //cb(a);
    //     },10000);
    // }
    // else{
    //     setTimeout(() => {
    //         let a='url returning '+url;
    //         cb(a);
    //     },20000);
    // }
    console.log('url called : '+url);
    for(let i=0;i<100; i++){
        console.log('i val : '+i);
    }
    cb(url);
    
};

function calla(){

    returnValue('aa',(a) => {
        console.log('called aa and received '+a);
    });
    returnValue('bb',(a) => {
        console.log('called bb and received '+a);
    });
    returnValue('cc',(a) => {
        console.log('called cc and received '+a);
    });
    returnValue('dd',(a) => {
        console.log('called dd and received '+a);
    });

    returnValue('aa1',(a) => {
        console.log('called aa1 and received '+a);
    });
    returnValue('bb1',(a) => {
        console.log('called bb1 and received '+a);
    });
    returnValue('cc1',(a) => {
        console.log('called cc1 and received '+a);
    });
    returnValue('dd1',(a) => {
        console.log('called dd1 and received '+a);
    });
};

calla();

// promise writing

function getRequest(url){
    return new Promise( (resolve, reject) => {
        let xhr = new XMLHttpRequest();
        console.log('GET url called :'+url);
        xhr.onload = function(){
            resolve(xhr.status, xhr.response);
        };
        xhr.onerror = function(){
            reject(`{"message":"Network failure error"}`);
        };

        //open request
        xhr.open('GET',url,true);
        xhr.setRequestHeader('Content-Type','application/json');
        //xhr.setRequestHeader('Authorization',"Basic "+getBasicAuth());
        xhr.withCredentials = true;
        xhr.send();
    });
};


function postRequest(url,data){
    return new Promise( (resolve, reject) => {
        let xhr = new XMLHttpRequest();
        console.log('POST url called :'+url);
        xhr.onload = function(){
            resolve(xhr.status, xhr.response);
        };
        xhr.onerror = function(){
            reject(`{"message":"Network failure error"}`);
        };

        //open request
        xhr.open('POST',url,true);
        xhr.setRequestHeader('Content-Type','application/json');
        //xhr.setRequestHeader('Authorization',"Basic "+getBasicAuth());
        xhr.withCredentials = true;
        data = JSON.stringify(data);
        xhr.send(data);
    });
};

function fileUpload(url, form){
    return new Promise( (resolve, reject) => {
        let xhr = new XMLHttpRequest();
        console.log('GET url called :'+url);
        xhr.onload = function(){
            resolve(xhr.status, xhr.response);
        };
        xhr.onerror = function(){
            reject(`{"message":"Network failure error"}`);
        };

        //open request
        xhr.open('POST',url,true);
        //xhr.setRequestHeader('Authorization',"Basic "+getBasicAuth());
        xhr.withCredentials = true;
        let formData = new FormData(form);
        xhr.send(formData);
    });
};

function test(){
    let val = getRequest('https://postman-echo.com/cookies');
    val.then( (status,res) => {
        console.log('status : '+status);
        console.log('res : '+res);
    }, (err) => {
        console.log(err);
        err = JSON.parse(err);
        console.log('message : '+err.message);
    });

    let po = postRequest('https://postman-echo.com/cookies',{name:'alok'});
    po.then( (status, res) => {
        console.log('status ', status);
        console.log(res);
    }, (err) => {
        console.log(err);
        err = JSON.parse(err);
        console.log('message of post : '+err.message);
    });

};

test();



function calculateOne(){

    var ar=[8,9,10,11,1215116,13];
    var temp=0;
    for(let i=0;i<ar.length; i++){
        let a=ar[i];
        while(a>0){
           let r=parseInt(a%10); // int part of remainder
           //console.log(r);
           a=Math.floor(a/10); // int division in javascript
           /**
            * parseInt("08") or parseInt("09") or any string which starts with 0 produces result in base 8
            * to avoid this 
            * use parseInt("08",10) here redix 10 will convert number in base 10 instead of base 8
            */
           if(r==1){
               temp++;
           } 
        }
    }
    console.log('total 1 s : ' +temp);
};
calculateOne();

function thirdLargest(){
    var ar=[3,9,5,2,8,7];
    var max1=0;
    var max2=0;
    var max3=0;
    for(let i=0;i<ar.length;i++){
        if(max1 < ar[i]){
            max3=max2;
            max2 = max1;
            max1=ar[i];
        }
        // now compare for max2 as max1 is greater then current array element
        else{
            if(max2 < ar[i]){
                max3=max2;
                max2 = ar[i];
            }
            // now compare for max3 as max1 and max2 are greater then current array element
            else{
                //max3 will be changed only when current element greater than max3
                if(max3 < ar[i]){
                    max3 = ar[i];
                }
            }
        }
        console.log('i :'+i+' ar['+i+'] :'+ar[i]+' max1 :'+max1+' max2 :'+max2+' max3 :'+max3);
    }

    console.log('max1 : '+max1);
    console.log('max2 : '+max2);
    console.log('max3 : '+max3);
};
thirdLargest();