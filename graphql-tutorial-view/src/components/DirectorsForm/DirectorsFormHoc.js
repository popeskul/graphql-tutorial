import { withStyles } from '@material-ui/core/styles';
import { compose } from 'recompose';
import { graphql } from 'react-apollo';

import { styles } from './styles';

import { addDirectorMutation } from './mutation';
import { directorsQuery } from '../DirectorsTable/queries';

const withGraphqlAdd = graphql(addDirectorMutation, {
  props: ({ mutate }) => ({
    addDirector: (director) =>
      mutate({
        variables: director,
        refetchQueries: [{ query: directorsQuery }]
      })
  })
});

export default compose(withStyles(styles), withGraphqlAdd);
