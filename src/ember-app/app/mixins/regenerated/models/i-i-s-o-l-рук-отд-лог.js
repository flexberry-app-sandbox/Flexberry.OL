import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  фИО: DS.attr('string'),
  персонал: DS.belongsTo('i-i-s-o-l-персонал', { inverse: null, async: false })
});

export let ValidationRules = {
  фИО: {
    descriptionKey: 'models.i-i-s-o-l-рук-отд-лог.validations.фИО.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  персонал: {
    descriptionKey: 'models.i-i-s-o-l-рук-отд-лог.validations.персонал.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('РукОтдЛогE', 'i-i-s-o-l-рук-отд-лог', {
    фИО: attr('ФИО', { index: 0 }),
    персонал: belongsTo('i-i-s-o-l-персонал', 'Персонал', {
      контакты: attr('Контакты', { index: 2, hidden: true })
    }, { index: 1, displayMemberPath: 'контакты' })
  });

  modelClass.defineProjection('РукОтдЛогL', 'i-i-s-o-l-рук-отд-лог', {
    фИО: attr('ФИО', { index: 0 }),
    персонал: belongsTo('i-i-s-o-l-персонал', 'Контакты', {
      контакты: attr('Контакты', { index: 1 })
    }, { index: -1, hidden: true })
  });
};
