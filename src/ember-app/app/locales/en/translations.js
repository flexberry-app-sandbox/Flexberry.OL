import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

import IISOLДоговорLForm from './forms/i-i-s-o-l-договор-l';
import IISOLДолжностиLForm from './forms/i-i-s-o-l-должности-l';
import IISOLЖурналУчетаLForm from './forms/i-i-s-o-l-журнал-учета-l';
import IISOLКонтрагентLForm from './forms/i-i-s-o-l-контрагент-l';
import IISOLОрганизацияLForm from './forms/i-i-s-o-l-организация-l';
import IISOLПерсоналLForm from './forms/i-i-s-o-l-персонал-l';
import IISOLПутевойЛистLForm from './forms/i-i-s-o-l-путевой-лист-l';
import IISOLРукОтдЛогLForm from './forms/i-i-s-o-l-рук-отд-лог-l';
import IISOLТЧВодительLForm from './forms/i-i-s-o-l-т-ч-водитель-l';
import IISOLТЧЗаданВодLForm from './forms/i-i-s-o-l-т-ч-задан-вод-l';
import IISOLТранспСрLForm from './forms/i-i-s-o-l-трансп-ср-l';
import IISOLТчДвижГСМLForm from './forms/i-i-s-o-l-тч-движ-г-с-м-l';
import IISOLТчРабВодАвтоLForm from './forms/i-i-s-o-l-тч-раб-вод-авто-l';
import IISOLДоговорEForm from './forms/i-i-s-o-l-договор-e';
import IISOLДолжностиEForm from './forms/i-i-s-o-l-должности-e';
import IISOLЖурналУчетаEForm from './forms/i-i-s-o-l-журнал-учета-e';
import IISOLКонтрагентEForm from './forms/i-i-s-o-l-контрагент-e';
import IISOLОрганизацияEForm from './forms/i-i-s-o-l-организация-e';
import IISOLПерсоналEForm from './forms/i-i-s-o-l-персонал-e';
import IISOLПутевойЛистEForm from './forms/i-i-s-o-l-путевой-лист-e';
import IISOLРукОтдЛогEForm from './forms/i-i-s-o-l-рук-отд-лог-e';
import IISOLТЧВодительEForm from './forms/i-i-s-o-l-т-ч-водитель-e';
import IISOLТЧЗаданВодEForm from './forms/i-i-s-o-l-т-ч-задан-вод-e';
import IISOLТранспСрEForm from './forms/i-i-s-o-l-трансп-ср-e';
import IISOLТчДвижГСМEForm from './forms/i-i-s-o-l-тч-движ-г-с-м-e';
import IISOLТчРабВодАвтоEForm from './forms/i-i-s-o-l-тч-раб-вод-авто-e';
import IISOLДоговорModel from './models/i-i-s-o-l-договор';
import IISOLДолжностиModel from './models/i-i-s-o-l-должности';
import IISOLЖурналУчетаModel from './models/i-i-s-o-l-журнал-учета';
import IISOLКонтрагентModel from './models/i-i-s-o-l-контрагент';
import IISOLОрганизацияModel from './models/i-i-s-o-l-организация';
import IISOLПерсоналModel from './models/i-i-s-o-l-персонал';
import IISOLПутевойЛистModel from './models/i-i-s-o-l-путевой-лист';
import IISOLРукОтдЛогModel from './models/i-i-s-o-l-рук-отд-лог';
import IISOLТЧВодительModel from './models/i-i-s-o-l-т-ч-водитель';
import IISOLТЧЗаданВодModel from './models/i-i-s-o-l-т-ч-задан-вод';
import IISOLТранспСрModel from './models/i-i-s-o-l-трансп-ср';
import IISOLТчДвижГСМModel from './models/i-i-s-o-l-тч-движ-г-с-м';
import IISOLТчРабВодАвтоModel from './models/i-i-s-o-l-тч-раб-вод-авто';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-o-l-договор': IISOLДоговорModel,
    'i-i-s-o-l-должности': IISOLДолжностиModel,
    'i-i-s-o-l-журнал-учета': IISOLЖурналУчетаModel,
    'i-i-s-o-l-контрагент': IISOLКонтрагентModel,
    'i-i-s-o-l-организация': IISOLОрганизацияModel,
    'i-i-s-o-l-персонал': IISOLПерсоналModel,
    'i-i-s-o-l-путевой-лист': IISOLПутевойЛистModel,
    'i-i-s-o-l-рук-отд-лог': IISOLРукОтдЛогModel,
    'i-i-s-o-l-т-ч-водитель': IISOLТЧВодительModel,
    'i-i-s-o-l-т-ч-задан-вод': IISOLТЧЗаданВодModel,
    'i-i-s-o-l-трансп-ср': IISOLТранспСрModel,
    'i-i-s-o-l-тч-движ-г-с-м': IISOLТчДвижГСМModel,
    'i-i-s-o-l-тч-раб-вод-авто': IISOLТчРабВодАвтоModel
  },

  'application-name': 'OL',

  forms: {
    loading: {
      'spinner-caption': 'Loading stuff, please wait for a moment...'
    },
    index: {
      greeting: 'Welcome to ember-flexberry test stand!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Menu'
          },
          'user-settings-service-checkbox': {
            caption: 'Use service to save user settings'
          },
          'show-menu': {
            caption: 'Show menu'
          },
          'hide-menu': {
            caption: 'Hide menu'
          },
          'language-dropdown': {
            caption: 'Application language',
            placeholder: 'Choose language'
          }
        },
        login: {
          caption: 'Login'
        },
        logout: {
          caption: 'Logout'
        }
      },

      footer: {
        'application-name': 'OL',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'OL',
          title: 'OL'
        },
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        },
        index: {
          caption: 'Home',
          title: ''
        },
        'o-l': {
          caption: 'OL',
          title: 'OL',
          'i-i-s-o-l-т-ч-задан-вод-l': {
            caption: 'Т ч задан вод',
            title: ''
          },
          'i-i-s-o-l-трансп-ср-l': {
            caption: 'Трансп ср',
            title: ''
          },
          'i-i-s-o-l-журнал-учета-l': {
            caption: 'Журнал учета',
            title: ''
          },
          'i-i-s-o-l-должности-l': {
            caption: 'Должности',
            title: ''
          },
          'i-i-s-o-l-контрагент-l': {
            caption: 'Контрагент',
            title: ''
          },
          'i-i-s-o-l-договор-l': {
            caption: 'Договор',
            title: ''
          },
          'i-i-s-o-l-т-ч-водитель-l': {
            caption: 'Т ч водитель',
            title: ''
          },
          'i-i-s-o-l-тч-движ-г-с-м-l': {
            caption: 'Тч движ ГСМ',
            title: ''
          },
          'i-i-s-o-l-тч-раб-вод-авто-l': {
            caption: 'Тч раб вод авто',
            title: ''
          },
          'i-i-s-o-l-рук-отд-лог-l': {
            caption: 'Рук отд лог',
            title: ''
          },
          'i-i-s-o-l-путевой-лист-l': {
            caption: 'Путевой лист',
            title: ''
          },
          'i-i-s-o-l-организация-l': {
            caption: 'Организация',
            title: ''
          },
          'i-i-s-o-l-персонал-l': {
            caption: 'Персонал',
            title: ''
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Save operation succeed',
      'save-success-message': 'Object saved',
      'save-error-message-caption': 'Save operation failed',
      'delete-success-message-caption': 'Delete operation succeed',
      'delete-success-message': 'Object deleted',
      'delete-error-message-caption': 'Delete operation failed'
    },
    'i-i-s-o-l-договор-l': IISOLДоговорLForm,
    'i-i-s-o-l-должности-l': IISOLДолжностиLForm,
    'i-i-s-o-l-журнал-учета-l': IISOLЖурналУчетаLForm,
    'i-i-s-o-l-контрагент-l': IISOLКонтрагентLForm,
    'i-i-s-o-l-организация-l': IISOLОрганизацияLForm,
    'i-i-s-o-l-персонал-l': IISOLПерсоналLForm,
    'i-i-s-o-l-путевой-лист-l': IISOLПутевойЛистLForm,
    'i-i-s-o-l-рук-отд-лог-l': IISOLРукОтдЛогLForm,
    'i-i-s-o-l-т-ч-водитель-l': IISOLТЧВодительLForm,
    'i-i-s-o-l-т-ч-задан-вод-l': IISOLТЧЗаданВодLForm,
    'i-i-s-o-l-трансп-ср-l': IISOLТранспСрLForm,
    'i-i-s-o-l-тч-движ-г-с-м-l': IISOLТчДвижГСМLForm,
    'i-i-s-o-l-тч-раб-вод-авто-l': IISOLТчРабВодАвтоLForm,
    'i-i-s-o-l-договор-e': IISOLДоговорEForm,
    'i-i-s-o-l-должности-e': IISOLДолжностиEForm,
    'i-i-s-o-l-журнал-учета-e': IISOLЖурналУчетаEForm,
    'i-i-s-o-l-контрагент-e': IISOLКонтрагентEForm,
    'i-i-s-o-l-организация-e': IISOLОрганизацияEForm,
    'i-i-s-o-l-персонал-e': IISOLПерсоналEForm,
    'i-i-s-o-l-путевой-лист-e': IISOLПутевойЛистEForm,
    'i-i-s-o-l-рук-отд-лог-e': IISOLРукОтдЛогEForm,
    'i-i-s-o-l-т-ч-водитель-e': IISOLТЧВодительEForm,
    'i-i-s-o-l-т-ч-задан-вод-e': IISOLТЧЗаданВодEForm,
    'i-i-s-o-l-трансп-ср-e': IISOLТранспСрEForm,
    'i-i-s-o-l-тч-движ-г-с-м-e': IISOLТчДвижГСМEForm,
    'i-i-s-o-l-тч-раб-вод-авто-e': IISOLТчРабВодАвтоEForm
  },

});

export default translations;
