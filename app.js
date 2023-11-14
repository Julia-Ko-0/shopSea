// import { abi } from "./abi";

let contractAddress = "0x7cE3329816B4DA05964eB8AD62dfFF474D86BeeD";
let web3, accounts
let selectAdress = document.getElementById('adress')
let user = document.getElementById('user')

async function getAccounts() {
	console.log('aaaaaaaa');
	web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:7545"));
	accounts = await web3.eth.getAccounts();
	console.log(accounts);
  
	crAdress(accounts)
	crPol(accounts)
  
  }
  getAccounts()
  function crAdress(mas){
	for(let i = 0; i< mas.length;i++){
	  let adress = document.createElement('option')
	  adress.textContent = mas[i]
	  selectAdress.append(adress)
	  user.textContent = mas[0]
	}
	// balansEl(mas[0])
	// addRole()
   
  }
function usName(name){
	user.textContent = name
	// balansEl(name)
	// addRole()
	// div.innerHTML=''
	// div_pr.innerHTML=''
	//   getSpisok()
	  // addRole()
  }