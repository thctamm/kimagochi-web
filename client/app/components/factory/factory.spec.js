import FactoryModule from './factory';
import FactoryController from './factory.controller';
import FactoryComponent from './factory.component';
import FactoryTemplate from './factory.html';

describe('Factory', () => {
  let $rootScope, makeController;

  beforeEach(window.module(FactoryModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new FactoryController();
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
      expect(FactoryTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
    // component/directive specs
    let component = FactoryComponent;

    it('includes the intended template', () => {
      expect(component.template).to.equal(FactoryTemplate);
    });

    it('invokes the right controller', () => {
      expect(component.controller).to.equal(FactoryController);
    });
  });
});
