import _ from 'lodash';

export const getCharacterData = async () => {
  try {
    const response = await fetch('https://thronesapi.com/api/v2/Characters');
    const json = await response.json();
    const characterSectionList = _.chain(json)
      .groupBy('family')
      .map((value, key) => ({
        title: key,
        data: value,
      }))
      .value();
    return characterSectionList;
  } catch (error) {
    console.log(error);
  }
};
