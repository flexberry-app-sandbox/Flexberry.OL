import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  выдатьТоплива: DS.attr('number'),
  гаражНомер: DS.attr('number'),
  номер: DS.attr('number'),
  сопровожЛица: DS.attr('string')
});

export let ValidationRules = {
  выдатьТоплива: {
    descriptionKey: 'models.i-i-s-o-l-путевой-лист.validations.выдатьТоплива.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  гаражНомер: {
    descriptionKey: 'models.i-i-s-o-l-путевой-лист.validations.гаражНомер.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  номер: {
    descriptionKey: 'models.i-i-s-o-l-путевой-лист.validations.номер.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  сопровожЛица: {
    descriptionKey: 'models.i-i-s-o-l-путевой-лист.validations.сопровожЛица.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ПутевойЛистE', 'i-i-s-o-l-путевой-лист', {
    выдатьТоплива: attr('Выдать топлива', { index: 0 }),
    номер: attr('Номер', { index: 1 }),
    сопровожЛица: attr('Сопровож лица', { index: 2 }),
    гаражНомер: attr('Гараж номер', { index: 3 })
  });

  modelClass.defineProjection('ПутевойЛистL', 'i-i-s-o-l-путевой-лист', {
    выдатьТоплива: attr('Выдать топлива', { index: 0 }),
    номер: attr('Номер', { index: 1 }),
    сопровожЛица: attr('Сопровож лица', { index: 2 }),
    гаражНомер: attr('Гараж номер', { index: 3 })
  });
};
