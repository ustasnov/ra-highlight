import PropTypes from 'prop-types';
import New from '../new/New';
import Popular from '../popular/Popular';

const withHighlighting = (WrappedComp) => {
  const WithHighlighting = (props) => {
    if (props.views < 100) {
      return <New><WrappedComp {...props} /></New>
    }
    return <Popular><WrappedComp {...props} /></Popular>
  }

  WithHighlighting.propTypes = {
    views: PropTypes.number
  }

  WithHighlighting.displayName = `withHighlighting(${WrappedComp.displayName || WrappedComp.name})`;
  return WithHighlighting;
}

export default withHighlighting;
