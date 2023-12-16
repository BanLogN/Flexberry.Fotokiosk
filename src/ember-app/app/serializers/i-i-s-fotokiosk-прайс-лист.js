import { Serializer as ПрайсЛистSerializer } from
  '../mixins/regenerated/serializers/i-i-s-fotokiosk-прайс-лист';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(ПрайсЛистSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
