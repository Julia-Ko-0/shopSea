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
		"inputs": [],
		"name": "get_Otvet",
		"outputs": [
			{
				"components": [
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
				"internalType": "struct seaStore.answer[]",
				"name": "",
				"type": "tuple[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "get_Otz",
		"outputs": [
			{
				"components": [
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
				"internalType": "struct seaStore.review[]",
				"name": "",
				"type": "tuple[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "get_Prod",
		"outputs": [
			{
				"components": [
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
				"internalType": "struct seaStore.sellers[]",
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
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_adr",
				"type": "address"
			}
		],
		"name": "returnRes",
		"outputs": [
			{
				"components": [
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
				"internalType": "struct seaStore.request",
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
				"name": "_r",
				"type": "address"
			}
		],
		"name": "revShop",
		"outputs": [
			{
				"components": [
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
				"internalType": "struct seaStore.shop",
				"name": "",
				"type": "tuple"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
]

// import abi from "./abi.js";

let contractAddress = "0x795402647912813d7FE428bda85c94D6d61Cdb1c";
let web3, accounts
let selectAdress = document.getElementById('adress')
let user = document.getElementById('user')
let role = document.getElementById('role_A')
let inpAdress = document.getElementById('adressPoluch')
let inpShop = document.getElementById('adressShop')

let div_admin=document.getElementById('div_admin')
let div_pov_pon = document.getElementById('div_pov_pon')
let sm_role = document.getElementById('sm_role')
let deist_role = document.getElementById('deist_role')
let roles_select = document.getElementById('roles')
let div_polz = document.getElementById('div_polz')
let shopsApp = document.getElementById('shopsApp')
let shopSel = document.getElementById('shopSel')
let div_Zapr = document.getElementById('div_Zapr')

async function getAccounts() {
	console.log('aaaaaaaa');
	web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
	accounts = await web3.eth.getAccounts();
	console.log(accounts);
	// console.log(web3.eth.account[0])
	
	crAdress(accounts)
	crAdressAdd(accounts)
	crAddShop()
	for(let i =0;i<accounts.length;i++){
		console.log(accounts[i])
		// let a = await myContract.methods.returnShop(accounts[i]).call()
		polZaprs(accounts[i])
		
	}
	crShops()
	// crPol(accounts)
  
}
async function polZaprs(ac){

	let a = await myContract.methods.returnRes(ac).call()
	if(a.otvet == false && a.status == true){
		let divZ = document.createElement('div') 
	let name = document.createElement('h2')
	name.textContent = ac
	let h2 = document.createElement('h2')
	h2.textContent = a.shop
	let h3 = document.createElement('h3')
	h3.textContent = a.role_zapr
	let btnOt = document.createElement("button")
	btnOt.textContent='одобрить'
	let btnOt2 = document.createElement("button")
	btnOt2.textContent='отклонить'
	divZ.append(name,h2,h3,btnOt,btnOt2)
	div_Zapr.append(divZ)
	btnOt.addEventListener('click',()=>{
		console.log(ac)
		otvNa_Z(true,ac)
		
	})
	btnOt2.addEventListener('click',()=>{
		otvNa_Z(false,ac)
		
	})
	}
	
	
}
async function otvNa_Z(otv,adrZp){
	await myContract.methods.otvNaZapr(otv,adrZp).send({from:user.textContent,gas:'677676'})
	window.location.reload()
}
async function crShops(){
	shopsApp.innerHTML=''
	let acs = await web3.eth.getAccounts();

	let a = await myContract.methods.revShop(user.textContent).call()
	console.log(a)
	if(a.rabMagz == true){
		shopsApp.innerHTML=''
		crKom(user.textContent)
		
	}
	else{
	
		for(let i = 0;i<acs.length;i++){
			let rab = await myContract.methods.revShop(acs[i]).call()
			if(rab.rabMagz == true){
				console.log(acs[i])
				crKom(acs[i])
			}
			
		}
	}
}
let btn = document.createElement("button")
function crKom(ac){
	console.log(ac)
	// if(a.name ==''){
	// 	crShop('naz')
	// }
	// else{
	// 	crShop('mmm')
	// }
	let d_s = document.createElement('div')
	let name = document.createElement('h2')
	let inp = document.createElement('input')
	let inp2 = document.createElement('select')
	for(let i =1;i<11;i++){
		let opt=document.createElement('option')
		opt.textContent = i
		inp2.append(opt)
	}
	btn.addEventListener('click',()=>{
		console.log(inp.value)
		crNewOtz(name.textContent,inp2.value,inp.value)
		crShops()
	})
	

	name.textContent = ac
	btn.textContent='otpr'
	d_s.append(name)
	// for(let i = 0;i<masSeleler.length;i++){
	// 	if()
	// }
	d_s.append(inp,inp2,btn)

	d_s.id = 'd'	// d_s.append(crOtz('aslcsav','a'))
	shopsApp.append(d_s)
	getOtzv(ac)
}

async function crNewOtz(adr_sh,ocen,ot){
	await myContract.methods.appOtz(adr_sh,ocen,ot).send({from:user.textContent,gas:'677676'})
}
async function getOtzv(sh){
	let otz = await myContract.methods.get_Otz().call()
	console.log(otz)
	for(let i =0;i<otz.length;i++){
		console.log(otz[i].shop,sh)
		if(otz[i].shop == sh){

			let d = document.getElementById('d')
			let like = document.createElement('button')
			let diz= document.createElement('button')
			let d_otz = document.createElement("div")
			let n_ot = document.createElement('h3')
			let s_ot = document.createElement('h2')
			n_ot.textContent = `отзыв: ${otz[i].review}`
			s_ot.textContent = `от кого: ${otz[i].polz}`
			let ocenk= document.createElement('h3')
			ocenk.textContent = otz[i].ocenk
			let kol_like = document.createElement('h3')
			let kol_diz = document.createElement('h3')
			like.textContent = 'like'
			diz.textContent = 'diz'
			let kol_likeZ = document.createElement('h3')
			let kol_dizZ = document.createElement('h3')

			kol_likeZ.textContent = `like: `
			kol_dizZ.textContent = `diz: `

			kol_like.textContent = otz[i].like
			kol_diz.textContent = otz[i].dizlake
			like.addEventListener('click',()=>{
				dobLike(i,0)
				// kol_diz.textContent--
				

			})
			diz.addEventListener('click',()=>{
				dobDiz(i,0)
				kol_diz.textContent++
				// kol_like.textContent--

			})
			d_otz.append(s_ot)
			d_otz.append(n_ot)
			d_otz.append(ocenk,kol_likeZ,kol_like,kol_dizZ,kol_diz)
			d_otz.append(like,diz)
			
			d.append(d_otz)
		}
		
	}

}
async function dobLike(id,kyda){
	await myContract.methods.like(id,kyda).send({from:user.textContent,gas:'677676'})

}
async function dobDiz(id,kyda){
	await myContract.methods.dizLike(id,kyda).send({from:user.textContent,gas:'677676'})

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
  async function crAddShop(){
	shopSel.innerHTML=''
	accounts = await web3.eth.getAccounts();
	for(let i = 0; i< accounts.length;i++){
		console.log(accounts[i])
	  
	let map = await myContract.methods.returnMapping(accounts[i]).call()
	  console.log(map.role)
			if(map.role == 3){
				let adress = document.createElement('option')
				let adress1 = document.createElement('option')
				adress1.innerHTML = accounts[i]
				adress.innerHTML = accounts[i]
				console.log(adress1)
				inpShop.append(adress1)
				// inpShop.append(`<option>${accounts[i]}</option>`) ;
				console.log(inpShop)
				shopSel.append(adress)
				console.log(shopSel)
			} 
	}
 }
  let myContract = new web3.eth.Contract(abi,contractAddress)
function usName(name){
	user.textContent = name
	addRole()
	crShops()
	
  }
  sm_role.addEventListener('click',()=>{
	console.log(shopSel.value)
	zpSmRole(shopSel.value)
})
async function usRole(a){
	// console.log(a)
	let map = await myContract.methods.returnMapping(a).call()
	if(map.role == 1){
		// getGolos()
		deist_role.textContent  = ''
		deist_role.textContent  = 'Админ'
		let opt = document.getElementById('adm')
		let opt1 = document.getElementById('pok')
		let opt2 = document.getElementById('sh')
		let opt3 = document.getElementById('pr')
		div_Zapr.style.display = 'flex'
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
		div_Zapr.style.display = 'none'
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
		div_Zapr.style.display = 'none'
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

		div_pov_pon.style.display = 'none'
		btn_sm_role.textContent= 'сменить временно роль'
		div_polz.append(btn_sm_role)
		div_admin.style.display = 'flex'
		div_Zapr.style.display = 'flex'
		usRole(inpAdress.value)
		

	}
	if(map.role == 0){
		
		if(map.status == true){
			role.textContent = ''
			role.textContent = '(Временно пользователь)'
			div_Zapr.style.display = 'none'
			btn_sm_role.textContent= 'сменить временно роль'
			div_polz.append(btn_sm_role)
			div_admin.style.display = 'flex'
			div_pov_pon.style.display = 'none'
			usRole(inpAdress.value)
			
		}
		if(map.status == false){
			role.textContent = ''
		role.textContent = 'Покупатель'
		div_admin.style.display = 'none'
		div_Zapr.style.display = 'none'
		crAddShop()
		sm_role.textContent = 'отправить запрос на повышениение'
		// role.textContent = ''
		btn_sm_role.remove()
		let a = await myContract.methods.returnRes(user.textContent).call()
		console.log(a.status)
		if(a.status == false){
			div_pov_pon.style.display = 'flex'
		}
		}
	}
	if(map.role == 2){
		role.textContent = ''
		role.textContent = 'Продовец'
		// role.textContent = ''
		div_admin.style.display = 'none'
		div_Zapr.style.display = 'none'
		div_pov_pon.style.display = 'flex'
		shopSel.style.display='none'
		sm_role.textContent = 'отправить запрос на понижение'
		sm_role.addEventListener('click',()=>{
			zpSmRole('')
		})
		btn_sm_role.remove()
		
	}
	if(map.role == 3){
		role.textContent = ''
		role.textContent = 'Магазин'
		// role.textContent = ''
		div_admin.style.display = 'none'
		shopsApp.innerHTML=''
		
		div_pov_pon.style.display = 'none'
		btn_sm_role.textContent= 'сменить временно роль'
		div_polz.append(btn_sm_role)
	
	}

	
}
async function zpSmRole(adr_sh){
	let zpr = await myContract.methods.zaprs(adr_sh).send({from:user.textContent,gas:'677676'})
	console.log(zpr)
	window.location.reload()
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
inpShop.style.display = 'none'
function db_imp(a){
	if(a == 'Продовец'){
		inpShop.style.display = 'flex'
		// crAddShop()
		// inpShop.append()
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
			console.log('gfdgdgfdgfdgfdgdg')
			let shop =  await myContract.methods.appAdmOrShop(_adrs,r).send({from:user.textContent,gas:'677676'})
		console.log(shop)
		}
		
	}
	if(r == 2){
		let shop =  await myContract.methods.appProdov(_adrs,adr_shop).send({from:user.textContent,gas:'677676'})
		console.log(shop)
	}
	window.location.reload()
}
