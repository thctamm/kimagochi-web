class KimController {
  static $inject = ['$http', '$stateParams', '$state']; 
  constructor($http, $stateParams, $state) {
    this.http = $http;
    this.state =$state;
    this.id = $stateParams.id;
    this.hunger = 80;
    this.happiness = 70;
    this.boredom = 14;
    this.cash = 435;
    this.prestige = 50;
    this.events = ['tas', 'asdsa'];
    this.intervalId = 'no';
    var ref = refresh(this);
    ref();
    this.intervalId = setInterval(ref, 5000);
  }

  eat() {
    clearInterval(this.intervalId);
    this.http.get('https://kimagochi-back.herokuapp.com/eat/' + this.id).then((resp) => {
        this.state.go("eat", {"id": this.id}); 
    });
  }

  factory() {
    clearInterval(this.intervalId);
    this.http.get('https://kimagochi-back.herokuapp.com/factory/' + this.id).then((resp) => {
        this.state.go("factory", {"id": this.id}); 
    });
  }

  parade() {
    clearInterval(this.intervalId);
    this.http.get('https://kimagochi-back.herokuapp.com/parade/' + this.id).then((resp) => {
        var res = 1;
        if (resp.data == "success") {
            res = 0
        }
        this.state.go("parade", {"id": this.id, "success": res}); 
    });
  }

 rockets() {
   clearInterval(this.intervalId);
   this.http.get('https://kimagochi-back.herokuapp.com/rockets/' + this.id).then((resp) => {
      var res = 1;
      if (resp.data == "success") {
          res = 0
      }
      this.state.go("rockets", {"id": this.id, "success": res}); 
    }); 
  }

}


function refresh(obj) {
  return () => {
    obj.http.get('https://kimagochi-back.herokuapp.com/status/' + obj.id).then((resp) => {
      if (typeof resp.data != "string") {
        obj.boredom = resp.data.boredom;
        obj.happiness = resp.data.happiness;
        obj.hunger = resp.data.hunger;
        obj.prestige = resp.data.prestige;
        obj.events = resp.data.events;
        obj.cash = resp.data.cash;

        if(obj.happiness <= 0) {
          if(obj.intervalId != 'no') {
            clearInterval(obj.intervalId);
          }
          obj.state.go("doom");
        }
      }
    }); 
  }
} 

export default KimController;
