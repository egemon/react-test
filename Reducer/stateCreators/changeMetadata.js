/**
 * Created by ilukianov on 30.09.16.
 */
const changeMetadataField = (name, value) => {
  return {
    type: "METADATA_CHANGE",
    name,
    value
  };
};
export default changeMetadataField;