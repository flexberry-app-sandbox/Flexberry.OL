import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  датаЗаключ: DS.attr('date'),
  датаНачала: DS.attr('date'),
  датаОконч: DS.attr('date'),
  обязанПосред: DS.attr('string'),
  контрагент: DS.belongsTo('i-i-s-o-l-контрагент', { inverse: null, async: false }),
  организация: DS.belongsTo('i-i-s-o-l-организация', { inverse: null, async: false }),
  рукОтдЛог: DS.belongsTo('i-i-s-o-l-рук-отд-лог', { inverse: null, async: false })
});

export let ValidationRules = {
  датаЗаключ: {
    descriptionKey: 'models.i-i-s-o-l-договор.validations.датаЗаключ.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  датаНачала: {
    descriptionKey: 'models.i-i-s-o-l-договор.validations.датаНачала.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  датаОконч: {
    descriptionKey: 'models.i-i-s-o-l-договор.validations.датаОконч.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  обязанПосред: {
    descriptionKey: 'models.i-i-s-o-l-договор.validations.обязанПосред.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  контрагент: {
    descriptionKey: 'models.i-i-s-o-l-договор.validations.контрагент.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  организация: {
    descriptionKey: 'models.i-i-s-o-l-договор.validations.организация.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  рукОтдЛог: {
    descriptionKey: 'models.i-i-s-o-l-договор.validations.рукОтдЛог.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ДоговорE', 'i-i-s-o-l-договор', {
    датаЗаключ: attr('Дата заключ', { index: 0 }),
    датаОконч: attr('Дата оконч', { index: 1 }),
    датаНачала: attr('Дата начала', { index: 2 }),
    обязанПосред: attr('Обязан посред', { index: 3 }),
    рукОтдЛог: belongsTo('i-i-s-o-l-рук-отд-лог', 'Рук отд лог', {
      фИО: attr('ФИО', { index: 5, hidden: true })
    }, { index: 4, displayMemberPath: 'фИО' }),
    контрагент: belongsTo('i-i-s-o-l-контрагент', 'Контрагент', {
      организация: attr('Организация', { index: 7, hidden: true })
    }, { index: 6, displayMemberPath: 'организация' }),
    организация: belongsTo('i-i-s-o-l-организация', 'Организация', {
      почта: attr('Почта', { index: 9, hidden: true })
    }, { index: 8, displayMemberPath: 'почта' })
  });

  modelClass.defineProjection('ДоговорL', 'i-i-s-o-l-договор', {
    датаЗаключ: attr('Дата заключ', { index: 0 }),
    датаОконч: attr('Дата оконч', { index: 1 }),
    датаНачала: attr('Дата начала', { index: 2 }),
    обязанПосред: attr('Обязан посред', { index: 3 }),
    рукОтдЛог: belongsTo('i-i-s-o-l-рук-отд-лог', 'ФИО', {
      фИО: attr('ФИО', { index: 4 })
    }, { index: -1, hidden: true }),
    контрагент: belongsTo('i-i-s-o-l-контрагент', 'Организация', {
      организация: attr('Организация', { index: 5 })
    }, { index: -1, hidden: true }),
    организация: belongsTo('i-i-s-o-l-организация', 'Почта', {
      почта: attr('Почта', { index: 6 })
    }, { index: -1, hidden: true })
  });
};
