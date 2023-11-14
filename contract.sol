// SPDX-License-Identifier: MIT
pragma solidity >=0.7.0;
contract seaStore{
    struct polz{
      string name;
        uint role; //1-админ 0-покупатель 2-продовец 3-магазин
        bool status;//может переходить с роли в роль
    }
    struct shop{
        address adr;
        string name;
        bool rabMagz;
    }
    struct sellers{
        address shop;
        address polz;
        bool status;
    }
    struct review{
        address shop;
        address polz;
        string review;
        uint ocenk;
        uint like;
        uint dizlake;
    } 
    struct answer{
        address adres;
        uint review;
        string answer;
        uint like;
        uint dizlake;
    } 
    struct request{
        uint role_zapr;
        address shop;
        bool otvet;
        bool status;
    }
    struct estimation{
        address polz;
        uint id_otz;
        uint otv_otz;//0-отзыв 1-ответ
        uint estimation;//0-kile 1-diz
    }

        constructor(){
      appPolz[0x5B38Da6a701c568545dCfcB03FcB875f56beddC4] = polz("name1",1,true);
    }
    estimation[] public appEstim;
    answer[] public appAnswer;
    review[] public appReview;
    sellers[] public appSeler;
    //  mapping (address => sellers) public appSeler;
     mapping (address => polz) public appPolz;
     mapping (address => shop) public appShop;
    mapping (address=> request) public appRequest;
    //добавить покупателя
    function appPolzs(address adr, string memory name) public {
        require(appPolz[msg.sender].role == 1,"not admin");
        require(msg.sender !=adr);
         appPolz[adr] = (polz(name,0,false));
    }
    //временно поменять роль
    function pereclRole() public {
        if(appPolz[msg.sender].role == 1 || appPolz[msg.sender].role == 3){
            appPolz[msg.sender].role = 0;
        }
        else{
            require((appPolz[msg.sender].role == 0 && appPolz[msg.sender].status == true));
            if(appShop[msg.sender].rabMagz != false){
                appPolz[msg.sender].role = 3;
            }
            else{
                appPolz[msg.sender].role =1;
            }
        }

    }
    //добавить админа или магазин/удалить магазин
    function appAdmOrShop(address adr, uint rol)public {
        require(msg.sender != adr);
        require(appPolz[msg.sender].role == 1);
        require(appPolz[adr].role != 1 && rol!=2);
        if( appPolz[adr].role==3 ){
              for(uint i = 0; i < appSeler.length ;i++){
                if(appSeler[i].shop == adr){
                    appSeler[i].status = false;
                    appPolz[appSeler[i].polz].role=0;
                    
                }
            }
        }
        appPolz[adr].role = rol;
        appPolz[adr].status = true;

    }
    //Повышает обычного покупателя до роли продавец
    function appProdov(address adr_pr,address adr_shop) public {
         require(appPolz[msg.sender].role == 1);
         require(appPolz[adr_pr].role == 0,"message");
         appPolz[adr_pr].role =2;
        appSeler.push(sellers(adr_shop,adr_pr,true));
    }
    
    //Понижает продавца до роли покупатель
    function ponizProd(uint id)public {
         require(appPolz[msg.sender].role == 1);
         require(appPolz[appSeler[id].polz].role == 2,"message");
         appPolz[appSeler[id].polz].role =0;
         appSeler[id].status = false;
    }
    //оставить отзыв
    function appOtz(address adr_shop,uint ocenk,string memory rev )public {
        require(appPolz[msg.sender].role == 0);
        appReview.push(review(adr_shop,msg.sender,rev,ocenk,0,0));
    }
    //запрос на понижение до роли покупатель 1 /запрос на повышение до роли продавец 2.
    function zaprs(address shop)public {
        if(appPolz[msg.sender].role == 0){
            appRequest[msg.sender] = (request(2,shop,false,true));
        }
        if(appPolz[msg.sender].role == 2){
        appRequest[msg.sender] = (request(0,shop,false,true));
        }
    }
    //ответ на запрос
    function otvNaZapr(bool otv,address zpr) public {
         require(appRequest[zpr].status == true);
         appRequest[zpr].otvet = otv;
         appRequest[zpr].status = false;
         if(otv == true){
            if(appRequest[zpr].role_zapr == 2 ){
            appSeler.push(sellers( appRequest[zpr].shop,zpr,true));
            }
            if(appRequest[zpr].role_zapr == 0){
                for(uint i = 0; i < appSeler.length ;i++){
                if(appSeler[i].polz == zpr){
                   appSeler[i].status=false;
                }
            }
            }
            appPolz[zpr].role= appRequest[zpr].role_zapr;
         }

    }
    //оставить ответ
     function appOtv(uint id,string memory ans )public {
        if(appPolz[msg.sender].role == 2){
            for(uint i = 0; i < appSeler.length ;i++){
                if(appSeler[i].polz == msg.sender && appSeler[i].status == true){
                      if( appReview[id].shop == appSeler[i].shop){
                    appAnswer.push(answer(msg.sender,id,ans,0,0));
                }
                }
              
            }
        }
        
         require(appPolz[msg.sender].role == 1 );
         appAnswer.push(answer(msg.sender,id,ans,0,0));
        
    }

    //поставить лайк
    function like(uint id,uint kyda)public {
        for(uint i = 0; i < appEstim.length ;i++){
            if(id == appEstim[i].id_otz && kyda == appEstim[i].otv_otz && msg.sender == appEstim[i].polz){
                if(appEstim[i].estimation == 0){
                    return();

                }
                if(appEstim[i].estimation == 1){
                     if(kyda == 0){
                        require(appReview[id].polz != msg.sender, "sv_nelza");
                        appReview[id].like = appReview[id].like+1;
                        appReview[id].dizlake = appReview[id].dizlake-1;
                        appEstim[i].estimation = 0;
                        return ();
                    }   
                    if(kyda == 1){
                    require( appAnswer[id].adres != msg.sender, "sv_nelza");
                    appAnswer[id].like = appAnswer[id].like+1;
                    appAnswer[id].dizlake = appAnswer[id].dizlake-1;
                    appEstim[i].estimation = 0;

                    return ();
                    }
                }
            }

        }

        if(kyda == 0){
            require(appReview[id].polz != msg.sender, "sv_nelza");
                        appReview[id].like = appReview[id].like+1;
        }   
        if(kyda == 1){
            require( appAnswer[id].adres != msg.sender, "sv_nelza");
            appAnswer[id].like = appAnswer[id].like+1;
        }
        appEstim.push(estimation(msg.sender,id,kyda,0));
        //
       
        
    }
    //пост дизлайк

    function dizLike(uint id,uint kyda)public {
         for(uint i = 0; i < appEstim.length ;i++){
            if(id == appEstim[i].id_otz && kyda == appEstim[i].otv_otz && msg.sender == appEstim[i].polz){
                if(appEstim[i].estimation == 0){
                   
                    if(kyda == 0){
                        require(appReview[id].polz != msg.sender, "sv_nelza");
                        appReview[id].dizlake = appReview[id].dizlake+1;
                        appReview[id].like = appReview[id].like-1;
                        appEstim[i].estimation = 1;

                        return ();

                    }
                    if(kyda == 1){
                        require( appAnswer[id].adres != msg.sender, "sv_nelza");
                        appAnswer[id].dizlake = appAnswer[id].dizlake+1;
                        appAnswer[id].like = appAnswer[id].like-1;
                        appEstim[i].estimation = 1;

                        return ();
                    }
                }
                if(appEstim[i].estimation == 1){
                     return();
                }
            }
        }
        //
           if(kyda == 0){
            require(appReview[id].polz != msg.sender, "sv_nelza");
            appReview[id].dizlake = appReview[id].dizlake+1;


        }
          if(kyda == 1){
            require( appAnswer[id].adres != msg.sender, "sv_nelza");
            appAnswer[id].dizlake = appAnswer[id].dizlake+1;
            
        }
        appEstim.push(estimation(msg.sender,id,kyda,1));
    }

    
}