import RocketsModule from './rockets';
import RocketsController from './rockets.controller';
import RocketsComponent from './rockets.component';
import RocketsTemplate from './rockets.html';

describe('Rockets', () => {
  let $rootScope, makeController;

  beforeEach(window.module(RocketsModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new RocketsController();
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
      expect(RocketsTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
    // component/directive specs
    let component = RocketsComponent;

    it('includes the intended template', () => {
      expect(component.template).to.equal(RocketsTemplate);
    });

    it('invokes the right controller', () => {
      expect(component.controller).to.equal(RocketsController);
    });
  });
});
