import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  sitemap: computed('i18n.locale', function () {
    let i18n = this.get('i18n');

    return {
      nodes: [
        {
          link: 'index',
          icon: 'home',
          caption: i18n.t('forms.application.sitemap.index.caption'),
          title: i18n.t('forms.application.sitemap.index.title'),
          children: null
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.o-l.caption'),
          title: i18n.t('forms.application.sitemap.o-l.title'),
          children: [{
            link: 'i-i-s-o-l-т-ч-задан-вод-l',
            caption: i18n.t('forms.application.sitemap.o-l.i-i-s-o-l-т-ч-задан-вод-l.caption'),
            title: i18n.t('forms.application.sitemap.o-l.i-i-s-o-l-т-ч-задан-вод-l.title'),
            icon: 'file',
            children: null
          }, {
            link: 'i-i-s-o-l-трансп-ср-l',
            caption: i18n.t('forms.application.sitemap.o-l.i-i-s-o-l-трансп-ср-l.caption'),
            title: i18n.t('forms.application.sitemap.o-l.i-i-s-o-l-трансп-ср-l.title'),
            icon: 'list',
            children: null
          }, {
            link: 'i-i-s-o-l-журнал-учета-l',
            caption: i18n.t('forms.application.sitemap.o-l.i-i-s-o-l-журнал-учета-l.caption'),
            title: i18n.t('forms.application.sitemap.o-l.i-i-s-o-l-журнал-учета-l.title'),
            icon: 'edit',
            children: null
          }, {
            link: 'i-i-s-o-l-должности-l',
            caption: i18n.t('forms.application.sitemap.o-l.i-i-s-o-l-должности-l.caption'),
            title: i18n.t('forms.application.sitemap.o-l.i-i-s-o-l-должности-l.title'),
            icon: 'archive',
            children: null
          }, {
            link: 'i-i-s-o-l-контрагент-l',
            caption: i18n.t('forms.application.sitemap.o-l.i-i-s-o-l-контрагент-l.caption'),
            title: i18n.t('forms.application.sitemap.o-l.i-i-s-o-l-контрагент-l.title'),
            icon: 'tasks',
            children: null
          }, {
            link: 'i-i-s-o-l-договор-l',
            caption: i18n.t('forms.application.sitemap.o-l.i-i-s-o-l-договор-l.caption'),
            title: i18n.t('forms.application.sitemap.o-l.i-i-s-o-l-договор-l.title'),
            icon: 'tags',
            children: null
          }, {
            link: 'i-i-s-o-l-т-ч-водитель-l',
            caption: i18n.t('forms.application.sitemap.o-l.i-i-s-o-l-т-ч-водитель-l.caption'),
            title: i18n.t('forms.application.sitemap.o-l.i-i-s-o-l-т-ч-водитель-l.title'),
            icon: 'folder open',
            children: null
          }, {
            link: 'i-i-s-o-l-тч-движ-г-с-м-l',
            caption: i18n.t('forms.application.sitemap.o-l.i-i-s-o-l-тч-движ-г-с-м-l.caption'),
            title: i18n.t('forms.application.sitemap.o-l.i-i-s-o-l-тч-движ-г-с-м-l.title'),
            icon: 'book',
            children: null
          }, {
            link: 'i-i-s-o-l-тч-раб-вод-авто-l',
            caption: i18n.t('forms.application.sitemap.o-l.i-i-s-o-l-тч-раб-вод-авто-l.caption'),
            title: i18n.t('forms.application.sitemap.o-l.i-i-s-o-l-тч-раб-вод-авто-l.title'),
            icon: 'list',
            children: null
          }, {
            link: 'i-i-s-o-l-рук-отд-лог-l',
            caption: i18n.t('forms.application.sitemap.o-l.i-i-s-o-l-рук-отд-лог-l.caption'),
            title: i18n.t('forms.application.sitemap.o-l.i-i-s-o-l-рук-отд-лог-l.title'),
            icon: 'briefcase',
            children: null
          }, {
            link: 'i-i-s-o-l-путевой-лист-l',
            caption: i18n.t('forms.application.sitemap.o-l.i-i-s-o-l-путевой-лист-l.caption'),
            title: i18n.t('forms.application.sitemap.o-l.i-i-s-o-l-путевой-лист-l.title'),
            icon: 'table',
            children: null
          }, {
            link: 'i-i-s-o-l-организация-l',
            caption: i18n.t('forms.application.sitemap.o-l.i-i-s-o-l-организация-l.caption'),
            title: i18n.t('forms.application.sitemap.o-l.i-i-s-o-l-организация-l.title'),
            icon: 'edit',
            children: null
          }, {
            link: 'i-i-s-o-l-персонал-l',
            caption: i18n.t('forms.application.sitemap.o-l.i-i-s-o-l-персонал-l.caption'),
            title: i18n.t('forms.application.sitemap.o-l.i-i-s-o-l-персонал-l.title'),
            icon: 'folder open',
            children: null
          }]
        }
      ]
    };
  }),
})