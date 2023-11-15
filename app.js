let abi =[
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "adr",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "rol",
				"type": "uint256"
			}
		],
		"name": "appAdmOrShop",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "id",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "ans",
				"type": "string"
			}
		],
		"name": "appOtv",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "adr_shop",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "ocenk",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "rev",
				"type": "string"
			}
		],
		"name": "appOtz",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "adr",
				"type": "address"
			},
			{
				"internalType": "string",
				"name": "name",
				"type": "string"
			}
		],
		"name": "appPolzs",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "adr_pr",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "adr_shop",
				"type": "address"
			}
		],
		"name": "appProdov",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "id",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "kyda",
				"type": "uint256"
			}
		],
		"name": "dizLike",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "id",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "kyda",
				"type": "uint256"
			}
		],
		"name": "like",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "bool",
				"name": "otv",
				"type": "bool"
			},
			{
				"internalType": "address",
				"name": "zpr",
				"type": "address"
			}
		],
		"name": "otvNaZapr",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "pereclRole",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "id",
				"type": "uint256"
			}
		],
		"name": "ponizProd",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "shop",
				"type": "address"
			}
		],
		"name": "zaprs",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "appAnswer",
		"outputs": [
			{
				"internalType": "address",
				"name": "adres",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "review",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "answer",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "like",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "dizlake",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "appEstim",
		"outputs": [
			{
				"internalType": "address",
				"name": "polz",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "id_otz",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "otv_otz",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "estimation",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "appPolz",
		"outputs": [
			{
				"internalType": "string",
				"name": "name",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "role",
				"type": "uint256"
			},
			{
				"internalType": "bool",
				"name": "status",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "appRequest",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "role_zapr",
				"type": "uint256"
			},
			{
				"internalType": "address",
				"name": "shop",
				"type": "address"
			},
			{
				"internalType": "bool",
				"name": "otvet",
				"type": "bool"
			},
			{
				"internalType": "bool",
				"name": "status",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "appReview",
		"outputs": [
			{
				"internalType": "address",
				"name": "shop",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "polz",
				"type": "address"
			},
			{
				"internalType": "string",
				"name": "review",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "ocenk",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "like",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "dizlake",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "appSeler",
		"outputs": [
			{
				"internalType": "address",
				"name": "shop",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "polz",
				"type": "address"
			},
			{
				"internalType": "bool",
				"name": "status",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "appShop",
		"outputs": [
			{
				"internalType": "address",
				"name": "adr",
				"type": "address"
			},
			{
				"internalType": "string",
				"name": "name",
				"type": "string"
			},
			{
				"internalType": "bool",
				"name": "rabMagz",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "get_Est",
		"outputs": [
			{
				"components": [
					{
						"internalType": "address",
						"name": "polz",
						"type": "address"
					},
					{
						"internalType": "uint256",
						"name": "id_otz",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "otv_otz",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "estimation",
						"type": "uint256"
					}
				],
				"internalType": "struct seaStore.estimation[]",
				"name": "",
				"type": "tuple[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_adr",
				"type": "address"
			}
		],
		"name": "returnMapping",
		"outputs": [
			{
				"components": [
					{
						"internalType": "string",
						"name": "name",
						"type": "string"
					},
					{
						"internalType": "uint256",
						"name": "role",
						"type": "uint256"
					},
					{
						"internalType": "bool",
						"name": "status",
						"type": "bool"
					}
				],
				"internalType": "struct seaStore.polz",
				"name": "",
				"type": "tuple"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
]
// import { abi } from "./abi";



let contractAddress = "0xc5d53199bA54adF870D0057F81e9Ab52400B2a9f";
let web3, accounts
let selectAdress = document.getElementById('adress')
let user = document.getElementById('user')
let role = document.getElementById('role_A')
let inpAdress = document.getElementById('adressPoluch')
let div_admin=document.getElementById('div_admin')
let deist_role = document.getElementById('deist_role')
let roles_select = document.getElementById('roles')
let div_polz = document.getElementById('div_polz')

async function getAccounts() {
	console.log('aaaaaaaa');
	web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:7545"));
	accounts = await web3.eth.getAccounts();
	console.log(accounts);
  
	crAdress(accounts)
	crAdressAdd(accounts)
	// crPol(accounts)
  
}
  getAccounts()
function crAdress(mas){
	for(let i = 0; i< mas.length;i++){
	  let adress = document.createElement('option')
	  adress.textContent = mas[i]
	  selectAdress.append(adress)
	  user.textContent = mas[0]
	  addRole()
	}
	// balansEl(mas[0])
	// addRole()
   
  }
  async function crAdressAdd(mas){
	for(let i = 0; i< mas.length;i++){
	  let adress = document.createElement('option')
	  if(mas[i]!=user.textContent){
		adress.textContent = mas[i]
		inpAdress.append(adress)
	
	  }
	
	}
	// balansEl(mas[0])
	// addRole()
   
  }
  let myContract = new web3.eth.Contract(abi,contractAddress)
function usName(name){
	user.textContent = name
	// balansEl(name)
	addRole()
	// div.innerHTML=''
	// div_pr.innerHTML=''
	//   getSpisok()
	  // addRole()
  }
async function usRole(a){
	console.log(a)
	let map = await myContract.methods.returnMapping(a).call()
	if(map.role == 1){
		// getGolos()
		deist_role.textContent  = ''
		deist_role.textContent  = 'Админ'
	
	}
	if(map.role == 0){
		deist_role.textContent = ''
		deist_role.textContent  = 'Покупатель'


	}
	if(map.role == 2){
		deist_role.textContent = ''
		deist_role.textContent  = 'Продовец'
	
	}
	if(map.role == 3){
		deist_role.textContent = ''
		deist_role.textContent  = 'Магазин'
	
	}
  }
  let btn_sm_role = document.createElement('button')
  btn_sm_role.addEventListener('click',()=>{
	console.log('dhskjhdshj')
	smenRole()
	if(role.textContent == 'Админ(Временно пользователь)'){
		role.textContent = 'Админ'
	}
	else{
		role.textContent = 'Админ(Временно пользователь)'
	}
	
})
  async function addRole(){
	console.log("ddddd")
	let map = await myContract.methods.returnMapping(user.textContent).call()
	console.log('map',map)
	console.log(map.role)
	if(map.role == 1){
		// getGolos()
		role.textContent = ''
		role.textContent = 'Админ'
	
		btn_sm_role.textContent= 'сменить временно роль'
		div_polz.append(btn_sm_role)
		div_admin.style.display = 'flex'
		usRole(inpAdress.value)
		

	}
	if(map.role == 0){
		if(map.status == true){
			role.textContent = ''
			role.textContent = 'Админ(Временно пользователь)'
		
			btn_sm_role.textContent= 'сменить временно роль'
			div_polz.append(btn_sm_role)
			div_admin.style.display = 'flex'
			usRole(inpAdress.value)
			
		}
		if(map.status == false){
			role.textContent = ''
		role.textContent = 'Покупатель'
		div_admin.style.display = 'none'
		// role.textContent = ''
		btn_sm_role.remove()
		}
	}
	if(map.role == 2){
		role.textContent = ''
		role.textContent = 'Продовец'
		// role.textContent = ''
		div_admin.style.display = 'none'
	}
	if(map.role == 3){
		role.textContent = ''
		role.textContent = 'Магазин'
		// role.textContent = ''
		div_admin.style.display = 'none'
		btn_sm_role.textContent= 'сменить временно роль'
		div_polz.append(btn_sm_role)
	}

}
async function smenRole(){
	let shop =  await myContract.methods.pereclRole().send({from:user.textContent,gas:'677676'})
}
function crRoles(){
	
}
async function add_Shop(_adrs,_role){
	console.log(_adrs,_role)
	let r
	if(_role == 'Магазин'){
		r = 3
	}
	if(_role == 'Админ'){
		r = 1
	}
	if(_role == 'Покупатель'){
		r = 0
	}
	console.log(r)
	let shop =  await myContract.methods.appAdmOrShop(_adrs,r).send({from:user.textContent,gas:'677676'})
	console.log(shop)
}
function crShop(){
	
}