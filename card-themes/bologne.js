import _ from 'lodash'
// import {Girl, Boy, Pig, AnotherPig, Apple} from '../card-components/default'
import Apple from './bologne-components/Apple'
import Boot from './bologne-components/Boot'
import Boy from './bologne-components/Boy'
import Cherry from './bologne-components/Cherry'
import Crow  from './bologne-components/Crow'
import Girl from './bologne-components/Girl'
import Grapes from './bologne-components/Grapes'
import Hat from './bologne-components/Hat'
import Mitten from './bologne-components/Mitten'
import Orange from './bologne-components/Orange'
import Pear from './bologne-components/Pear'
import Squirrel from './bologne-components/Squirrel'
import Umbrella from './bologne-components/Umbrella'

module.exports = {
    createCards: function (howMany) {
      const choices = [Apple, Boot, Boy, Cherry, Crow, Girl, Grapes, Hat, Mitten, Orange, Pear, Squirrel, Umbrella]
      const rand = _.shuffle(choices)
      const items = rand.slice(0,howMany)
      return _.shuffle(items.concat(items))
    },

    numItems: 13
}
