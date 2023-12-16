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
          caption: i18n.t('forms.application.sitemap.работа-с-клиентами.caption'),
          title: i18n.t('forms.application.sitemap.работа-с-клиентами.title'),
          children: [{
            link: 'i-i-s-fotokiosk-запись-время-l',
            caption: i18n.t('forms.application.sitemap.работа-с-клиентами.i-i-s-fotokiosk-запись-время-l.caption'),
            title: i18n.t('forms.application.sitemap.работа-с-клиентами.i-i-s-fotokiosk-запись-время-l.title'),
            icon: 'chart bar',
            children: null
          }, {
            link: 'i-i-s-fotokiosk-прайс-лист-l',
            caption: i18n.t('forms.application.sitemap.работа-с-клиентами.i-i-s-fotokiosk-прайс-лист-l.caption'),
            title: i18n.t('forms.application.sitemap.работа-с-клиентами.i-i-s-fotokiosk-прайс-лист-l.title'),
            icon: 'table',
            children: null
          }, {
            link: 'i-i-s-fotokiosk-запись-клиента-l',
            caption: i18n.t('forms.application.sitemap.работа-с-клиентами.i-i-s-fotokiosk-запись-клиента-l.caption'),
            title: i18n.t('forms.application.sitemap.работа-с-клиентами.i-i-s-fotokiosk-запись-клиента-l.title'),
            icon: 'chart bar',
            children: null
          }]
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.отчет-по-трудозатратам.caption'),
          title: i18n.t('forms.application.sitemap.отчет-по-трудозатратам.title'),
          children: [{
            link: 'i-i-s-fotokiosk-трудозатраты-l',
            caption: i18n.t('forms.application.sitemap.отчет-по-трудозатратам.i-i-s-fotokiosk-трудозатраты-l.caption'),
            title: i18n.t('forms.application.sitemap.отчет-по-трудозатратам.i-i-s-fotokiosk-трудозатраты-l.title'),
            icon: 'phone',
            children: null
          }]
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.расходуемые-материалы.caption'),
          title: i18n.t('forms.application.sitemap.расходуемые-материалы.title'),
          children: [{
            link: 'i-i-s-fotokiosk-материал-l',
            caption: i18n.t('forms.application.sitemap.расходуемые-материалы.i-i-s-fotokiosk-материал-l.caption'),
            title: i18n.t('forms.application.sitemap.расходуемые-материалы.i-i-s-fotokiosk-материал-l.title'),
            icon: 'chart line',
            children: null
          }]
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.сотрудники.caption'),
          title: i18n.t('forms.application.sitemap.сотрудники.title'),
          children: [{
            link: 'i-i-s-fotokiosk-сотрудники-l',
            caption: i18n.t('forms.application.sitemap.сотрудники.i-i-s-fotokiosk-сотрудники-l.caption'),
            title: i18n.t('forms.application.sitemap.сотрудники.i-i-s-fotokiosk-сотрудники-l.title'),
            icon: 'building',
            children: null
          }]
        }
      ]
    };
  }),
})