import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  организация: DS.attr('string'),
  ответсЛицо: DS.attr('string'),
  рукОтдЛог: DS.belongsTo('i-i-s-o-l-рук-отд-лог', { inverse: null, async: false }),
  тЧЗаданВод: DS.belongsTo('i-i-s-o-l-т-ч-задан-вод', { inverse: null, async: false })
});

export let ValidationRules = {
  организация: {
    descriptionKey: 'models.i-i-s-o-l-контрагент.validations.организация.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  ответсЛицо: {
    descriptionKey: 'models.i-i-s-o-l-контрагент.validations.ответсЛицо.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  рукОтдЛог: {
    descriptionKey: 'models.i-i-s-o-l-контрагент.validations.рукОтдЛог.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  тЧЗаданВод: {
    descriptionKey: 'models.i-i-s-o-l-контрагент.validations.тЧЗаданВод.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('КонтрагентE', 'i-i-s-o-l-контрагент', {
    организация: attr('Организация', { index: 0 }),
    ответсЛицо: attr('Ответс лицо', { index: 1 }),
    тЧЗаданВод: belongsTo('i-i-s-o-l-т-ч-задан-вод', 'Т ч задан вод', {
      пунктНазнач: attr('Пункт назнач', { index: 3, hidden: true })
    }, { index: 2, displayMemberPath: 'пунктНазнач' }),
    рукОтдЛог: belongsTo('i-i-s-o-l-рук-отд-лог', 'Рук отд лог', {
      фИО: attr('ФИО', { index: 5, hidden: true })
    }, { index: 4, displayMemberPath: 'фИО' })
  });

  modelClass.defineProjection('КонтрагентL', 'i-i-s-o-l-контрагент', {
    организация: attr('Организация', { index: 0 }),
    ответсЛицо: attr('Ответс лицо', { index: 1 }),
    тЧЗаданВод: belongsTo('i-i-s-o-l-т-ч-задан-вод', 'Пункт назнач', {
      пунктНазнач: attr('Пункт назнач', { index: 2 })
    }, { index: -1, hidden: true }),
    рукОтдЛог: belongsTo('i-i-s-o-l-рук-отд-лог', 'ФИО', {
      фИО: attr('ФИО', { index: 3 })
    }, { index: -1, hidden: true })
  });
};
