class KimController {
  static $inject = ['$http']; 
  constructor($http) {
    this.http = $http;
    this.id = 425334;
    this.hunger = 80;
    this.happiness = 70;
    this.boredom = 14;
    this.cash = 435;
    this.prestige = 50;
    this.events = ['tas', 'asdsa'];
    var ref = refresh(this);
    ref();
    setInterval(ref, 5000);
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
      }
    }); 
  }
} 

export default KimController;
