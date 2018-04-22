import yaml  from 'yamljs';

import enData from './en.yaml';
import frData from './fr.yaml';

const getTranslations = async () => {
    const en = await convert(enData);
    const fr = await convert(frData);

    return {
      en,
      fr,
    };
};

const convert = async (data) => {
  const response = await fetch(data);
  const text = await response.text();
  const intlContent = yaml.parse(text);
  const intlFlatten = {};

  for (const property in intlContent) {
    flatten(intlContent[property], property, intlFlatten);
  }

  return intlFlatten;
};

const flatten = (data, name, intlFlatten) => {
  if (!(data !== null && ((typeof data === 'function') || (typeof data === 'object')))) {
        intlFlatten[name] = data;

        return;
    }

    for (const property in data) {
        if (data.hasOwnProperty(property)) {
            flatten(data[property], name + '.' + property, intlFlatten)
        }
    }
};

export default getTranslations;
