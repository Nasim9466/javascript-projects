//types
type userTypes = {
    id:number; 
    name: string;
    lastname:string;
    age:number;
    maritalStatus:"married"|"single";
    gender:"male"|"female";
    height:string;
    phoneNumber:string;
}
const userList:Array<userTypes> = [
    {
    id:88982762479436,
    name:"nasim", 
    lastname:"shaban",
    age:21,
    maritalStatus:"single",
    gender:"female",
    height:"160cm",
    phoneNumber:"+989308680766",
}
]
const userAdd = (user:userTypes): void =>{
userList.push(user)
}
userAdd({
    id:35578982345678,
    name:"reza" ,
    lastname:"basiri",
    age:22,
    maritalStatus:"married",
    gender:"male",
    height:"183cm",
    phoneNumber:"+989124874821",
})

const userupdate = (userid:userTypes["id"]):void => {
const userindex = userList.findIndex((item)=>item.id === userid) 
userList[userindex] = {...userList[userindex]};
}
userupdate(35578982345678,)
console.log(userList);