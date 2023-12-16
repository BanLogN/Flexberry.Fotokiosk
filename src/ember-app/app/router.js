import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-fotokiosk-запись-время-l');
  this.route('i-i-s-fotokiosk-запись-время-e',
  { path: 'i-i-s-fotokiosk-запись-время-e/:id' });
  this.route('i-i-s-fotokiosk-запись-время-e.new',
  { path: 'i-i-s-fotokiosk-запись-время-e/new' });
  this.route('i-i-s-fotokiosk-запись-клиента-l');
  this.route('i-i-s-fotokiosk-запись-клиента-e',
  { path: 'i-i-s-fotokiosk-запись-клиента-e/:id' });
  this.route('i-i-s-fotokiosk-запись-клиента-e.new',
  { path: 'i-i-s-fotokiosk-запись-клиента-e/new' });
  this.route('i-i-s-fotokiosk-материал-l');
  this.route('i-i-s-fotokiosk-материал-e',
  { path: 'i-i-s-fotokiosk-материал-e/:id' });
  this.route('i-i-s-fotokiosk-материал-e.new',
  { path: 'i-i-s-fotokiosk-материал-e/new' });
  this.route('i-i-s-fotokiosk-прайс-лист-l');
  this.route('i-i-s-fotokiosk-прайс-лист-e',
  { path: 'i-i-s-fotokiosk-прайс-лист-e/:id' });
  this.route('i-i-s-fotokiosk-прайс-лист-e.new',
  { path: 'i-i-s-fotokiosk-прайс-лист-e/new' });
  this.route('i-i-s-fotokiosk-сотрудники-l');
  this.route('i-i-s-fotokiosk-сотрудники-e',
  { path: 'i-i-s-fotokiosk-сотрудники-e/:id' });
  this.route('i-i-s-fotokiosk-сотрудники-e.new',
  { path: 'i-i-s-fotokiosk-сотрудники-e/new' });
  this.route('i-i-s-fotokiosk-трудозатраты-l');
  this.route('i-i-s-fotokiosk-трудозатраты-e',
  { path: 'i-i-s-fotokiosk-трудозатраты-e/:id' });
  this.route('i-i-s-fotokiosk-трудозатраты-e.new',
  { path: 'i-i-s-fotokiosk-трудозатраты-e/new' });
});

export default Router;
