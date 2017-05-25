import SimpleSchema from 'simpl-schema';

SimpleSchema.extendOptions(['autoform']);

RecordSchema = new SimpleSchema({
  username: {
    type: String,
    label: '名前'
  },
  old_password: {
    type: String,
    label: '古いパスワード'
  },
  new_password: {
    type: String,
    label: '新しいパスワード'
  },
  
});