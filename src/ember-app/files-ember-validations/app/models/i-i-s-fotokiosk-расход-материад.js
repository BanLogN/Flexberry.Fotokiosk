import {
  defineNamespace,
  defineProjections,
  Model as РасходМатериадMixin
} from '../mixins/regenerated/models/i-i-s-fotokiosk-расход-материад';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(РасходМатериадMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
