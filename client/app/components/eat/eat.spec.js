import EatModule from './eat';
import EatController from './eat.controller';
import EatComponent from './eat.component';
import EatTemplate from './eat.html';

describe('Eat', () => {
  let $rootScope, makeController;

  beforeEach(window.module(EatModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new EatController();
    };
  }));

  describe('Module', () => {
    // top-level specs: i.e., routes, injection, naming
  });

  describe('Controller', () => {
    // controller specs
    it('has a name property [REMOVE]', () => { // erase if removing this.name from the controller
      let controller = makeController();
      expect(controller).to.have.property('name');
    });
  });

  describe('Template', () => {
    // template specs
    // tip: use regex to ensure correct bindings are used e.g., {{  }}
    it('has name in template [REMOVE]', () => {
      expect(EatTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
    // component/directive specs
    let component = EatComponent;

    it('includes the intended template', () => {
      expect(component.template).to.equal(EatTemplate);
    });

    it('invokes the right controller', () => {
      expect(component.controller).to.equal(EatController);
    });
  });
});
