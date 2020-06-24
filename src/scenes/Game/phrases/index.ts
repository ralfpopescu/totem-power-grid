import type { TotemType } from '../../../redux/reducers';

type Phrases = { [key in TotemType]: Array<string> }

const phrases: Phrases = {
  FIRE: [
    'Burn baby burn',
    'Is it getting hot in here or is it just my fire totem',
    'What’s cookin’',
    'Also known as BBQ totem',
  ],
  WATER: [
    'Thirsty?',
    'Not responsible for any flood damage',
    'The Sewage Shaman won’t mind if I borrow these',
  ],
  EARTH: [
    'Let’s get dirty',
'Dirtier than the village night club',
'Really quite a waste, this stuff makes great fertilizer',
  ],
  ELECTRIC: [
    'Shock the monkey',
    'Finally we can upgrade our acoustic pan flutes',
    'Zap!',
  ],
  LIGHT: [
    'These make great disco balls too',
    'Good thing my mask has sunglasses built in',
    'Let there be light!',
  ],
  WIND: [],
};

export default phrases;