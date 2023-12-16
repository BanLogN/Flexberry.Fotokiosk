import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

import IISFotokioskЗаписьВремяLForm from './forms/i-i-s-fotokiosk-запись-время-l';
import IISFotokioskЗаписьКлиентаLForm from './forms/i-i-s-fotokiosk-запись-клиента-l';
import IISFotokioskМатериалLForm from './forms/i-i-s-fotokiosk-материал-l';
import IISFotokioskПрайсЛистLForm from './forms/i-i-s-fotokiosk-прайс-лист-l';
import IISFotokioskСотрудникиLForm from './forms/i-i-s-fotokiosk-сотрудники-l';
import IISFotokioskТрудозатратыLForm from './forms/i-i-s-fotokiosk-трудозатраты-l';
import IISFotokioskЗаписьВремяEForm from './forms/i-i-s-fotokiosk-запись-время-e';
import IISFotokioskЗаписьКлиентаEForm from './forms/i-i-s-fotokiosk-запись-клиента-e';
import IISFotokioskМатериалEForm from './forms/i-i-s-fotokiosk-материал-e';
import IISFotokioskПрайсЛистEForm from './forms/i-i-s-fotokiosk-прайс-лист-e';
import IISFotokioskСотрудникиEForm from './forms/i-i-s-fotokiosk-сотрудники-e';
import IISFotokioskТрудозатратыEForm from './forms/i-i-s-fotokiosk-трудозатраты-e';
import IISFotokioskЗаписьВремяModel from './models/i-i-s-fotokiosk-запись-время';
import IISFotokioskЗаписьКлиентаModel from './models/i-i-s-fotokiosk-запись-клиента';
import IISFotokioskМатериалModel from './models/i-i-s-fotokiosk-материал';
import IISFotokioskПрайсЛистModel from './models/i-i-s-fotokiosk-прайс-лист';
import IISFotokioskРасходМатериадModel from './models/i-i-s-fotokiosk-расход-материад';
import IISFotokioskСотрудникиModel from './models/i-i-s-fotokiosk-сотрудники';
import IISFotokioskТрудозатратыModel from './models/i-i-s-fotokiosk-трудозатраты';
import IISFotokioskУслугаModel from './models/i-i-s-fotokiosk-услуга';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-fotokiosk-запись-время': IISFotokioskЗаписьВремяModel,
    'i-i-s-fotokiosk-запись-клиента': IISFotokioskЗаписьКлиентаModel,
    'i-i-s-fotokiosk-материал': IISFotokioskМатериалModel,
    'i-i-s-fotokiosk-прайс-лист': IISFotokioskПрайсЛистModel,
    'i-i-s-fotokiosk-расход-материад': IISFotokioskРасходМатериадModel,
    'i-i-s-fotokiosk-сотрудники': IISFotokioskСотрудникиModel,
    'i-i-s-fotokiosk-трудозатраты': IISFotokioskТрудозатратыModel,
    'i-i-s-fotokiosk-услуга': IISFotokioskУслугаModel
  },

  'application-name': 'Fotokiosk',

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
        'application-name': 'Fotokiosk',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Fotokiosk',
          title: 'Fotokiosk'
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
        'работа-с-клиентами': {
          caption: 'Работа с клиентами',
          title: 'Работа с клиентами',
          'i-i-s-fotokiosk-запись-время-l': {
            caption: 'Запись время',
            title: ''
          },
          'i-i-s-fotokiosk-прайс-лист-l': {
            caption: 'Прайс лист',
            title: ''
          },
          'i-i-s-fotokiosk-запись-клиента-l': {
            caption: 'Запись клиента',
            title: ''
          }
        },
        'отчет-по-трудозатратам': {
          caption: 'Отчет по трудозатратам',
          title: 'Отчет по трудозатратам',
          'i-i-s-fotokiosk-трудозатраты-l': {
            caption: 'Трудозатраты',
            title: ''
          }
        },
        'расходуемые-материалы': {
          caption: 'Расходуемые материалы',
          title: 'Расходуемые материалы',
          'i-i-s-fotokiosk-материал-l': {
            caption: 'Материал',
            title: ''
          }
        },
        сотрудники: {
          caption: 'Сотрудники',
          title: 'Сотрудники',
          'i-i-s-fotokiosk-сотрудники-l': {
            caption: 'Сотрудники',
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
    'i-i-s-fotokiosk-запись-время-l': IISFotokioskЗаписьВремяLForm,
    'i-i-s-fotokiosk-запись-клиента-l': IISFotokioskЗаписьКлиентаLForm,
    'i-i-s-fotokiosk-материал-l': IISFotokioskМатериалLForm,
    'i-i-s-fotokiosk-прайс-лист-l': IISFotokioskПрайсЛистLForm,
    'i-i-s-fotokiosk-сотрудники-l': IISFotokioskСотрудникиLForm,
    'i-i-s-fotokiosk-трудозатраты-l': IISFotokioskТрудозатратыLForm,
    'i-i-s-fotokiosk-запись-время-e': IISFotokioskЗаписьВремяEForm,
    'i-i-s-fotokiosk-запись-клиента-e': IISFotokioskЗаписьКлиентаEForm,
    'i-i-s-fotokiosk-материал-e': IISFotokioskМатериалEForm,
    'i-i-s-fotokiosk-прайс-лист-e': IISFotokioskПрайсЛистEForm,
    'i-i-s-fotokiosk-сотрудники-e': IISFotokioskСотрудникиEForm,
    'i-i-s-fotokiosk-трудозатраты-e': IISFotokioskТрудозатратыEForm
  },

});

export default translations;
