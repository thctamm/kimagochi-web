import DoomModule from './doom';
import DoomController from './doom.controller';
import DoomComponent from './doom.component';
import DoomTemplate from './doom.html';

describe('Doom', () => {
  let $rootScope, makeController;

  beforeEach(window.module(DoomModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new DoomController();
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
      expect(DoomTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
    // component/directive specs
    let component = DoomComponent;

    it('includes the intended template', () => {
      expect(component.template).to.equal(DoomTemplate);
    });

    it('invokes the right controller', () => {
      expect(component.controller).to.equal(DoomController);
    });
  });
});
