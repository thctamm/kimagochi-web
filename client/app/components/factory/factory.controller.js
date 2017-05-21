class FactoryController {
  static $inject = ['$stateParams', '$state']; 
  constructor($stateParams, $state) {
    this.id = $stateParams.id;
    this.state = $state;
  }

  back() {
    this.state.go("kim", {"id": this.id}); 
  }

}

export default FactoryController;
