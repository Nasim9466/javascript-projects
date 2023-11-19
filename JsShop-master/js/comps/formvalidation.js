export function validateForm(input) { // Validate Form
    // let x = document.forms["myForm"]["fname"].value;
    if (input == "" || input == null) {
      alert("Field must be filled out");
      return false;
    }
}
export function validateEmail(email) { // Validate Email
    return email.match(
        /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
}
export function validatePassword(pass)  // Validate Complex pass
{ 
    let decimal=  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
    if(pass.value.match(decimal)) { 
        alert('Ok...!')
        return true;
    }
    else { 
        alert('Not Ok...!')
        return false;
    }
} 
export function ValidateUsername(username) { // Validate Username
    /* 
      Usernames can only have: 
      - Lowercase Letters (a-z) 
      - Numbers (0-9)
      - Dots (.)
      - Underscores (_)
    */
    const res = /^[a-z0-9_\.]+$/.exec(username);
    const valid = !!res;
    return valid;
}
export function ValidateNationalCode(code) // Validate NationalCode
{
  let L=code.length;
  
  if(L<8 || parseInt(code,10)==0) return false;
  code=('0000'+code).substr(L+4-10);
  if(parseInt(code.substr(3,6),10)==0) return false;
  let c=parseInt(code.substr(9,1),10);
  let s=0;
  for(let i=0;i<9;i++)
    s+=parseInt(code.substr(i,1),10)*(10-i);
  s=s%11;
  return (s<2 && c==s) || (s>=2 && c==(11-s));
return true;
}
// Credit Card Validations 
    export function validateMasterCard(cardnum) // MasterCard
    {
    let cardno = /^(?:5[1-5][0-9]{14})$/;
    if(cardnum.value.match(cardno))
            {
        return true;
            }
        else
            {
            alert("Not a valid Mastercard number!");
            return false;
            }
    }
    export function validateDiscoverCard(cardnum) // DiscoveryCard
    {
    let cardno = /^(?:6(?:011|5[0-9][0-9])[0-9]{12})$/;
    if(cardnum.value.match(cardno))
            {
        return true;
            }
        else
            {
            alert("Not a valid Discover card number!");
            return false;
            }
    }
    export function validateAECard(cardnum) // American Express Card
    {
    let cardno = /^(?:3[47][0-9]{13})$/;
    if(cardnum.value.match(cardno))
            {
        return true;
            }
        else
            {
            alert("Not a valid Amercican Express credit card number!");
            return false;
            }
    }
    export function ValidateVisaCard(cardnum) // Visa Card
    {
    let cardno = /^(?:4[0-9]{12}(?:[0-9]{3})?)$/;
    if(cardnum.value.match(cardno))
            {
        return true;
            }
        else
            {
            alert("Not a valid Visa credit card number!");
            return false;
            }
    }