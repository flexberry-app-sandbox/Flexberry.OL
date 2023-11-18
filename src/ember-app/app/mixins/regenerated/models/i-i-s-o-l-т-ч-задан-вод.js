import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  датаВремя: DS.attr('date'),
  пунктНазнач: DS.attr('string'),
  пунктОтправ: DS.attr('string'),
  расстояние: DS.attr('decimal')
});

export let ValidationRules = {
  датаВремя: {
    descriptionKey: 'models.i-i-s-o-l-т-ч-задан-вод.validations.датаВремя.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  пунктНазнач: {
    descriptionKey: 'models.i-i-s-o-l-т-ч-задан-вод.validations.пунктНазнач.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  пунктОтправ: {
    descriptionKey: 'models.i-i-s-o-l-т-ч-задан-вод.validations.пунктОтправ.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  расстояние: {
    descriptionKey: 'models.i-i-s-o-l-т-ч-задан-вод.validations.расстояние.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true }),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ТЧЗаданВодE', 'i-i-s-o-l-т-ч-задан-вод', {
    расстояние: attr('Расстояние', { index: 0 }),
    датаВремя: attr('Дата время', { index: 1 }),
    пунктНазнач: attr('Пункт назнач', { index: 2 }),
    пунктОтправ: attr('Пункт отправ', { index: 3 })
  });

  modelClass.defineProjection('ТЧЗаданВодL', 'i-i-s-o-l-т-ч-задан-вод', {
    расстояние: attr('Расстояние', { index: 0 }),
    датаВремя: attr('Дата время', { index: 1 }),
    пунктНазнач: attr('Пункт назнач', { index: 2 }),
    пунктОтправ: attr('Пункт отправ', { index: 3 })
  });
};
