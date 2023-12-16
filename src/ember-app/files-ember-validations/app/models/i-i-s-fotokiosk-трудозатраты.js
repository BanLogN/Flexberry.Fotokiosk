import {
  defineNamespace,
  defineProjections,
  Model as ТрудозатратыMixin
} from '../mixins/regenerated/models/i-i-s-fotokiosk-трудозатраты';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(ТрудозатратыMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
