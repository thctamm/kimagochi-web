class ParadeController {
  static $inject = ['$stateParams', '$state']; 
  constructor($stateParams, $state) {
    this.id = $stateParams.id;
    this.state = $state;
    this.result = $stateParams.success;
  }

  back() {
    this.state.go("kim", {"id": this.id}); 
  }

}

export default ParadeController;
