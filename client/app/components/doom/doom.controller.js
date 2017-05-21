class DoomController {
  static $inject = ['$state']; 
  constructor($state) {
    this.state = $state;
  }

  back() {
    this.state.go("home"); 
  }

}

export default DoomController;
