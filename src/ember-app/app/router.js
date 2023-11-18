import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-o-l-договор-l');
  this.route('i-i-s-o-l-договор-e',
  { path: 'i-i-s-o-l-договор-e/:id' });
  this.route('i-i-s-o-l-договор-e.new',
  { path: 'i-i-s-o-l-договор-e/new' });
  this.route('i-i-s-o-l-должности-l');
  this.route('i-i-s-o-l-должности-e',
  { path: 'i-i-s-o-l-должности-e/:id' });
  this.route('i-i-s-o-l-должности-e.new',
  { path: 'i-i-s-o-l-должности-e/new' });
  this.route('i-i-s-o-l-журнал-учета-l');
  this.route('i-i-s-o-l-журнал-учета-e',
  { path: 'i-i-s-o-l-журнал-учета-e/:id' });
  this.route('i-i-s-o-l-журнал-учета-e.new',
  { path: 'i-i-s-o-l-журнал-учета-e/new' });
  this.route('i-i-s-o-l-контрагент-l');
  this.route('i-i-s-o-l-контрагент-e',
  { path: 'i-i-s-o-l-контрагент-e/:id' });
  this.route('i-i-s-o-l-контрагент-e.new',
  { path: 'i-i-s-o-l-контрагент-e/new' });
  this.route('i-i-s-o-l-организация-l');
  this.route('i-i-s-o-l-организация-e',
  { path: 'i-i-s-o-l-организация-e/:id' });
  this.route('i-i-s-o-l-организация-e.new',
  { path: 'i-i-s-o-l-организация-e/new' });
  this.route('i-i-s-o-l-персонал-l');
  this.route('i-i-s-o-l-персонал-e',
  { path: 'i-i-s-o-l-персонал-e/:id' });
  this.route('i-i-s-o-l-персонал-e.new',
  { path: 'i-i-s-o-l-персонал-e/new' });
  this.route('i-i-s-o-l-путевой-лист-l');
  this.route('i-i-s-o-l-путевой-лист-e',
  { path: 'i-i-s-o-l-путевой-лист-e/:id' });
  this.route('i-i-s-o-l-путевой-лист-e.new',
  { path: 'i-i-s-o-l-путевой-лист-e/new' });
  this.route('i-i-s-o-l-рук-отд-лог-l');
  this.route('i-i-s-o-l-рук-отд-лог-e',
  { path: 'i-i-s-o-l-рук-отд-лог-e/:id' });
  this.route('i-i-s-o-l-рук-отд-лог-e.new',
  { path: 'i-i-s-o-l-рук-отд-лог-e/new' });
  this.route('i-i-s-o-l-т-ч-водитель-l');
  this.route('i-i-s-o-l-т-ч-водитель-e',
  { path: 'i-i-s-o-l-т-ч-водитель-e/:id' });
  this.route('i-i-s-o-l-т-ч-водитель-e.new',
  { path: 'i-i-s-o-l-т-ч-водитель-e/new' });
  this.route('i-i-s-o-l-т-ч-задан-вод-l');
  this.route('i-i-s-o-l-т-ч-задан-вод-e',
  { path: 'i-i-s-o-l-т-ч-задан-вод-e/:id' });
  this.route('i-i-s-o-l-т-ч-задан-вод-e.new',
  { path: 'i-i-s-o-l-т-ч-задан-вод-e/new' });
  this.route('i-i-s-o-l-трансп-ср-l');
  this.route('i-i-s-o-l-трансп-ср-e',
  { path: 'i-i-s-o-l-трансп-ср-e/:id' });
  this.route('i-i-s-o-l-трансп-ср-e.new',
  { path: 'i-i-s-o-l-трансп-ср-e/new' });
  this.route('i-i-s-o-l-тч-движ-г-с-м-l');
  this.route('i-i-s-o-l-тч-движ-г-с-м-e',
  { path: 'i-i-s-o-l-тч-движ-г-с-м-e/:id' });
  this.route('i-i-s-o-l-тч-движ-г-с-м-e.new',
  { path: 'i-i-s-o-l-тч-движ-г-с-м-e/new' });
  this.route('i-i-s-o-l-тч-раб-вод-авто-l');
  this.route('i-i-s-o-l-тч-раб-вод-авто-e',
  { path: 'i-i-s-o-l-тч-раб-вод-авто-e/:id' });
  this.route('i-i-s-o-l-тч-раб-вод-авто-e.new',
  { path: 'i-i-s-o-l-тч-раб-вод-авто-e/new' });
});

export default Router;
