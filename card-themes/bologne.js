import _ from 'lodash'
import {Girl, Boy, Pig, AnotherPig, Apple} from '../card-components/default'

module.exports = {
    createCards: function (howMany) {
      const choices = [Girl, Boy, Pig, AnotherPig, Apple]
      const rand = _.shuffle(choices)
      const items = rand.slice(0,howMany)
      return _.shuffle(items.concat(items))
    },

    numItems: 5
}
