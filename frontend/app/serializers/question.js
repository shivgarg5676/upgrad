import DS from 'ember-data';

export default DS.JSONAPISerializer.extend(DS.EmbeddedRecordsMixin,{
  attrs: {

    options: {
      deserialize: 'false',
      serialize: 'records'
    }
  }
});
