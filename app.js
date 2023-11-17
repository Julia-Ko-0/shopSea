let abi =[
	{
		"inputs": [],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
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
	}
]
// import { abi } from "./abi";



let contractAddress = "0xebBA44c3a16863970842F23Cbb5cDbafa3ac21E5";
let web3, accounts
let selectAdress = document.getElementById('adress')
let user = document.getElementById('user')
let role = document.getElementById('role_A')
let inpAdress = document.getElementById('adressPoluch')
let inpShop = document.getElementById('adressShop')
inpShop.style.display = 'none'
let div_admin=document.getElementById('div_admin')
let deist_role = document.getElementById('deist_role')
let roles_select = document.getElementById('roles')
let div_polz = document.getElementById('div_polz')
let shopsApp = document.getElementById('shopsApp')

async function getAccounts() {
	console.log('aaaaaaaa');
	web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:7545"));
	accounts = await web3.eth.getAccounts();
	console.log(accounts);
  
	crAdress(accounts)
	crAdressAdd(accounts)
	crAddShop(accounts)
	for(let i =0;i<accounts.length;i++){
		console.log(accounts[i])
		let a = await myContract.methods.returnShop(accounts[i]).call()
		console.log(a)
		// crShops(accounts[i])
	}
	// crPol(accounts)
  
}
async function crShops(ac){
	let a = await myContract.methods.returnShop(ac).call()
	console.log(a)
	// if(sh.rabMagz){
	// 	if(sh.name ==''){
	// 		crShop('naz')
	// 	}
	// 	else{
	// 		crShop(sh.name)
	// 	}
		
	// }
}
function crShop(a){
	let d_s = document.createElement('div')
	let name = document.createElement('h2')
	name.textContent = a
	d_s.append(name)
	d_s.append(name)
	// d_s.append(crOtz().d_otz)


	
}
function crOtz(){
	let d_otz = document.createElement("div")
	let n_ot = document.createElement('h2')
	let s_ot = document.createElement('h3')
	d_otz.append(n_ot)
	d_otz.append(s_ot)
	return d_otz
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
  async function crAddShop(mas){
	for(let i = 0; i< mas.length;i++){
		// console.log(mas[i])
	  let adress = document.createElement('option')
	  let map = await myContract.methods.returnMapping(mas[i]).call()
	  console.log(map.role)

	
			adress.textContent = mas[i]
			inpShop.append(adress)
	
	
	
	  
	
	}
	// balansEl(mas[0])
	// addRole()
   
  }
  let myContract = new web3.eth.Contract(abi,contractAddress)
function usName(name){
	user.textContent = name
	addRole()
  }
async function usRole(a){
	console.log(a)
	let map = await myContract.methods.returnMapping(a).call()
	if(map.role == 1){
		// getGolos()
		deist_role.textContent  = ''
		deist_role.textContent  = 'Админ'
		let opt = document.getElementById('adm')
		let opt1 = document.getElementById('pok')
		let opt2 = document.getElementById('sh')
		let opt3 = document.getElementById('pr')

		opt.style.display = 'none'
		opt1.style.display = 'flex'
		opt2.style.display = 'flex'
		opt3.style.display = 'flex'
	
	}
	if(map.role == 0){
		deist_role.textContent = ''
		deist_role.textContent  = 'Покупатель'
		let opt = document.getElementById('pok')
		let opt1 = document.getElementById('adm')
		let opt3 = document.getElementById('pr')
		let opt2 = document.getElementById('sh')
		opt.style.display = 'none'
		opt1.style.display = 'flex'
		opt2.style.display = 'flex'
		opt3.style.display = 'flex'

	}
	if(map.role == 2){
		deist_role.textContent = ''
		deist_role.textContent  = 'Продовец'
		let opt = document.getElementById('sh')
		let opt2 = document.getElementById('adm')
		let opt1 = document.getElementById('pok')
		let opt3 = document.getElementById('pr')
		
		opt.style.display = 'flex'
		opt1.style.display = 'flex'
		opt2.style.display = 'flex'
		opt3.style.display = 'none'
		
		
	
	}
	if(map.role == 3){
		deist_role.textContent = ''
		deist_role.textContent  = 'Магазин'
		let opt = document.getElementById('sh')
		let opt2 = document.getElementById('adm')
		let opt1 = document.getElementById('pok')
		let opt3 = document.getElementById('pr')

		opt.style.display = 'none'
		opt1.style.display = 'flex'
		opt2.style.display = 'flex'
		opt3.style.display = 'flex'
	
	}
  }
  let btn_sm_role = document.createElement('button')
  btn_sm_role.addEventListener('click',()=>{
	console.log('dhskjhdshj')
	smenRole()
	// role_new()
	
})
async function role_new(){
	let map = await myContract.methods.returnMapping(user.textContent).call()
	if(role.textContent == 'Админ(Временно пользователь)'|| role.textContent == 'Магазин(Временно пользователь)'|| role.textContent == '(Временно пользователь)'){
		console.log(map.role)
		if(map.role == 1){
			role.textContent = ''
		role.textContent = 'Админ'
		}
		if(map.role == 3){
			role.textContent = ''
		role.textContent = 'Магазин'
		}
		
	}
	else{
		if(map.role == 3){
			let p = 'Магазин'
		}
		if(map.role == 1){
			let p = 'Админ'
		}
		role.textContent = ''
		role.textContent = `${p}(Временно пользователь)`
		// console.log(role.textContent)
	}
}
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
			role.textContent = '(Временно пользователь)'
		
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
		btn_sm_role.remove()
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
	let map = await myContract.methods.returnMapping(user.textContent).call()
	if(role.textContent == 'Админ(Временно пользователь)'|| role.textContent == 'Магазин(Временно пользователь)'|| role.textContent == '(Временно пользователь)'){
		console.log(map.role)
		if(map.role == 1){
			console.log('sdnjkvdnbkj')

		role.textContent = ''
		role.textContent = 'Админ'
		}
		if(map.role == 3){
			role.textContent = ''
		role.textContent = 'Магазин'
		}
		
	}
	else{
		role.textContent = `${role.textContent}(Временно пользователь)`
		console.log(role.textContent)
	}
}
function db_imp(a){
	if(a == 'Продовец'){
		inpShop.style.display = 'flex'
		let Shops 
		inpShop.append()
	}
	else{
		inpShop.style.display = 'none'
	}
}
let myArray=[]
async function add_Shop(_adrs,_role,adr_shop,dv_role){
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
	if(_role == 'Продовец'){
		r = 2
		
	}
	console.log(r)

	if(r == 0 || r==1||r==3){
		if(dv_role == "Продовец"){
		 await myContract.methods.get_Prod().call((eror,result)=>{
				if(!eror){
					myArray = result
					console.log(myArray)
					otrTrans(myArray)
				}
				else{console.error(eror)}
			})
			console.log(myArray[0].polz)
			for(let i = 0;i<myArray;i++){
				if(myArray[i].polz == inpAdress.value){
					 await myContract.methods.ponizProd(i).send({from:user.textContent,gas:'677676'})
				}

				
			}
			 
		// console.log(sellers.polz)
		}
		else{
			let shop =  await myContract.methods.appAdmOrShop(_adrs,r).send({from:user.textContent,gas:'677676'})
		console.log(shop)
		}
		
	}
	if(r == 2){
		let shop =  await myContract.methods.appProdov(_adrs,adr_shop).send({from:user.textContent,gas:'677676'})
		console.log(shop)
	}

}
function crShop(){
	
}