//ham
//cach viet thong thuong
function hello(name){
    console.log(name);
}

//cach viet khac
const hello2 = function(name){
    console.log(name + " den tu hello2");
}

//cach viet ham trong js hien dai
const hello3 = (name) => {
    console.log(name + " den tu hello3");
}

//neu chi co 1 tham so va 1 gia tri tra ve
const tinhBinhPhuong = so => so * so;
console.log(tinhBinhPhuong(2));

hello("hoang nam");
hello2("hoang nu");
hello3("hoang bd")
