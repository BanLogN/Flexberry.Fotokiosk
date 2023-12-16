import {
  defineNamespace,
  defineProjections,
  Model as ПрайсЛистMixin
} from '../mixins/regenerated/models/i-i-s-fotokiosk-прайс-лист';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(ПрайсЛистMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
