import methodStubs from './configs/method_stubs';
import actions from './actions';
import routes from './routes.js';

export default {
  actions,
  routes,
  load(context) {
    methodStubs(context);
  }
};
