class HomeController {

  static $inject = ['$http', '$state']; 
  constructor($http, $state) {
    this.id = 0; 
    this.number = '';
    this.http = $http;
    this.state = $state;
    this.fail = false;
  }

  login() {
    this.http.get('https://kimagochi-back.herokuapp.com/status/' + this.id).then((resp) => {
      if (typeof resp.data == "string") {
        this.fail = true;
      }
      else {
        this.state.go("kim", {"id": this.id}); 
      }

    });
  }

  newKim() {
    this.http.get('https://kimagochi-back.herokuapp.com/create/' + this.number).then((resp) => {
      this.state.go("kim", {"id": resp.data}); 
    });

  }

   
}


export default HomeController;
