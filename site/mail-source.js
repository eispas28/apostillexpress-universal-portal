(function(){
const E={firstName:"",lastName:"",phone:"",email:"",organization:"",title:"",addr1:"",addr2:"",country:"",state:"",city:"",zip:""};
const prof=()=>{const u=window.USER_PROFILE||{},a=window.PROFILE_ADDRESS||{};return {...E,firstName:u.firstName||"",lastName:u.lastName||"",email:u.email||"",phone:u.phone||"",organization:u.organization||"",addr1:a.addr1||"",addr2:a.addr2||"",country:a.country||"",state:a.state||"",city:a.city||"",zip:a.zip||""}};
const cust=(c)=>{c=c||{};return {...E,firstName:c.firstName||"",lastName:c.lastName||"",email:c.email||"",phone:c.phone||"",organization:c.organization||"",title:c.title||"",addr1:c.addr1||"",addr2:c.addr2||"",country:c.country||"",state:c.state||"",city:c.city||"",zip:c.zip||""}};
const OPTS=[["profile","Profile Address","Pre-filled from your profile"],["customer","Customer Address","Pre-filled from customer info"],["new","Add New Address","Enter manually"]];
const REQ=["firstName","lastName","email","addr1","country","state","city","zip"];
function MailSourcePicker({value,onPick,customer,compact}){
  const h=React.createElement;
  const src=value==="profile"?prof():value==="customer"?cust(customer):null;
  const warn=src&&REQ.some(k=>!String(src[k]||"").trim())&&!(value==="profile"&&window.PA_SAVED);
  const A=window.ApostilleXpressDesignSystem_141fbe.Alert;
  const banner=warn?h(A,{kind:"warning",className:"cb",style:{marginTop:"var(--ax-space-3)"}},"Some fields were not pre-filled because they are not available in "+(value==="profile"?"your profile":"the customer information")+"."):null;
  const pick=(s)=>onPick(s,s==="profile"?prof():s==="customer"?cust(customer):{...E});
  if(compact){
    const S=window.ApostilleXpressDesignSystem_141fbe.Select;
    return h("div",{className:"field",style:{margin:0,display:"flex",flexDirection:"column",gap:"var(--ax-space-3)"}},h("label",{className:"flabel2",style:{margin:0}},"Mailing Address"),
      h(S,{value:value||"",onChange:(e)=>pick(e.target.value)},h("option",{value:"",disabled:true},"Select address source"),OPTS.map(o=>h("option",{key:o[0],value:o[0]},o[1]+" — "+o[2].charAt(0).toLowerCase()+o[2].slice(1)))),banner);
  }
  return h("div",{style:{marginBottom:"var(--ax-space-5)"}},h("div",{className:"rgrid3"},OPTS.map(o=>h(window.RadioCard,{key:o[0],selected:value===o[0],onClick:()=>pick(o[0]),title:o[1],sub:o[2]}))),banner);
}
window.MailSourcePicker=MailSourcePicker;
})();
