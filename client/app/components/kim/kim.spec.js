import KimModule from './kim';
import KimController from './kim.controller';
import KimComponent from './kim.component';
import KimTemplate from './kim.html';

describe('Kim', () => {
  let $rootScope, makeController;

  beforeEach(window.module(KimModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new KimController();
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
      expect(KimTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
    // component/directive specs
    let component = KimComponent;

    it('includes the intended template', () => {
      expect(component.template).to.equal(KimTemplate);
    });

    it('invokes the right controller', () => {
      expect(component.controller).to.equal(KimController);
    });
  });
});
